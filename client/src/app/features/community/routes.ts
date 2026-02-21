import { Route } from '@angular/router';
import { CommunityArea } from './community-area/community-area';
import { GroupDetail } from './group-detail/group-detail';

export const communityRoutes: Route[] = [
  {
    path: '',
    component: CommunityArea,
    children: [],
  },
  { path: 'group-detail', component: GroupDetail },
  // { path: 'create', component: PostForm },
  // {
  //   path: 'edit/:id',
  //   component: PostForm,
  //   canDeactivate: [preventUnsavedChangesGuard],
  // },
];
