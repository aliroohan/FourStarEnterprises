import { RenderMode, ServerRoute } from '@angular/ssr';

// Mock function to simulate fetching types and subtypes
async function fetchTypesAndSubtypes(): Promise<{ type: string; subtype: string }[]> {
  // Replace this with your actual API call
  return [
    { type: 'type1', subtype: 'subtype1' },
    { type: 'type2', subtype: 'subtype2' },
    // Add more types and subtypes as needed
  ];
}

export const serverRoutes: ServerRoute[] = [
  {
    path: 'machine/:type/:subtype',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const typesAndSubtypes = await fetchTypesAndSubtypes(); // Fetch the types and subtypes
      return typesAndSubtypes.map(({ type, subtype }) => ({ type, subtype })); // Return the parameters
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
