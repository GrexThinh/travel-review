import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal, computed } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EditorModule } from 'primeng/editor';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SliderModule } from 'primeng/slider';
import { ReviewCategoryModel } from '../../../shared/models/review/review-category';
import { getRatingLabel } from '../../../shared/helper/helper';
import { ReviewService, CreateReviewPayload, UpdateReviewPayload } from '../../../core/services/review';
import { ToastMessageService } from '../../../core/services/toast-message';
import { environment } from '../../../../environments/environment.development';

const DEFAULT_RATING_DETAILS = [
  { name: 'Service', icon: null },
  { name: 'Cleanliness', icon: null },
  { name: 'Value', icon: null },
];

export const PREDEFINED_CATEGORIES: Pick<ReviewCategoryModel, 'id' | 'name' | 'icon'>[] = [
  { id: 'food', name: 'Food & Drink', icon: 'restaurant' },
  { id: 'stay', name: 'Stays', icon: 'hotel' },
  { id: 'activity', name: 'Activities', icon: 'hiking' },
];

export interface SelectedCategory {
  id: string;
  name: string;
}

@Component({
  selector: 'app-post-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorModule,
    ToggleSwitchModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    FloatLabelModule,
    SliderModule,
    RouterLink,
  ],
  templateUrl: './post-form.html',
  styleUrl: './post-form.css',
})
export class PostForm implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private reviewService = inject(ReviewService);
  private toast = inject(ToastMessageService);
  readonly getRatingLabel = getRatingLabel;

  predefinedCategories = PREDEFINED_CATEGORIES;
  ratingDetailLabels = DEFAULT_RATING_DETAILS;
  form: FormGroup;

  /** When editing: existing cover photo URL from API (absolute). */
  existingCoverUrl: string | null = null;
  /** Preview URL for new cover photo (object URL); revoked on clear/destroy */
  coverPhotoPreviewUrl: string | null = null;

  /** Extra photos: file + preview URL for UI */
  extraPhotos: { file: File; previewUrl: string }[] = [];

  /** Edit mode: we have a post id and load existing data */
  postId = signal<string | null>(null);
  isEditMode = computed(() => this.postId() != null);
  loading = signal(false);
  loadError = signal<string | null>(null);
  saving = signal(false);
  deleting = signal(false);

  /** Base URL for API (no /api) to build photo URLs */
  private apiBase = environment.apiUrl.replace(/\/api\/?$/, '');

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.postId.set(id);
      this.loadPost(id);
    }
  }

  ngOnDestroy(): void {
    if (this.coverPhotoPreviewUrl) {
      URL.revokeObjectURL(this.coverPhotoPreviewUrl);
    }
    this.extraPhotos.forEach((p) => URL.revokeObjectURL(p.previewUrl));
  }

  private loadPost(id: string): void {
    this.loading.set(true);
    this.loadError.set(null);
    this.reviewService.getById(id).subscribe({
      next: (post) => {
        this.patchFormFromPost(post);
        const cover = post.photos?.find((p) => p.isCover);
        if (cover?.url) {
          this.existingCoverUrl = cover.url.startsWith('http') ? cover.url : this.apiBase + cover.url;
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        const status = err?.status;
        if (status === 401) {
          this.loadError.set('Please log in again to edit this review.');
        } else if (status === 404) {
          this.loadError.set('Review not found or you don\'t have access to edit it.');
        } else {
          this.loadError.set('Could not load review. Check your connection and try again.');
        }
        this.toast.error('Error', this.loadError() ?? 'Could not load review.');
      },
    });
  }

  retryLoad(): void {
    const id = this.postId();
    if (id) {
      this.loadError.set(null);
      this.loadPost(id);
    }
  }

  private patchFormFromPost(post: {
    title: string;
    description: string;
    additionalInformation: string | null;
    ratingOverall: number;
    location: string;
    longitude: number;
    latitude: number;
    isRecommended: boolean;
    categories: { id: string; name: string }[];
    ratingDetails: { name: string; rating: number }[];
  }): void {
    this.form.patchValue({
      title: post.title,
      description: post.description,
      location: post.location,
      longitude: post.longitude,
      latitude: post.latitude,
      isRecommended: post.isRecommended,
      ratingOverall: post.ratingOverall,
    });
    if (post.additionalInformation) {
      try {
        const obj = JSON.parse(post.additionalInformation) as Record<string, string>;
        const entries = Object.entries(obj);
        this.additionalInformationFields.clear();
        entries.forEach(([key, value]) => {
          this.additionalInformationFields.push(
            this.fb.nonNullable.group({ key: [key], value: [value ?? ''] }),
          );
        });
        if (this.additionalInformationFields.length === 0) {
          this.additionalInformationFields.push(this.createAdditionalFieldGroup());
        }
      } catch {
        // keep default one field
      }
    }
    this.selectedCategories.clear();
    (post.categories || []).forEach((c) => {
      this.selectedCategories.push(this.fb.nonNullable.group({ id: c.id, name: c.name }));
    });
    if (this.selectedCategories.length === 0) {
      this.selectedCategories.push(this.fb.nonNullable.group({ id: 'food', name: 'Food & Drink' }));
    }
    const details = post.ratingDetails ?? [];
    this.ratingDetails.clear();
    if (details.length > 0) {
      details.forEach((rd) => {
        this.ratingDetails.push(
          this.fb.nonNullable.group({ name: [rd.name], rating: [rd.rating, [Validators.min(1), Validators.max(5)]] }),
        );
      });
    } else {
      DEFAULT_RATING_DETAILS.forEach((r) => {
        this.ratingDetails.push(
          this.fb.nonNullable.group({ name: [r.name], rating: [3, [Validators.min(1), Validators.max(5)]] }),
        );
      });
    }
  }

  get additionalInformationFields(): FormArray {
    return this.form.get('additionalInformationFields') as FormArray;
  }

  get ratingDetails(): FormArray {
    return this.form.get('ratingDetails') as FormArray;
  }

  get selectedCategories(): FormArray {
    return this.form.get('selectedCategories') as FormArray;
  }

  constructor() {
    this.form = this.fb.nonNullable.group({
      title: ['', [Validators.required, Validators.maxLength(200)]],
      description: ['', Validators.required],
      additionalInformationFields: this.fb.array([this.createAdditionalFieldGroup()]),
      ratingOverall: [3, [Validators.required, Validators.min(1), Validators.max(5)]],
      location: ['', Validators.required],
      longitude: [0],
      latitude: [0],
      isRecommended: [true],
      selectedCategories: this.fb.array([
        this.fb.nonNullable.group({ id: 'food', name: 'Food & Drink' }),
      ]),
      ratingDetails: this.fb.array(
        DEFAULT_RATING_DETAILS.map((r) =>
          this.fb.nonNullable.group({
            name: [r.name],
            rating: [3, [Validators.min(1), Validators.max(5)]],
          }),
        ),
      ),
      coverPhotoFile: [null as File | null],
      customCategoryInput: [''],
    });
  }

  private createAdditionalFieldGroup(): FormGroup {
    return this.fb.nonNullable.group({
      key: [''],
      value: [''],
    });
  }

  addAdditionalField(): void {
    this.additionalInformationFields.push(this.createAdditionalFieldGroup());
  }

  removeAdditionalField(index: number): void {
    if (this.additionalInformationFields.length > 1) {
      this.additionalInformationFields.removeAt(index);
    }
  }

  isCategorySelected(categoryId: string): boolean {
    return this.selectedCategories.controls.some(
      (c) => (c.get('id')?.value as string) === categoryId,
    );
  }

  toggleCategory(cat: { id: string; name: string }): void {
    const idx = this.selectedCategories.controls.findIndex(
      (c) => (c.get('id')?.value as string) === cat.id,
    );
    if (idx >= 0) {
      this.selectedCategories.removeAt(idx);
    } else {
      this.selectedCategories.push(this.fb.nonNullable.group({ id: cat.id, name: cat.name }));
    }
  }

  addCustomCategory(): void {
    const name = this.form.get('customCategoryInput')?.value?.trim();
    if (!name) return;
    const id = 'custom-' + Date.now();
    this.selectedCategories.push(this.fb.nonNullable.group({ id, name }));
    this.form.patchValue({ customCategoryInput: '' });
  }

  removeCategory(index: number): void {
    if (this.selectedCategories.length > 1) {
      this.selectedCategories.removeAt(index);
    }
  }

  /** Build payload matching API: additionalInformation as JSON string from key-value list */
  getPayload(_isDraft: boolean): CreateReviewPayload {
    const raw = this.form.getRawValue();
    const additionalObj = (raw.additionalInformationFields as { key: string; value: string }[])
      .filter((f) => f.key?.trim())
      .reduce(
        (acc, f) => ({ ...acc, [f.key.trim()]: f.value?.trim() ?? '' }),
        {} as Record<string, string>,
      );
    return {
      title: raw.title,
      description: raw.description,
      additionalInformation:
        Object.keys(additionalObj).length > 0 ? JSON.stringify(additionalObj) : null,
      ratingOverall: raw.ratingOverall,
      location: raw.location,
      longitude: raw.longitude ?? 0,
      latitude: raw.latitude ?? 0,
      isRecommended: raw.isRecommended,
      categories: (raw.selectedCategories as SelectedCategory[]).map((c) => ({
        id: c.id,
        name: c.name,
      })),
      ratingDetails: raw.ratingDetails.map((rd: { name: string; rating: number }) => ({
        name: rd.name,
        rating: rd.rating,
      })),
      coverPhotoFile: raw.coverPhotoFile as File | null,
      extraPhotoFiles: this.extraPhotos.map((p) => p.file),
    };
  }

  saveDraft(): void {
    this.form.markAllAsTouched();
    this.submit(true);
  }

  publish(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submit(false);
  }

  private submit(isDraft: boolean): void {
    const raw = this.getPayload(isDraft);
    const id = this.postId();
    this.saving.set(true);
    if (id) {
      const updatePayload: UpdateReviewPayload = {
        title: raw.title,
        description: raw.description,
        additionalInformation: raw.additionalInformation,
        ratingOverall: raw.ratingOverall,
        location: raw.location,
        longitude: raw.longitude,
        latitude: raw.latitude,
        isRecommended: raw.isRecommended,
        categories: raw.categories,
        ratingDetails: raw.ratingDetails,
      };
      this.reviewService.update(id, updatePayload).subscribe({
        next: () => {
          this.saving.set(false);
          this.toast.success('Saved', 'Review updated successfully.');
          this.router.navigate(['/review', 'detail', id]);
        },
        error: (err) => {
          this.saving.set(false);
          this.toast.error('Error', err?.error?.message ?? 'Failed to update review.');
        },
      });
    } else {
      this.reviewService.create(raw).subscribe({
        next: (created) => {
          this.saving.set(false);
          this.toast.success('Published', 'Review created successfully.');
          this.router.navigate(['/review', 'detail', created.id]);
        },
        error: (err) => {
          this.saving.set(false);
          this.toast.error('Error', err?.error?.message ?? 'Failed to create review.');
        },
      });
    }
  }

  deletePost(): void {
    const id = this.postId();
    if (!id) return;
    if (!confirm('Delete this review? This cannot be undone.')) return;
    this.deleting.set(true);
    this.reviewService.delete(id).subscribe({
      next: () => {
        this.deleting.set(false);
        this.toast.success('Deleted', 'Review removed.');
        this.router.navigate(['/review']);
      },
      error: (err) => {
        this.deleting.set(false);
        this.toast.error('Error', err?.error?.message ?? 'Failed to delete review.');
      },
    });
  }

  onCoverPhotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.existingCoverUrl = null;
    if (this.coverPhotoPreviewUrl) URL.revokeObjectURL(this.coverPhotoPreviewUrl);
    this.coverPhotoPreviewUrl = URL.createObjectURL(file);
    this.form.patchValue({ coverPhotoFile: file });
    input.value = '';
  }

  clearCoverPhoto(): void {
    if (this.coverPhotoPreviewUrl) {
      URL.revokeObjectURL(this.coverPhotoPreviewUrl);
      this.coverPhotoPreviewUrl = null;
    }
    this.form.patchValue({ coverPhotoFile: null });
  }

  onExtraPhotosChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (!files?.length) return;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith('image/')) continue;
      this.extraPhotos.push({
        file,
        previewUrl: URL.createObjectURL(file),
      });
    }
    input.value = '';
  }

  removeExtraPhoto(index: number): void {
    URL.revokeObjectURL(this.extraPhotos[index].previewUrl);
    this.extraPhotos.splice(index, 1);
  }

  setOverallRating(value: number): void {
    this.form.patchValue({ ratingOverall: value });
  }
}
