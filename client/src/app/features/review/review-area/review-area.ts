import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-review-area',
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './review-area.html',
  styleUrl: './review-area.css',
})
export class ReviewArea {}
