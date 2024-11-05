# Streaming

- Streaming is a strategy that allows for progressive UI rendering from the server.
- Work is divided into chunks and streamed to the client as soon as it's ready.
- This enables users to see parts of the page immediately, before the client content has finished rendering.
- Streaming significantly improves both the initial page loading performance and the rendering of UI elements that rely on slower data fetches, which would otherwise block the rendering of the entire route.
- Streaming is integrated into the Next.js App Router by default.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
