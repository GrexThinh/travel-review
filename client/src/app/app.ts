import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Nav } from './nav/nav';
import { AccountService } from './core/services/account';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private accountService = inject(AccountService);
  private platformId = inject(PLATFORM_ID);

  protected readonly title = signal('travel-review');

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    // ✅ Only run in browser
    if (!isPlatformBrowser(this.platformId)) return;

    const userString = localStorage.getItem('user');
    if (!userString) return;

    const user = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
