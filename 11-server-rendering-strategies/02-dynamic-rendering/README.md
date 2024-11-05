# Dynamic Rendering

- Dynamic rendering is a server rendering strategy where routes are rendered for each user at request time.
- It is useful when a route has data that is personalized to the user or contains information that can only be known at request time, such as cookies or the URL's search parameters.
- News websites, personalized e-commerce pages, and social media feeds are some examples where dynamic rendering is beneficial.

### How to Dynamically Render

- During rendering, if a dynamic function is discovered, Next.js will switch to dynamically rendering the whole route.
- In Next.js these dynamic functions are :
  - cookies()
  - headers()
  - searchParams
- Using any of these will opt the whole route into dynamic rendering at request time.

### Dynamic Rendering Summary

- Dynamic rendering is a strategy where the HTML is generated at request time.
- Next.js automatically switches to dynamic rendering when it comes across a dynamic function in the component, such as cookies(), headers(), or th searchParams object.
- This form of rendering is great for when we need to render HTML personalized to a user, such as a social media feed.
- As a developer, you do not need to choose between static and dynamic rendering,
- Next.js will automatically choose the best rendering strategy for each route based on the features and APIs used.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
