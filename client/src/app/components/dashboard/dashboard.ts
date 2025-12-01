import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LeagueService } from '../../services/league.service';
import { League } from '../../models/league.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  leagues = signal<League[]>([]);
  loading = signal(true);
  showCreateModal = false;
  newLeague = {
    name: '',
    description: '',
  };

  constructor(
    public authService: AuthService,
    private leagueService: LeagueService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLeagues();
  }

  loadLeagues(): void {
    this.loading.set(true);
    this.leagueService.getLeagues().subscribe({
      next: (leagues) => {
        console.log('Leagues loaded:', leagues);
        this.leagues.set(leagues);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading leagues:', err);
        this.loading.set(false);
      },
    });
  }

  openCreateModal(): void {
    this.showCreateModal = true;
    this.newLeague = { name: '', description: '' };
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
  }

  createLeague(): void {
    if (!this.newLeague.name.trim()) {
      return;
    }

    this.leagueService
      .createLeague({
        name: this.newLeague.name,
        description: this.newLeague.description,
        settings: {
          teams: [],
          fields: [],
          referees: [],
        },
        schedule: [],
      })
      .subscribe({
        next: (league) => {
          this.leagues.update((leagues) => [league, ...leagues]);
          this.closeCreateModal();
        },
        error: (err) => {
          console.error('Error creating league:', err);
          alert('Failed to create league. Please try again.');
        },
      });
  }

  deleteLeague(leagueId: string | undefined): void {
    if (!leagueId) return;

    if (confirm('Are you sure you want to delete this league? This action cannot be undone.')) {
      this.leagueService.deleteLeague(leagueId).subscribe({
        next: () => {
          this.leagues.update((leagues) => leagues.filter((l) => l._id !== leagueId));
        },
        error: (err) => {
          console.error('Error deleting league:', err);
          alert('Failed to delete league. Please try again.');
        },
      });
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
