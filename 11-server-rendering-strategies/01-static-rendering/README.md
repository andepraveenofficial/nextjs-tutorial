# Static Rendering

- Static rendering is a server rendering strategy where we generate HTML pages at the time of building our application.
- This approach allows the page to be built once, cached by a CDN, and served to the client almost instantly.
- This optimization also enables you to share the result of the rendering work among different users, resulting in a significant performance boost for your application.
- Static rendering is particularly useful for blog pages, e-commerce product pages, documentation, and marketing pages.

### How to Statically Render?

- Static rendering is the default rendering strategy in the app router.
- All routes are automatically prepared at build time without additional setup.

### Production Server vs Dev Server

- For production, an optimized build is created once, and you deploy that build.
- A development server, on the other hand, focuses on the developer experience.
- We can't afford to build our app once, make changes, rebuild, and so on.
- For production builds, a page will be pre-rendered once when we run the build command.
- In development mode, a page will be pre-rendered for every request.

### Prefetching

- Prefetching is a technique used to preload a route in the background before the user navigates to it.
- Routes are automatically prefetched as they become visible in the user's viewport, either when the page first loads or as it comes into view through scrolling.
- For static routes, the entire route is prefetched and cached by default.
- When we load the homepage, Next.js prefetches the About and Dashboard routes, keeping them ready for instant navigation.

### Static Rendering Summary

- Static rendering is a strategy where the HTML is generated at build time.
- Along with the HTML, the RSC payload is created for each component, and Javascript chunks are produced for client-side component hydration in the browser.
- If you navigate directly to a page route, the corresponding HTML file is served.
- Static rendering is great for performance and use cases include blogs, documentation, marketing pages etc.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
