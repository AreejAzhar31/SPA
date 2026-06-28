# Task Manager SPA

A simple React Single Page Application for managing tasks. Built as a university assignment.

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the URL shown in the terminal (usually `http://localhost:5173`).

4. Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── pages/
│   ├── Dashboard.jsx   # Summary page (total, completed, pending)
│   ├── Tasks.jsx       # Task management page
│   └── About.jsx       # About the app and assignment
├── components/
│   ├── Layout.jsx      # Shared layout with Navbar and Outlet
│   ├── Navbar.jsx      # Navigation links
│   ├── TaskForm.jsx    # Form to add a new task
│   ├── TaskList.jsx    # Renders the list of tasks
│   └── TaskItem.jsx    # Single task row (checkbox + delete)
├── styles/
│   └── App.css         # Global styles
├── data.js             # Initial sample tasks
├── App.jsx             # Routes and task state
└── main.jsx            # App entry point
```

## Routes

| Route    | Page      |
|----------|-----------|
| `/`      | Dashboard |
| `/tasks` | Tasks     |
| `/about` | About     |
