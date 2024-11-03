# Parallel Routes

- Parallel routes are an advanced routing mechanism that allows for the simultaneous rendering of multiple pages within the same layout.
- Parallel routes in Next.js are defined using a feature known as slots.
- Slots help structure our content in a modular fashion.
- To define a slot, We use the '@folder' naming convention
- Each slot is then passed as a prop to its corresponding `layout.tsx` file.

### Parallel Routes Benefits

- A clear benefit of parallel routes is their ability to split a single layout into various slots, making the code more manageable.
- Independent route handling
- sub-navigation
- Each slot can have its own loading and error states.
- This granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors.

### Sub-navigation in routes

- Each slot of your dashboard can essentially function as a mini-application, complete with its own navigation and state management.
- This is especially useful in a complex application such as our dashboard where different sections serve distinct purposes.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
