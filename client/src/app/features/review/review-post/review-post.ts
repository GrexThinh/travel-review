import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReviewService } from '../../../core/services/review';
import { ToastMessageService } from '../../../core/services/toast-message';
import { ReviewPostModel } from '../../../shared/models/review/review-post';

@Component({
  selector: 'app-review-post',
  imports: [CommonModule, RouterLink],
  templateUrl: './review-post.html',
  styleUrl: './review-post.css',
})
export class ReviewPost {
  private reviewService = inject(ReviewService);
  private toast = inject(ToastMessageService);
  loading = signal(false);
  currentView = signal('all');
  posts = signal<ReviewPostModel[]>([]);

  heightClasses = ['h-40', 'h-56', 'h-64', 'h-72', 'h-80'];
  defaultImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBinPdQro1V2_OcP9hPIZoH76W0EnlblRjNxKyc17teKYqHqmhMCzWGvggFHFkygAmXiPN_aBzLU9Rhk6X8Vvar_xc3nSfBBOR6yQ1eCQ4kktJsiqv0rvE8-U070efgXxq0OEEXGoZ_WcxT4LlXPL5JgsgFxpdjnsM_d5O4AgzMRsJkGnPCauyo-dit2hkNFL6RBeisDVC4ijGefQgo53GjlzjDLF-dEpebVPtkOQVg090SD3p5kW21vcKzX4fYhOZbWp9C4jZlSEsO';

  getHeightByIndex(index: number): string {
    const pseudoRandom = (index * 7 + 3) % this.heightClasses.length;
    return this.heightClasses[pseudoRandom];
  }

  views = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Food' },
    { id: 'hotel', name: 'Hotels' },
  ];

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.loading.set(true);

    this.reviewService.getAll().subscribe({
      next: (posts) => {
        console.log(posts);
        this.posts.set(posts);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.toast.error('Error', 'Could not load review posts.');
      },
    });
  }
}
