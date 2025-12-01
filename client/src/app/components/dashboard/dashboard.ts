import { Component, OnInit } from '@angular/core';
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
  leagues: League[] = [];
  loading = true;
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
    this.loading = true;
    this.leagueService.getLeagues().subscribe({
      next: (leagues) => {
        this.leagues = leagues;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading leagues:', err);
        this.loading = false;
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
          this.leagues.unshift(league);
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
          this.leagues = this.leagues.filter((l) => l._id !== leagueId);
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
