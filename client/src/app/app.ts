import { Component, signal } from '@angular/core';
import { UserList } from './components/user-list/user-list';
import { UserForm } from './components/user-form/user-form';
import { ScheduleBuilder } from './components/schedule-builder/schedule-builder';

@Component({
  selector: 'app-root',
  imports: [UserList, UserForm, ScheduleBuilder],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('schedule-it-rec-leagues-client');
}
