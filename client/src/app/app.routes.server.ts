import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // Ensure routes with params are rendered on the server instead of prerendering
    // to avoid requiring a getPrerenderParams implementation.
    path: 'feed/detail/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'review/feed/detail/:id',
    renderMode: RenderMode.Server,
  },
   {
    path: 'review/edit/:id',
    renderMode: RenderMode.Server,
  },
  {
    // Editable review pages include params — render on server to avoid SSG params
    path: 'edit/:id',
    renderMode: RenderMode.Server,
  },
  {
    // Fallback: prerender other static routes where appropriate
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
