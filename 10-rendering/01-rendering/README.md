# Rendering

- Rendering is the process that transforms the code you write into user interfaces.
- In Next.js choosing the right time and place to do this rendering is vital for building a performant application.
- CSS, SSR and RSCs

### Rendering in React

- You will remember React being the go-to library for creating Single Page Applications (SPAs)

### Client-Side Rendering

- This method of rendering, where the component code is transformed into a user interface directly within the browser (the client), is known as client-side rendering(CSR).
- CSR quickly became the standard for SPAs, with widespread adoption.
- It wasn't long before developers began noticing some inherent drawbacks to this approach.

### Drawbacks of CSR

- SEO : Generating HTML that mainly contains a single div tag is not optimal for SEO, as it provides little content for search engines to index.
- Performance : Having the browser (the client) handle all the work, such as fetching data, computing the UI, and making the HTML interactive, can slow things down. Users might see a blank screen or a loading spinner while the page loads.
- Each new feature added to the application increases the size of the Javascript bundle, prolonging the wait time for users to see the UI.

### Recollecting Drawbacks of CSR

- REliance on Javascript for rendering content on the client side can significantly hurt SEO, a search engines might struggle to index the content properly.
- The user experience can suffer from slow load times, as the browser has to download, parse, and execute Javascript before the user sees any meaningful content on the page.

### Server-Side Solutions

1. Static Site Generation (SSG)
2. Server-Side Rendering (SSR)

- It significantly improves SEO because search engines can easily index the server-rendered content.
- Users can immediately see the page HTML content, instead of a blank screen or loading spinner.

### Hydration

- During hydration, React takes control in the browser, reconstructing the component tree in memory based on the static HTML that was served.
- It carefully plans the placement of interactive elements within this tree. Then, React proceeds to bind the necessary Javascript logic to these elements.
- This involves initializing the application state, attaching event handlers for actions such as clicks and mouseover, and setting up any other dynamic functionalities required for a fully interactive user experience.

### SSG

- Static Site Generation (SSG)
- SSG occurs at build time, when the application is deployed on the server. This results in pages that are already rendered and ready to serve. It is ideal for content that doesn't change often, like blog posts.

### SSR

- Server-Side Rendering (SSR)
- SSR, on the other hand, renders pages on-demand in response to user requests.
- It is suitable for personalized content like social media feeds, where the HTML
  depends on the logged-in user.

  - Server-Side Rendering (SSR) was a significant improvement over Client-Side Rendering (CSR), providing faster initial loads and better SEO.

  ### Drawbacks of SSR

#### problem 1

- You have to fetch everything before you can show anything
- Components cannot start rendering and then pause or "wait" while data is still being loaded.
- If a component needs to fetch data from a database or another source (like an API), this fetching must be completed before the server can begin rendering the page.

#### problem 2

- You have to load everything before you can hydrate anything
- For successful hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree.
- This means that all the Javascript for the components must be loaded on the client before you can start hydrating any of them.

#### problem 3

- You have to hydrate everything befo you can interact with anything
- React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree.
- As a consequence, all components must be hydrated before you can interact with any of them.

### Drawbacks of SSR - All or Nothing Waterfall

1. having to load the data for the entire page
2. load the Javascript for the entire page
3. hydrate the entire page

create an "all or nothing" waterfall problem that spans from the server to the client, where each issue must be resolved before moving to the next one

- This is inefficient if some parts of your app are slower than others, as is often the case in real-world apps.

### Drawbacks of SSR - All or Nothing Waterfall

1. Data fetching must be completed before the server can begin rendering HTML
2. The Javascript required for the components needs to be fully loaded on the client side before the hydration process can start.
3. All components have to be hydrated before they become interactive.

These issues contribute to an 'all-or-nothing' waterfall scenario, resulting in inefficiencies, especially if certain parts of your application are slower than others.

### Suspense SSR Architecture

- Use the `<Suspense>` component to unlock two major SSR features

1. HTML streaming on the server
2. Selective hydration on the client

### HTML streaming on the Server

- You don't have to fetch everything before you can show anything.
- If a particular section delays the initial HTML, it can be seamlessly integrated into the stream later.
- This is the essence of how Suspense facilities Server-Side HTML streaming

### The Other Challenge

- Until the Javascript for the main section is loaded, client-side app hydration cannot start.
- And if the Javascript bundle for the main section is large, this could significantly delay the process.

### Code splitting

- Code splitting allows you to mark specific code segments as not immediately necessary for loading, signalling your bundler to segregate them into separate `<script>` tags.
- The Javascript containing React and the code for the entire application, excluding the main section, can now be downloaded independently by the client, without having to wait for the main section's code.

### Selective Hydration on the Client

- By wrapping the main section within `Suspense`, you have indicated to React that is should not prevent the rest of the page from not just streaming but also from hydrating.
- This feature, called selective hydration allows for the hydration of sections as they become available, before the rest of the HTML and the Javascript code are fully downloaded.

### Drawbacks of Suspense SSR

- First, even though Javascript code is streamed to the browser asynchronously, eventually, the entire code for a web page must be downloaded by the user.
- As applications add more features, the amount of code users need to download also grows. This leads to an important question.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
