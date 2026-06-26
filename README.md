# Task Manager (React + Redux + Tailwind)

Same SPA Task Manager assignment, now using:
- **Redux Toolkit** for state management (instead of local `useState`/custom hook only)
- **localStorage** so tasks persist across page reloads
- **Tailwind CSS** for styling (instead of plain CSS)

## How to Run

```
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## What changed from the plain version

| Concern | Before | Now |
|---|---|---|
| State | `useState` in a custom hook | Redux Toolkit slice (`store/tasksSlice.js`) |
| Persistence | None (state reset on refresh) | Saved to `localStorage`, restored on load |
| Styling | Single custom CSS file | Tailwind utility classes |

## New/Updated Files

```
src/
├── store/
│   ├── tasksSlice.js   # Redux slice: state + addTask/toggleTask/deleteTask reducers
│   └── index.js        # configureStore + subscribes to save state to localStorage
├── utils/
│   └── localStorage.js # loadTasks()/saveTasks() helpers
├── hooks/
│   └── useTasks.js      # Wraps useSelector/useDispatch so components stay simple
├── data.js              # Sample tasks used only on first run (no saved data yet)
├── index.css            # Tailwind directives (@tailwind base/components/utilities)
├── App.jsx              # Routes — now pulls tasks from useTasks (Redux) instead of local state
└── main.jsx             # Wraps the app in <Provider store={store}>
```

All `pages/` and `components/` files are unchanged in responsibility — only their
CSS classes were switched from custom classes to Tailwind utility classes.

## How localStorage persistence works

1. `tasksSlice.js`'s `initialState` calls `loadTasks()` — if localStorage has
   saved tasks, those are used; otherwise it falls back to `data.js`'s sample tasks.
2. `store/index.js` calls `store.subscribe(...)`, which runs after every
   dispatched action and saves the current tasks state back to localStorage.

This keeps persistence logic in one place, separate from the UI components.
