import { CommonModule } from '@angular/common';
import { Component, inject, signal, effect } from '@angular/core';
import { AccountService } from '../core/services/account';
import { RouterLink, Router, RouterLinkActive } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, MenuModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  accountService = inject(AccountService);
  items: MenuItem[] | undefined;
  currentView = signal('explore');
  private router = inject(Router);

  defaultAvatar =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCCBTpVRD6FqSFWg_ZLzFGIph1-3ekobAp9MOf138jEEfpTZkMK1xeEnzvlJZqyoif-nvXpeKnUACTfkn7Tiruc3qNeavQIxxBFQDlaW-laRuUf_YaeU30kQCaPAPHfpwcMRTLk7R80wNJyozuk5-340qoInCSRK5KJ5h_ew25p6noXNXf8-wLvuLMHyQsBppK2XxkIy_s0KGtohpJO2Af1ruTTjcpMxNm3-G22WkZ8HBPPOA7byEchvPjKBUvNwFr5bULoA1iobTzn';

  // reactively update menu items when current user changes (runs in injection context)
  private itemsEffect = effect(() => {
    const user = this.accountService.currentUser();
    if (!user) {
      this.items = [
        {
          label: 'Login',
          icon: 'pi pi-sign-in',
          command: () => this.router.navigate(['/account/login']),
        },
      ];
    } else {
      this.items = [
        {
          label: 'My Profile',
          icon: 'pi pi-user',
          command: () => this.router.navigate(['/account/profile']),
        },
        {
          label: 'Settings',
          icon: 'pi pi-cog',
          command: () => this.router.navigate(['/account/settings']),
        },
        { separator: true },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          command: () => {
            this.accountService.logout();
            this.router.navigate(['/']);
          },
        },
      ];
    }
  });

  views = [
    { id: 'explore', name: 'Explore Feed' },
    { id: 'detail', name: 'Review Detail' },
    { id: 'profile', name: 'User Profile' },
    { id: 'create', name: 'Write Review' },
    { id: 'logout', name: 'Logout' },
    { id: 'admin-users', name: 'Admin Users' },
    { id: 'admin-dash', name: 'Admin Dashboard' },
  ];

  // ngOnInit left intentionally empty; initialization happens via field initializer effect

  onAvatarClick(event: Event, menu: any) {
    const user = this.accountService.currentUser();
    if (!user) {
      this.router.navigate(['/account/login']);
      return;
    }

    // toggle the PrimeNG menu when user is signed in
    menu?.toggle?.(event);
  }
}
