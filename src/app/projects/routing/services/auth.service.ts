import { Service, signal } from '@angular/core';

@Service()
export class AuthService {
  // Public readonly signal exposed to components
  isLoggedIn: boolean = false;

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
