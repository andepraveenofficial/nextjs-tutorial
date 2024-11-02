# Template

- Templates are similar to layouts in that they wrap each child layout or page.
- But, with templates, when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, andd effects are re-synchronized.
- A template can be defined by exporting a default React component from a template.js or template.tsx file.
- Similar to layouts, templates also should accept a children prop which will render the nested segments in the route.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
