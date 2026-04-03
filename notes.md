# 📦 Episode 2 – Clean Notes

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
