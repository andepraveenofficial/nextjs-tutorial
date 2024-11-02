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
- If route not available NextJS throws 404 NotFound page.

### Types of Routes

1. normal routing
2. nested routing
3. dynamic routing : [productId]
4. nested dynamic routing
5. catch all segments
</details>

---

<details>
<summary>Private Folders</summary>

## Private Folders

- A private folder indicates that it is a private implementation detail and should not be considered by the routing system.
- The private folder and all its sub-folders are excluded from routing.
- prefix the folder name with an underscore.

### Advantages

- For separating UI logic from routing logic.
- For consistently organizing internal files across a project.
- For avoiding potential naming conflicts with future Next.js file convention.
- If you want to include an underscore in URL segments, you can prefix the folder name with "%5F", which is the URL-encoded from of an underscore.

</details>

---

<details>
<summary>Route Groups</summary>

## Route Groups : (folderName)

- To organize your project in a manner that doesn't affect the URL.
- Allows us to logically group our routes and project files without affecting the URL path structure.
- Let's implement authentication routes.

- auth

  - register
  - login
  - forgot-password

- `http://localhost:3000/auth/register`
- `http://localhost:3000/auth/login`
- `http://localhost:3000/auth/forgot-password`

- (auth)

  - register
  - login
  - forgot-password

- `http://localhost:3000/register`
- `http://localhost:3000/login`
- `http://localhost:3000/forgot-password`

</details>

---

<details>
<summary>Layouts</summary>

## Layouts

- A page is UI that is unique to a route.
- A layout is UI that is shared between multiple pages in the app.

### Route Group Layout

- To organize your project in a manner that doesn't affect the URL.
- To selectively apply a layout to certain segment while leaving others unchanged.

</details>

---

<details>
<summary>Routing Metadata</summary>

## Routing Metadata

- Ensuring proper search engine optimization (SEO) is crucial for increasing visibility and attracting users.
- Next.js introduced the Metadata API which allows you to define metadata for each page.
- Metadata ensures accurate and relevant information is displayed when your pages are shared or indexed.

### Configuring Metadata

- Export a static metadata object
- Export a dynamic generate Metadata function

### Metadata rules

- Both `layout.tsx` and `page.tsx` files can export metadata. If defined in a layout, it applies to all pages in that layout, but if defined in a page, it applies only to that page.
- Metadata is read in order, from the root level down to the final page level.
- when there's metadata in multiple places for the same route, they get combined, but page metadata will replace layout metadata if they have the same properties

</details>

---

<details>
<summary>Navigation</summary>

## Navigation

### Link Component Navigation

- To enable client-side navigation Next.js provides us with the Link component.
- The `<Link>` component is a React component that extends the HTML `<a>` element, and it's the primary way to navigate between routes in Next.js.
- To use it, we need to import it from "next/link".

### Active Links

</details>

---

<details>
<summary>Documentation</summary>

## Documentation

- NextJS Docs : [https://nextjs.org/docs]
</details>

---
