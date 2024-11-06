# Fetching Data with Server Components

- The RSC architecture in the app router introduces support for async and await keywords in Server Components.
- This allows you to use familiar Javascript await syntax by defining your component as an asynchronous function.
- This is the basis for data fetching in server components.

### Loading and Error States

- Traditionally in React, you might manage these states by creating separate variables and conditionally rendering UI based on their values.
- To implement a loading state, define and export a React component in loading.tsx
- For handling errors, define and export a React component in error.tsx
