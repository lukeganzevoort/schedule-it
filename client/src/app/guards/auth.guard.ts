import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // If already authenticated, allow immediately
  if (authService.isAuthenticated()) {
    return true;
  }

  // If there's a token, wait for auth check to complete
  if (authService.getToken()) {
    return authService.authCheckComplete$.pipe(
      take(1),
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true;
        }
        router.navigate(['/login']);
        return false;
      })
    );
  }

  // No token, redirect to login
  router.navigate(['/login']);
  return false;
};
