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
