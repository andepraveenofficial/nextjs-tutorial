# client-only code

- Just as it's important to restrict certain operations to the server, it's equally important to confine some functionality to the client side.
- Client-only code typically interacts with browser-specific features like the DOM, the window object, localStorage etc which are not available on the server.
- Ensuring that such code is executed only on the client side prevents errors during server-side rendering.
- To prevent unintended server side usage of client side code, we can use a package called client-only.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
