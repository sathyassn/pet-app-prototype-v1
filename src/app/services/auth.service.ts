import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  signup(email: string, password: string) {
    console.log('Signing up:', email, password);
    this.setAuthenticated(true);
    this.router.navigate(['/']);
  }

  signin(email: string, password: string) {
    console.log('Signing in:', email, password);
    this.setAuthenticated(true);
    this.router.navigate(['/']);
  }

  signout() {
    this.setAuthenticated(false);
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  private setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
    if (isAuthenticated) {
      localStorage.setItem('token', 'demo-token');
    }
  }
}