# Data Fetching in App Router

- App Router uses the React Server Components (RSC) architecture, which allows us to fetch data using either server components or client components.
- It's advantageous to fetch data using server components, as they have direct access to server-side resources such as databases or file system.
- This not only taps into the server's computational power and proximity to data sources for efficient data fetching and rendering but also minimizes the need for client-side processing.
- Server components support various configurations for caching, revalidating, and optimizing data fetching.
- On the client side, data fetching is typically managed through third-party libraries such as TanStack Query which offers its own robust APIs.
