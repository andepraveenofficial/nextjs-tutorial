### Installation

- `npm install`

### Start the Application

- `npm run dev`

### Folder Structure

📦src
 ┗ 📂app
 ┃ ┣ 📂about
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂blog
 ┃ ┃ ┣ 📂first
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂second
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂products
 ┃ ┃ ┣ 📂[productId]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂profile
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx

- page.tsx => It is a unique page
- layout.tsx => In the layout.tsx, `children` component always refers to page.tsx
