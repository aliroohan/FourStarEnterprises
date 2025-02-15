import { RenderMode, ServerRoute } from '@angular/ssr';
export const serverRoutes: ServerRoute[] = [
  {
    path: 'machine/:basic/:single-head',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
