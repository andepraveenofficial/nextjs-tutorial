## Private Folders

- A private folder should not be considered by the routing system.
- The private folder and all its sub-folders are excluded from routing.
- prefix the folder name with an underscore.

### Installation

- `npm install`

### Start the Application

- `npm run dev`

### Folder Structure

📦src
┣ 📂app
┃ ┣ 📂about
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂profile
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂_lib
┃ ┃ ┣ 📜Card.tsx
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📜favicon.ico
┃ ┣ 📜globals.css
┃ ┣ 📜layout.tsx
┃ ┣ 📜not-found.tsx
┃ ┗ 📜page.tsx
┗ 📂components
┃ ┗ 📜Product.tsx
