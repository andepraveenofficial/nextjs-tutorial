# Unmatched Routes

## Navigation from the UI

- In the case of navigation within the UI, Next.js retains the previously active state of a slot regardless of changes in the URL.

## Page reload

- Next.js immediately searches for a default.tsx file within each unmatched slot.
- The presence of this file is critical, as it provides the default content that Next.js will render in the user interface.
- If this default.tsx file is missing in any of the unmatched slots for the current route, Next.js will render a 404 error.

## default.tsx

- The `default.tsx` file in Next.js serves as a fallback to render content when the framework cannot retrieve a slot's active state from the current URL.
- You have complete freedom to define the UI for unmatched routes, you can either mirror the content found in `page.tsx` or craft an entirely custom view.

### Installation

- `npm install`

### Start the Application

- `npm run dev`
