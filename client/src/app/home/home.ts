import { Component } from '@angular/core';
import { ReviewPost } from '../features/review/review-post/review-post';

@Component({
  selector: 'app-home',
  imports: [ReviewPost],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
