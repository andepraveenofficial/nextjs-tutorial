# Data Cache

- Next.js, by default automatically caches the returned the returned values of fetch operations in the Data Cache.

### What is data cache?

- It is a server-side cache that persists the result of data fetches across incoming server requests and deployments.

### Why data cache required?

- The data cache improves app performance and reduces costs by eliminating the need to re-fetch data from your data source with every request.

### Opting Out of Caching

- For individual data fetches, you can opt out of caching by setting the cache option to no-store.
- Once you specify the no-store option for a fetch request, subsequent fetch requests will also not be cached.
- By default, Next.js will cache fetch() request that occur before any dynamic functions (cookies(), headers(), searchParams) are used and will not cache requests found after dynamic functions.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
