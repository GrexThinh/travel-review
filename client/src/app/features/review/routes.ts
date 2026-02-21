import { Route } from '@angular/router';
import { ReviewPost } from './review-post/review-post';
import { PostDetail } from './post-detail/post-detail';
import { PostForm } from './post-form/post-form';
import { ReviewArea } from './review-area/review-area';
import { TrendingPost } from './trending/trending-post/trending-post';
import { SavedReview } from './saved-item/saved-review/saved-review';
import { MyPost } from './my-review/my-post/my-post';
import { DestinationPost } from './destinations/destination-post/destination-post';
import { FoodPost } from './foods/food-post/food-post';
import { HotelPost } from './hotels/hotel-post/hotel-post';
import { FlightPost } from './flights/flight-post/flight-post';

export const reviewRoutes: Route[] = [
  {
    path: '',
    component: ReviewArea,
    children: [
      { path: '', component: ReviewPost },
      { path: 'feed', component: ReviewPost },
      { path: 'feed/detail/:id', component: PostDetail },
      { path: 'trending', component: TrendingPost },
      { path: 'saved-items', component: SavedReview },
      { path: 'my-reviews', component: MyPost },
      { path: 'destinations', component: DestinationPost },
      { path: 'foods', component: FoodPost },
      { path: 'hotels', component: HotelPost },
      { path: 'flights', component: FlightPost },

    ],
  },
  { path: 'create', component: PostForm },
  {
    path: 'edit/:id',
    component: PostForm,
    // canDeactivate: [preventUnsavedChangesGuard],
  },
];
