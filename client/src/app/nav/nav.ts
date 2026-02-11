import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  currentView = signal('explore');

  views = [
    { id: 'explore', name: 'Explore Feed' },
    { id: 'detail', name: 'Review Detail' },
    { id: 'profile', name: 'User Profile' },
    { id: 'create', name: 'Write Review' },
    { id: 'login', name: 'Login' },
    { id: 'admin-users', name: 'Admin Users' },
    { id: 'admin-dash', name: 'Admin Dashboard' },
  ];
}
