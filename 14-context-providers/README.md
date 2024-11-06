# Context Providers

- Context providers are typically rendered near the root of an application to share global application state and logic.
- For example, the application theme
- However, since React context is not supported in Server Components, attempting to create a context at the root of your application will result in n error.
- To address this, you ca create a context and render its provider inside a separate Client Component.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
