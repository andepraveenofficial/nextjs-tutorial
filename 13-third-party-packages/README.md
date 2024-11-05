# Third Party Packages

- Third-party packages in the ecosystem are gradually adapting, beginning to add the "use client" directive to components that rely on client-only features, marking a clear distinction in their execution environment.
- Many components from npm packages, which traditionally leverage client-side features, haven't yet integrated this directive.
- The absence of "use client" means that while these components will function correctly in Client Components, they may encounter issues or might not work at all within Server Components.
- To address this, you can wrap third-party components that rely on client-only features in your own Client Components.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
