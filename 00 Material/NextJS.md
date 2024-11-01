# NextJS

<details>
<summary>Index</summary>

## Index

- Introduction
- Setup
- Documentation
</details>

---

<details>
<summary>Introduction</summary>

## Introduction

- `Next.js` is a React Framework for building web applications.
- React is not feasible to create a fully-featured application ready for production.
- React is a library for building user interfaces.

### NextJS

- It uses React for building user interfaces.
- Provides additional features that enable you to build production-ready applications.
- These features include routing, optimized rendering, data fetching, bundling, compiling, and more.
- You don't need to install additional packages as Next.js provides everything you need.

### Why NextJS

Next.js simplifies the process of building a web application for production

1. Routing : File Based Routinh
2. API routes : We can write and frontend and backend code
3. Rendering : NextJS supports both client-side and server-side rendering
4. Data fetching
5. Styling
6. Optimization
</details>

---

<details>
<summary>Setup</summary>

## Setup

1. Install NodeJS
2. Install NextJS : `npx create-next-app@latest`

### Folder Structure

- page.tsx => It is a unique page
- layout.tsx => In the layout.tsx, `children` component always refers to page.tsx

<details>

---

<details>
<summary>Routing</summary>

## Routing

- Next.js has a file-system based routing mechanism
- URL paths that users can access in the browser are defined by files and folders in your codebase.

### Routing Conventions

- All routes must be placed inside the `app` folder
- Every file that corresponding to a route must be named `page.js` or `page.tsx`
- Every folder corresponds to a path segment in the browser URL.
- When you run the application and load the route, automatically NextJS creates the `layout.tsx` file
</details>

---

<details>
<summary>Documentation</summary>

## Documentation

- NextJS Docs : [https://nextjs.org/docs]
</details>

---
