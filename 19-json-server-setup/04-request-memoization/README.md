# Request Memoization

- Request memoization is a technique that deduplicates requests for the same data within a single render pass.
- This approach allows for re-use of data in a React Component tree, prevents redundant network calls and enhances performance.
- For the initial request, data is fetched from an external source and the result is stored in memory.
- Subsequent requests for the same data within the same render pass retrieve the result from memory, bypassing the need to make the request again.
- This optimization not only enhances performance but also simplifies data fetching within a component tree.
- When the same data is needed across different components in a route (e.g., in a Layout, Page, and multiple components), it eliminates the need to fetch data at the top of the tree and pass props between components.
- Request memoization is a React feature, not specifically a Next.js feature Memoization only applies to the GET method in fetch requests.
- Memoization only applies within the React Component tree. It does not extend to fetch requests in Route Handlers as they are not part of the React component tree.
- For cases where fetch is not suitable (e.g some database clients, CMS clients, or GraphQL clients), you can use the React cache function to memoize functions.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
