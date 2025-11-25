import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.css'],
})
export class UserForm {
  user: User = {
    name: '',
    email: '',
  };
  success = signal('');
  error = signal('');

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.success.set('');
    this.error.set('');

    this.userService.createUser(this.user).subscribe({
      next: (data) => {
        this.success.set('User created successfully!');
        this.user = { name: '', email: '' };
      },
      error: (err) => {
        this.error.set('Failed to create user');
        console.error(err);
      },
    });
  }
}
