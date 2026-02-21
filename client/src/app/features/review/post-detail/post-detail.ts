import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ReviewPostModel } from '../../../shared/models/review/review-post';
import { ToastMessageService } from '../../../core/services/toast-message';
import { ReviewService } from '../../../core/services/review';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail {
  private reviewService = inject(ReviewService);
  private toast = inject(ToastMessageService);
  private route = inject(ActivatedRoute);
  loading = signal(false);
  postDetail = signal<ReviewPostModel | null>(null);
  defaultImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBinPdQro1V2_OcP9hPIZoH76W0EnlblRjNxKyc17teKYqHqmhMCzWGvggFHFkygAmXiPN_aBzLU9Rhk6X8Vvar_xc3nSfBBOR6yQ1eCQ4kktJsiqv0rvE8-U070efgXxq0OEEXGoZ_WcxT4LlXPL5JgsgFxpdjnsM_d5O4AgzMRsJkGnPCauyo-dit2hkNFL6RBeisDVC4ijGefQgo53GjlzjDLF-dEpebVPtkOQVg090SD3p5kW21vcKzX4fYhOZbWp9C4jZlSEsO';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPostDetail(id);
    }
  }

  private loadPostDetail(id: string): void {
    this.loading.set(true);

    this.reviewService.getById(id).subscribe({
      next: (post) => {
        console.log(post);
        this.postDetail.set(post);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.toast.error('Error', 'Could not load review posts.');
      },
    });
  }
}
