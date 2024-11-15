# To-Do List Application
This is a simple To-Do List web application built using React. It allows users to add, edit, mark tasks as completed, and delete tasks. The application is responsive and styled using Tailwind CSS.
## Features
1. Add tasks with a due date.
2. Edit task details (task name and due date).
3. Mark tasks as completed with a visual change.
4. Delete tasks.
5. Responsive layout for both desktop and mobile views.
## Setup and Installation
1. `Clone` the Repository
``` bash
git clone https://github.com/syaloni06/to-do-list.git
cd to-do-list
```
2. Install `Vite` Bundler
``` bash
npm create vite@latest
```
3. Install Dependencies
- Ensure you have `Node.js` and `npm` installed.
``` bash
npm install
```
4. Build Tailwind CSS
- Install tailwindcss via npm, and create your `tailwind.config.js` file.
``` bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- Add the paths to all of your template files in your `tailwind.config.js` file.
``` bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Add the `@tailwind` directives for each of Tailwind’s layers to your `index.css` file.
``` bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. Start the development server
- This will open the application in your default browser at http://localhost:5173/
``` bash
npm run dev
```
## Usage
1. Add Task: Enter a task name and select a due date, then click the Add Task button.
2. Edit Task: Click the Edit button (pencil icon), modify the task name or due date, and click Save.
3. Mark as Completed: Click the checkmark icon to mark a task as completed. The task will be crossed out and highlighted in green.
4. Delete Task: Click the Delete button (trash icon) to remove a task from the list.
