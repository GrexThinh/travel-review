import { Component } from '@angular/core';
import { ExploreFeedComponent } from '../components/explore-feed.component';

@Component({
  selector: 'app-home',
  imports: [ExploreFeedComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
