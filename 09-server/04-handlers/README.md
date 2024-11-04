# Handlers

1. headers
2. cookies
3. caching

## Headers in Route Handler

- HTTP headers represent the metadata associated with an API request and response.

### Request Headers

- These are sent by the client, such as a web browser, to the server. They contain essential information about the request, which helps the server understand and process it correctly.
- 'User-Agent' which identifies the browser and operating system to the server.
- 'Accept' which indicates the content types like text, video, or image formats that the client can process.
- 'Authorization' header used by the client to authenticate itself to the server.

### Response Headers

- These are sent back from the server to the client. They provide information about the server and the data being sent in the response.
- 'Content-Type' header which indicates the media type of the response. It tells the client what the data type of the returned content is, such as text/html for HTML documents, application/json for JSON data, etc.

## Cookies in Route Handlers

- Cookies are small pieces of data that a server sends to a user's web browser.
- The browser may store the cookie and send it back to the same server with later requests.
- Cookies are mainly used for 3 purposes
  1.  Session management like logins and shopping carts
  2.  Personalization like user preferences and themes
  3.  Tracking like recording and analyzing user behavior

## Caching in Route Handlers

- Route Handlers are cached by default when using GET method with the Response object in Next.js
- Check this in build mode :
  - `npm run build`,
  - `npm run start`
- from next 15 , the GET is not cached by default now

### Installation

- `npm install`

### Start the Application

- `npm run dev`
