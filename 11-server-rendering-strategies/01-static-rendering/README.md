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

### Installation

- `npm install`

### Start the Application

- `npm run dev`
