export interface League {
  _id?: string;
  name: string;
  description: string;
  userId?: string;
  settings: LeagueSettings;
  schedule: Game[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LeagueSettings {
  teams: string[];
  fields: string[];
  referees: string[];
  startDate?: Date;
  endDate?: Date;
}

export interface Game {
  gameId: string;
  homeTeam: string;
  awayTeam: string;
  field: string;
  referee?: string;
  dateTime: Date;
}
