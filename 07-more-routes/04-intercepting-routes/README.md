# Advanced Routing Patterns

1. Parallel routes
2. Intercepting routes

## Intercepting Routes

- Intercepting routes allow you to intercept or stop the default routing behavior to present an alternate view or component when navigating through the UI, while still preserving the intended route for scenarios like page reloads.
- This can be useful if you want to show a route while keeping the context of the current page.

## Intercepting Routes Conventions

- (.) to match segments on the same level.
- (..) to match segments one level above
- (...) to match segments from the root app directory.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
