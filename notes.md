# 📦 Episode 2 – JavaScript Tooling & Module Basics

## 🔹 Package Management

- **npm** → installs and manages packages
- **npx** → executes packages without installing globally

---

## 🔹 Parcel (Build Tool)

Parcel handles:

- Dev server creation
- HMR (Hot Module Replacement)
- Fast rebuilds using caching
- Bundling (combines files)
- Minification & compression
- Code splitting (lazy loading)
- Tree shaking (removes unused code)
- Error diagnostics & handling
- Supports modern & older browsers (via transpilation)

---

## 🔹 Versioning Symbols

- `^` → allows **minor + patch updates** (not major)
- `~` → allows **patch updates only**

**Example:**

```json
"react": "^18.3.1"
```

Allows: `18.x.x` but not `19.x.x`

---

## 🔹 package.json vs package-lock.json

| File                | Purpose                                                      |
| ------------------- | ------------------------------------------------------------ |
| `package.json`      | Stores approximate versions + project config                 |
| `package-lock.json` | Stores exact versions (ensures same install across machines) |

---

## 🔹 node_modules

- Contains all installed dependencies
- Includes transitive dependencies (dependencies of dependencies)
- ❌ Not pushed to GitHub (too large, can be regenerated)

---

## 🔹 Why Push Package Files to GitHub?

Using `package.json` + `package-lock.json`, anyone can rebuild the project with:

```bash
npm install
```

---

## 🔹 ES Modules in Browser

Browsers don't support `import`/`export` in normal scripts by default.
✅ Use:

```html
<script type="module" src="app.js"></script>
```

---

## 🔹 Build Output

Parcel outputs the production build into:

```
/dist
```

---

## 🔹 Browser Compatibility

- Use `browserslist` in `package.json`
- Helps tools optimize code for target browsers

# ⚛️ Episode 3 – JSX, React Elements & Components

## 🔹 Custom Scripts

Define custom server commands in the `scripts` object of `package.json`:

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

---

## 🔹 React Element vs JSX

- A **React element** is a JavaScript object
- **JSX** (JavaScript XML) is not HTML inside JS — it just _looks_ like HTML/XML
- JSX is a syntax that gets transpiled into a React element

**Flow:**

```
JSX → React Element → JS Object → HTML Element
```

**React element (without JSX):**

```js
const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');
```

**JSX equivalent:**

```jsx
const heading = <h1 id="heading">Namaste React</h1>;
```

---

## 🔹 JSX Transpilation

- JSX is **transpiled to React elements** before reaching the JS engine
- This is handled by **Babel**, which is bundled via **Parcel**
- Multi-line JSX must be wrapped in parentheses `()`

```jsx
const element = (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

---

## 🔹 React Components

| Type                  | Status | Description                    |
| --------------------- | ------ | ------------------------------ |
| Class-based component | Old    | Uses ES6 classes               |
| Functional component  | ✅ New | A JS function that returns JSX |

**Functional component example:**

```jsx
const Title = () => {
  return <h1>Namaste React</h1>;
};
```

---

## 🔹 Component Composition

Placing a component inside another component:

```jsx
const App = () => {
  return (
    <div>
      <Title />
    </div>
  );
};
```

---

## 🔹 Calling a Functional Component

A functional component can be invoked in three ways:

```jsx
<Title />         // JSX self-closing tag
<Title></Title>   // JSX open-close tag
{Title()}         // Direct function call
```

---

## 🔹 JSX Security

JSX automatically **sanitizes injected content**, protecting against XSS (cross-site scripting) attacks.

# 🧩 Episode 4 – Props

## 🔹 Props

- Props are **arguments passed to React functional components**
- They allow components to be dynamic and reusable

```jsx
const Card = (props) => {
  return <h1>{props.title}</h1>;
};

<Card title="Namaste React" />;
```

---

## 🔹 Config Driven UI

- UI is built based on **configs / data** received (e.g. from an API)
- The same website can show a **different UI** in Chennai, Bangalore, Delhi — based on the config

---

## Food ordering app structure

- Header
- - Logo
- - Nav items
- Body
- - Search
- - Restaurant container
- - Resto cards
-     - Nmae, start, cuisine, delivery time, etc
- Footer
- - Copyright
- - Contact
- - Address
- - Links

---

## 🔹 Keys in Lists

- When rendering components at the **same level**, React requires a **unique `key`** prop
- Without a key, React can't identify where a new component should be placed — so it **re-renders all** of them
- With a key, React **only renders the new/changed one** → performance optimization

```jsx
items.map((item) => <Card key={item.id} data={item} />);
```

> ⚠️ **Anti-pattern:** Using array `index` as key is discouraged by React, as it can cause incorrect renders during reordering or deletion.

# 🗂️ Episode 5 – Project Structure, Exports & React Hooks

## 🔹 Project Structure

React has **no officially recommended** way to structure a project, but common approaches are:

- **Group by file type** — all components together, all styles together, etc.
- **Group by feature / routes** — each feature has its own folder with related files

> ⚠️ Avoid too much nesting in folder structure.

---

## 🔹 Export / Import Types

### Default Export

- Only **one** default export per file
- No `{}` needed on import

```js
// Exporting
export default Component;

// Importing
import Component from './path';
```

### Named Export

- Used when **multiple components** need to be exported from a single file
- Must use `{}` on import

```js
// Exporting
export const Component;

// Importing
import { Component } from './path';
```

> 💡 By default, a file can only have a **single default export**. Use named exports for multiple.

---

## 🔹 React Hooks

Hooks are **normal JavaScript utility functions** provided by React.

| Hook         | Purpose                                |
| ------------ | -------------------------------------- |
| `useState()` | Manages state variables in a component |

- Whenever a **state variable updates**, React **re-renders** the component
- This keeps the UI in sync with the data

```jsx
const [count, setCount] = useState(0);
```

---

## 🔹 Reconciliation Algorithm (React Fiber)

React Fiber is the engine behind React's efficient DOM updates:

```
Actual DOM (current UI)
        ↓
State change triggered (useState / etc.)
        ↓
Virtual DOM created (expected representation)
        ↓
Diffing Algorithm finds differences
        ↓
Only the changed portion updated in Actual DOM
```

- **Virtual DOM** — a lightweight JS object representing the expected UI state
- **Diffing** — compares the new Virtual DOM with the previous one
- **Fiber** — React's reconciliation engine that schedules and applies these updates efficiently
- Result: minimal & efficient DOM manipulation → better UI performance

# 🌐 Episode 6 – Architecture, useEffect & State Management

## 🔹 Microservice vs Monolith

|           | Microservice                                                   | Monolith                       |
| --------- | -------------------------------------------------------------- | ------------------------------ |
| Structure | Each service is separate (UI, Backend, DB, Auth, Notification) | All services bundled together  |
| Principle | Separation of concern, Single Responsibility                   | Tightly coupled                |
| On change | Only the affected service needs to be rebuilt                  | Entire app needs to be rebuilt |

---

## 🔹 Two UI Data-Fetching Approaches

| Approach          | Flow                            | UX           |
| ----------------- | ------------------------------- | ------------ |
| Wait then render  | Load → Wait for API → Render    | ❌ Bad UX    |
| Render then fetch | Load → Render → API → Re-render | ✅ Better UX |

> ⚛️ **React follows** the second approach: **Load → Render → API → Re-render**

---

## 🔹 useEffect

```jsx
useEffect(callbackFn, [dependencyList]);
```

- **Callback function** — executed _after_ the component's first render cycle finishes
- **Dependency list** — controls when the effect re-runs

```jsx
useEffect(() => {
  fetchData();
}, []); // [] means run only once after first render
```

---

## 🔹 Shimmer UI

- A placeholder UI shown while data is loading
- Improves perceived performance → better UX than a blank screen or spinner

---

## 🔹 Conditional Rendering

Render components based on a condition:

```jsx
return isLoading ? <Shimmer /> : <ActualComponent />;
```

---

## 🔹 Why State Variables?

- **Normal JS variables** — changing their value does **not** re-render the component
- **State variables** — changing their value via `setState` **triggers a re-render** of the whole component, keeping UI in sync

```jsx
const [data, setData] = useState(null); // state variable
let count = 0; // normal variable — won't trigger re-render
```

> 💡 Once `setVariable()` is called, the component re-executes with the new state value. On subsequent renders, the RHS of the `useState()` initialization is **skipped** — the current state value is used instead.

---

## 🔹 Reconciliation on State Update

Whenever a state variable updates → React triggers a **reconciliation cycle** → component re-renders with the new value.

---

## 🔹 Source of Truth & Filtering

- The state variable holding **API data** is the **source of truth** — never mutate it directly
- For filtering/searching, use a **separate state variable** initialized with the same data

```jsx
const [restaurants, setRestaurants] = useState([]); // source of truth
const [filtered, setFiltered] = useState([]); // used for filtering

// On filter:
setFiltered(restaurants.filter((r) => r.rating > 4));
```

> This way, the original data is always preserved and can be restored anytime.

# 🛣️ Episode 7 – useEffect Deep Dive & React Router

## 🔹 useEffect Dependency Array

| Dependency Array          | Behaviour                                            |
| ------------------------- | ---------------------------------------------------- |
| No dependency array       | Callback runs **every time** the component renders   |
| Empty array `[]`          | Callback runs **only once** after the initial render |
| Array with values `[val]` | Callback runs whenever the **dependency changes**    |

> ⚠️ If a state variable is updated inside `useEffect` with **no dependency array**, it will cause an **infinite render loop** — the state update triggers a re-render, which triggers the effect again, and so on.

---

## 🔹 Rules of State Variables (Hooks Rules)

State variables must **only** be declared inside a functional component — never:

- ❌ Outside the functional component
- ❌ Inside `if / else` conditions
- ❌ Inside loops
- ❌ Inside normal functions

```jsx
// ✅ Correct
const MyComponent = () => {
  const [count, setCount] = useState(0);
};

// ❌ Wrong
const [count, setCount] = useState(0); // outside component
```

---

## 🔹 React Router DOM

Used for **client-side routing** by wrapping the app in a router.

### Key APIs

| API                   | Purpose                                             |
| --------------------- | --------------------------------------------------- |
| `createBrowserRouter` | Creates the router with route definitions           |
| `RouterProvider`      | Provides the created router to the app              |
| `useRouteError`       | Retrieves detailed error info on route errors       |
| `Outlet`              | Renders matched child routes in a parent layout     |
| `Link`                | Navigates to a route **without full page reload**   |
| `useParams`           | Retrieves **dynamic route parameters** from the URL |

---

### `Link` vs `<a>` Tag

|                   | `<a href="">`          | `<Link to="">`               |
| ----------------- | ---------------------- | ---------------------------- |
| Navigation        | Full page reload       | No reload — swaps components |
| React SPA         | ❌ Breaks SPA behavior | ✅ Preserves SPA behavior    |
| Behind the scenes | —                      | Uses `<a>` tag internally    |

> 💡 This is why React is called a **Single Page Application (SPA)** — navigation only swaps/refreshes components, not the whole page.

---

### `useParams` Example

```jsx
// Route: /restaurant/:id
const { id } = useParams(); // retrieves the dynamic id from URL
```

---

## 🔹 Two Types of Routing

|                 | Server Side Routing           | Client Side Routing                  |
| --------------- | ----------------------------- | ------------------------------------ |
| Who handles it? | Server                        | Browser / Client                     |
| How?            | Server serves a new HTML page | JS swaps components in the same page |
| Page reload?    | ✅ Yes — full reload          | ❌ No — stays on same page           |
| Example         | Traditional websites          | React SPA                            |

# 🏛️ Episode 8 – Class Components & Lifecycle Methods

## 🔹 Class Component Basics

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props); // mandatory before using "this"
    this.state = {
      data: null,
    };
  }

  render() {
    return <h1>{this.state.data}</h1>;
  }
}
```

- `render()` — returns JSX
- `constructor(props)` — receives props; must call `super(props)` before using `this`

### Why `super(props)`?

- `super()` passes control to the parent class (`React.Component`) to assign `this`
- `super(props)` additionally sets `this.props` in the child class
- Without it, `this` cannot be used inside the constructor

---

## 🔹 State in Class Components

- State variables are declared inside the `constructor` as `this.state = {}`
- **Never update state directly** — always use `this.setState()`
- Multiple state variables can be updated in one call:

```jsx
this.setState({ count: 1, name: 'React' });
```

---

## 🔹 Component Lifecycle

### 1. Mounting Phase

| Step                  | Phase  | Description                                                   |
| --------------------- | ------ | ------------------------------------------------------------- |
| `constructor()`       | Render | Called with dummy/initial data                                |
| `render()`            | Render | JSX rendered with dummy data                                  |
| `componentDidMount()` | Commit | Called after component is painted to DOM; ideal for API calls |

### 2. Updating Phase

| Step                   | Phase  | Description                  |
| ---------------------- | ------ | ---------------------------- |
| `render()`             | Render | Re-renders with new/API data |
| `componentDidUpdate()` | Commit | Called after every update    |

### 3. Unmounting Phase

| Step                     | Phase  | Description                                      |
| ------------------------ | ------ | ------------------------------------------------ |
| `componentWillUnmount()` | Commit | Called just before component is removed from DOM |

---

## 🔹 Order of Execution — Parent & Child

### Single child

```
parent constructor
parent render
  child constructor
  child render
  ── DOM UPDATED IN SINGLE BATCH ──
  child componentDidMount
parent componentDidMount
```

### Two children

```
parent constructor
parent render
  child1 constructor
  child1 render
  child2 constructor
  child2 render
  ── DOM UPDATED IN SINGLE BATCH ──
  child1 componentDidMount
  child2 componentDidMount
parent componentDidMount
```

> 💡 React batches all renders first, then commits them to the DOM in one go — this is why child `componentDidMount` runs before the parent's.

---

## 🔹 componentDidUpdate

- Executes **after every update** to the component (state or props change)
- Equivalent to `useEffect(() => { ... }, [dependency])` in functional components

---

## 🔹 componentWillUnmount & Cleanup

**The problem:** In a SPA, navigating away doesn't reload the page — it just swaps components. So a `setInterval` started in a component keeps running even after the component is removed.

**The fix:** Clean up in `componentWillUnmount`:

```jsx
componentDidMount() {
  this.timer = setInterval(() => console.log("tick"), 1000);
}

componentWillUnmount() {
  clearInterval(this.timer); // cleanup
}
```

### Equivalent in Functional Components

The `return` of `useEffect` acts as the cleanup — it runs when the component is unmounted (page changed):

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log('tick'), 1000);

  return () => {
    clearInterval(timer); // cleanup on unmount
  };
}, []);
```

---

## 🔹 Class Lifecycle vs Hooks — Quick Map

| Class Component        | Functional Component                 |
| ---------------------- | ------------------------------------ |
| `componentDidMount`    | `useEffect(() => {}, [])`            |
| `componentDidUpdate`   | `useEffect(() => {}, [dep])`         |
| `componentWillUnmount` | `return () => {}` inside `useEffect` |

# 🪝 Episode 9 – Custom Hooks, Performance & Lazy Loading

## 🔹 Custom Hooks

- Place custom hooks in the `utils/` folder
- Name must start with `use` — React identifies it as a hook
- Not technically mandatory, but **officially recommended** by React

```jsx
// utils/useOnlineStatus.js
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  // logic here
  return isOnline;
};
```

> 💡 **SRP for components:** Keep functional components "dumb" — they should only return JSX. Move all JS logic and state variables into custom hooks.

---

## 🔹 Online / Offline Event Listener

Detect whether the user's app is online or offline:

```js
addEventListener('online', (event) => {
  // user is back online
});

addEventListener('offline', (event) => {
  // user went offline
});
```

A good use case for a custom hook like `useOnlineStatus`.

---

## 🔹 Chunking / Lazy Loading

### The Problem

| Scenario                           | Issue                        |
| ---------------------------------- | ---------------------------- |
| 1000 components in 1 file          | Huge bundle → slow app       |
| 1000 separate files loaded at once | Too many requests → slow app |

Both extremes are bad. The solution is **smaller, on-demand bundles**.

### The Solution — Code Splitting

This process goes by many names:

- Chunking
- Code Splitting
- Dynamic Bundling
- Lazy Loading
- On-demand Loading

### How to Lazy Load in React

```jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));
```

- `lazy()` tells React to load this component **only when it's needed**
- The `import()` inside is a dynamic import — it fetches the chunk on demand

---

## 🔹 Suspense

When a lazy-loaded component is being fetched, React needs something to show in the meantime. This is handled by `Suspense`:

```jsx
<Suspense fallback={<h1>Loading...</h1>}>
  <Dashboard />
</Suspense>
```

- Wrap the lazy-loaded component in `<Suspense>`
- The `fallback` prop renders while the component chunk is being loaded
- Once loaded, the actual component replaces the fallback
