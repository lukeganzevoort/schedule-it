import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Team {
  id: string;
  name: string;
}

interface Field {
  id: string;
  name: string;
}

interface Referee {
  id: string;
  name: string;
}

interface Game {
  week: number;
  homeTeam: string;
  awayTeam: string;
  field: string;
  referee: string;
  time: string;
}

@Component({
  selector: 'app-schedule-builder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './schedule-builder.html',
  styleUrl: './schedule-builder.css',
})
export class ScheduleBuilder {
  // Input fields
  teamName = signal('');
  fieldName = signal('');
  refereeName = signal('');
  numberOfWeeks = signal(8);

  // Lists
  teams = signal<Team[]>([]);
  fields = signal<Field[]>([]);
  referees = signal<Referee[]>([]);

  // Generated schedule
  schedule = signal<Game[]>([]);
  scheduleGenerated = signal(false);

  // Add methods
  addTeam() {
    const name = this.teamName().trim();
    if (name) {
      this.teams.update((teams) => [...teams, { id: crypto.randomUUID(), name }]);
      this.teamName.set('');
    }
  }

  addField() {
    const name = this.fieldName().trim();
    if (name) {
      this.fields.update((fields) => [...fields, { id: crypto.randomUUID(), name }]);
      this.fieldName.set('');
    }
  }

  addReferee() {
    const name = this.refereeName().trim();
    if (name) {
      this.referees.update((referees) => [...referees, { id: crypto.randomUUID(), name }]);
      this.refereeName.set('');
    }
  }

  // Remove methods
  removeTeam(id: string) {
    this.teams.update((teams) => teams.filter((t) => t.id !== id));
  }

  removeField(id: string) {
    this.fields.update((fields) => fields.filter((f) => f.id !== id));
  }

  removeReferee(id: string) {
    this.referees.update((referees) => referees.filter((r) => r.id !== id));
  }

  // Generate schedule
  generateSchedule() {
    const teams = this.teams();
    const fields = this.fields();
    const referees = this.referees();
    const weeks = this.numberOfWeeks();

    // Validation
    if (teams.length < 2) {
      alert('Please add at least 2 teams');
      return;
    }
    if (fields.length < 1) {
      alert('Please add at least 1 field');
      return;
    }
    if (referees.length < 1) {
      alert('Please add at least 1 referee');
      return;
    }
    if (weeks < 1) {
      alert('Please specify at least 1 week');
      return;
    }

    // Generate round-robin schedule
    const games: Game[] = [];
    const teamList = [...teams];

    // If odd number of teams, add a "BYE" team
    if (teamList.length % 2 !== 0) {
      teamList.push({ id: 'bye', name: 'BYE' });
    }

    const numTeams = teamList.length;
    const gamesPerWeek = numTeams / 2;
    const totalRounds = numTeams - 1;

    // Generate matchups using round-robin algorithm
    for (let week = 0; week < weeks; week++) {
      const round = week % totalRounds;

      for (let game = 0; game < gamesPerWeek; game++) {
        let home: number;
        let away: number;

        if (game === 0) {
          home = 0;
          away = numTeams - 1;
        } else {
          home = (round + game) % (numTeams - 1);
          if (home >= 0) home++;
          away = (round - game + numTeams - 1) % (numTeams - 1);
          if (away >= 0) away++;
        }

        const homeTeam = teamList[home];
        const awayTeam = teamList[away];

        // Skip games with BYE team
        if (homeTeam.name !== 'BYE' && awayTeam.name !== 'BYE') {
          const field = fields[game % fields.length];
          const referee = referees[game % referees.length];

          // Generate time slots (starting at 6:00 PM, 1 hour apart)
          const startHour = 18 + Math.floor(game / fields.length);
          const time = `${startHour}:00`;

          games.push({
            week: week + 1,
            homeTeam: homeTeam.name,
            awayTeam: awayTeam.name,
            field: field.name,
            referee: referee.name,
            time: time,
          });
        }
      }
    }

    this.schedule.set(games);
    this.scheduleGenerated.set(true);
  }

  // Get games for a specific week
  getGamesForWeek(week: number): Game[] {
    return this.schedule().filter((game) => game.week === week);
  }

  // Get unique weeks
  getWeeks(): number[] {
    const weeks = new Set(this.schedule().map((game) => game.week));
    return Array.from(weeks).sort((a, b) => a - b);
  }

  // Reset schedule
  resetSchedule() {
    this.schedule.set([]);
    this.scheduleGenerated.set(false);
  }

  // Clear all data
  clearAll() {
    if (confirm('Are you sure you want to clear all data?')) {
      this.teams.set([]);
      this.fields.set([]);
      this.referees.set([]);
      this.schedule.set([]);
      this.scheduleGenerated.set(false);
      this.numberOfWeeks.set(8);
    }
  }
}
