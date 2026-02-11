import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'account',
    loadChildren: () => import('./features/account/routes').then((r) => r.accountRoutes),
  },
  //   {
  //     path: '',
  //     runGuardsAndResolvers: 'always',
  //     canActivate: [authGuard],
  //     children: [
  //       {
  //         path: 'members',
  //         component: MemberListComponent,
  //       },
  //       {
  //         path: 'members/:username',
  //         component: MemberDetailComponent,
  //         resolve: { member: memberDetailedResolver },
  //       },
  //       {
  //         path: 'member/edit',
  //         component: MemberEditComponent,
  //         canDeactivate: [preventUnsavedChangesGuard],
  //       },
  //       { path: 'home', component: PostsComponent },
  //       { path: 'lists', component: ListsComponent },
  //       { path: 'messages', component: MessagesComponent },
  //       {
  //         path: 'admin',
  //         component: AdminPanelComponent,
  //         canActivate: [adminGuard],
  //       },
  //       {
  //         path: 'groups',
  //         component: GroupListComponent,
  //       },
  //       {
  //         path: 'groups/create',
  //         component: GroupCreateComponent,
  //       },
  //       {
  //         path: 'groups/edit/:id',
  //         component: GroupEditComponent,
  //         canDeactivate: [preventUnsavedChangesGuard],
  //       },
  //       {
  //         path: 'groups/:id',
  //         component: GroupDetailComponent,
  //         // resolve: { member: memberDetailedResolver },
  //       },
  //     ],
  //   },
  //   { path: 'errors', component: TestErrorsComponent },
  //   { path: 'not-found', component: NotFoundComponent },
  //   { path: 'server-error', component: ServerErrorComponent },
  { path: '**', component: Home, pathMatch: 'full' },
];
