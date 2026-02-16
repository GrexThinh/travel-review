import { Route } from '@angular/router';
import { ReviewPost } from './review-post/review-post';
import { PostDetail } from './post-detail/post-detail';
import { PostForm } from './post-form/post-form';

export const reviewRoutes: Route[] = [
  { path: '', component: ReviewPost },
  { path: 'detail/:id', component: PostDetail },
  { path: 'create', component: PostForm },
  {
    path: 'edit/:id',
    component: PostForm,
    // canDeactivate: [preventUnsavedChangesGuard],
  },
];
