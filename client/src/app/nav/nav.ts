import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AccountService } from '../core/services/account';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  accountService = inject(AccountService);

  currentView = signal('explore');

  views = [
    { id: 'explore', name: 'Explore Feed' },
    { id: 'detail', name: 'Review Detail' },
    { id: 'profile', name: 'User Profile' },
    { id: 'create', name: 'Write Review' },
    { id: 'logout', name: 'Logout' },
    { id: 'admin-users', name: 'Admin Users' },
    { id: 'admin-dash', name: 'Admin Dashboard' },
  ];
}
