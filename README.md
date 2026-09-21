# React Task Manager

A to-do list app built with React + Tailwind CSS for Vortex Tech's Web Development Internship Track (Week 3).
live demo https://taskmanager.iqraashraf.dev/

Preview video
https://github.com/user-attachments/assets/cb97ad6b-8155-465e-adfd-6b1abfdc13ff


## Features
- Add tasks (with duplicate-task detection)
- Mark tasks complete (strikethrough, without removing them)
- Delete tasks
- Tasks persist across refreshes via `localStorage`

## Tech Stack
- React (Vite)
- Tailwind CSS
- `useState` / `useEffect` hooks

## Components
- **App** — holds the `tasks` array in state (`useState`) and the add/toggle/delete logic
- **TaskInput** — controlled text input + add button
- **TaskList** — maps over `tasks` and renders a `TaskItem` for each
- **TaskItem** — a single task's checkbox, text, and delete button

## Running locally
```bash
npm install
npm run dev
```
Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build
```bash
npm run build
```
