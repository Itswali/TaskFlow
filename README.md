## 🚀 The Project: "TaskFlow" Productivity Hub

Instead of a basic To-Do list, build a **Task Management Dashboard** that focuses on data flow and component architecture.

### 📋 Project Requirements

* **Navigation & Routing:** Use **React Router** to create three views: a "Dashboard" (overview), "Active Tasks" (list), and "Task Details" (specific info).
* **State Management:** Use **Zustand** or **Jotai** to store the global task list. This will allow you to access tasks from any page without "prop drilling".
* **Component Basics & Composition:**
* Build a reusable `Card` component using **Composition** to wrap different types of task data.
* Use **JSX** and **Props** to pass data into these cards.


* **Hooks & Logic:**
* **useState/useReducer:** Manage the "Add Task" form state. Use `useReducer` if the task object becomes complex (e.g., title, priority, deadline).
* **useEffect:** Sync your task list to `localStorage` so data persists after a page refresh.
* **useMemo:** Create a "Stats" section on the dashboard that calculates the percentage of completed tasks. Wrap this calculation in `useMemo` to ensure it only re-runs when the task list changes.
* **useRef:** Use this to automatically focus the "Task Title" input field when a user opens the "Add Task" modal.


* **Rendering Patterns:** * Implement **Lists and Keys** to render your task cards efficiently.
* Use **Conditional Rendering** to show a "No tasks found" message when the list is empty.


* **Styling:** Build the entire UI using **Tailwind CSS**. Use **Shadcn UI** for the more complex parts like the Date Picker or Dialog modals.

---

## 🛤️ How to Learn Next

Since you have the fundamentals down, your next steps should focus on making your applications "production-ready."

### 1. TypeScript (Highest Priority)

In the modern React world, TypeScript is almost mandatory. It helps you catch errors while you type rather than at runtime. Start by converting your "TaskFlow" project to `.tsx`.

### 2. Full-Stack Frameworks (Next.js)

According to your roadmap, you have **Next.js** marked for later. This is the natural progression. It will teach you about **Server Components**, **API Routes**, and **SEO**, which are crucial for professional web apps.

### 3. Data Fetching (TanStack Query)

While you know how to manage state with Zustand, professional apps usually fetch data from a server. **TanStack Query** (formerly React Query) is the industry standard for handling loading states, caching, and server synchronization.

### 4. Testing

You have **Vitest** and **React Testing Library** on your roadmap. Learning to write unit tests for your hooks and components will elevate you from a "hobbyist" to a "reliable developer."

**Would you like me to provide a starter code snippet for the `useReducer` task logic to help you get the project moving?**
