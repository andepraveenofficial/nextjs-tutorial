# Server-only Code

- Certain code is intended to execute only on the server.
- You might have modules or functions that use multiple libraries, use environment variables, interact directly with a database, or process confidential information.
- Since Javascript modules can be shared, it's possible for code that's meant only for the server to unintentionally end up in the client.
- If server-side code gets bundled into the client-side Javascript, it could lead to a bloated bundle size, expose secret keys, database queries, and sensitive business logic.
- It is crucial to separate server-only code from client-side code protect the application's security and integrity.

### server-only Package

- Provide a build-time error if developers accidentally import one of these modules into a Client COmponent.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
