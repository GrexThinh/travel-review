import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable, tap } from 'rxjs';
import { ReviewPostModel } from '../../shared/models/review/review-post';

const base = environment.apiUrl + 'review';

export interface CreateReviewPayload {
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
  coverPhotoFile: File | null;
  extraPhotoFiles: File[];
}

export interface UpdateReviewPayload {
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
}

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private http = inject(HttpClient);

  getAll(): Observable<ReviewPostModel[]> {
    return this.http.get<ReviewPostModel[]>(base);
  }

  getById(id: string): Observable<ReviewPostModel> {
    return this.http.get<ReviewPostModel>(base + '/' + id);
  }

  create(payload: CreateReviewPayload): Observable<ReviewPostModel> {
    const formData = new FormData();
    formData.append('Title', payload.title);
    formData.append('Description', payload.description);
    if (payload.additionalInformation != null) {
      formData.append('AdditionalInformation', payload.additionalInformation);
    }
    formData.append('RatingOverall', String(payload.ratingOverall));
    formData.append('Location', payload.location);
    formData.append('Longitude', String(payload.longitude));
    formData.append('Latitude', String(payload.latitude));
    formData.append('IsRecommended', String(payload.isRecommended));
    formData.append('CategoriesJson', JSON.stringify(payload.categories));
    formData.append('RatingDetailsJson', JSON.stringify(payload.ratingDetails));
    if (payload.coverPhotoFile) {
      formData.append('CoverPhoto', payload.coverPhotoFile);
    }
    payload.extraPhotoFiles.forEach((f) => formData.append('ExtraPhotos', f));

    return this.http.post<ReviewPostModel>(base, formData);
  }

  update(id: string, payload: UpdateReviewPayload): Observable<ReviewPostModel> {
    return this.http.put<ReviewPostModel>(base + '/' + id, payload);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(base + '/'  + id);
  }
}
