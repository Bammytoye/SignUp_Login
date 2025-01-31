import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  // Toggle state for mobile menu
  isMobileMenuOpen = false;

  loggedUser: any = { email: 'user@example.com' };

  // Navigation links
  navLinks = [
    { path: '/dashboard', label: 'Home' },
    { path: '/blog', label: 'Blog' },
    { path: '/about-us', label: 'About Us' },
    { path: '/terms&conditions', label: 'Terms and Conditions' },
  ];

  // Toggle mobile menu visibility
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


  constructor(private router: Router) {
    const localUser = localStorage.getItem('loggedUser');
    if (localUser) {
      this.loggedUser = JSON.parse(localUser);
    }
  }

  onLogoff() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }
}
