import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { League } from '../models/league.model';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  private apiUrl = 'http://localhost:3000/api/leagues';

  constructor(private http: HttpClient) {}

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(this.apiUrl);
  }

  getLeague(id: string): Observable<League> {
    return this.http.get<League>(`${this.apiUrl}/${id}`);
  }

  createLeague(league: Partial<League>): Observable<League> {
    return this.http.post<League>(this.apiUrl, league);
  }

  updateLeague(id: string, league: Partial<League>): Observable<League> {
    return this.http.put<League>(`${this.apiUrl}/${id}`, league);
  }

  deleteLeague(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
