# 🚀 Node.js Quick Notes

---

## 1. What is Node.js?
- **JavaScript Runtime Environment** (not a language, framework, or library).
- Built on **Chrome V8 Engine (C++)**.
- Lets JavaScript run on the **backend** (server, DB, etc.).

---

## 2. Why Runtime?
- Runs JavaScript **outside the browser**.
- Think of it like a **generator → works only while running**.

---

## 3. npm (Node Package Manager)
- Like **Play Store for code**.
- Lets you use ready-made packages (e.g., **Express, Mongoose**).

---

## 4. Setup
1. Install **Node.js (LTS version)**.  
2. Check versions:  

   ```bash
   node -v
   npm -v
   ```

3. Init project:

   ```bash
   npm init -y
   ```

---

## 5. Hello World Server

**server.js**

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World from Node.js!');
});

server.listen(3000, () => console.log('http://localhost:3000'));
```

👉 Run:

```bash
node server.js
```

👉 Open browser:

```
http://localhost:3000
```

🎉 Output → **Hello World**

---

## 6. What is **NPM**?
- **NPM** stands for **Node Package Manager**.
- It is used to install and manage third-party packages (libraries) in a Node.js project.
- Example: If we need a "text-to-speech" package, we can install it using NPM.

**Commands:**
- To install a package:

  ```bash
  npm install package-name
  ```

- To uninstall a package:

  ```bash
  npm uninstall package-name
  ```

---

## 7. What are **node_modules**?
- Whenever we install a package using NPM, its code and all its **dependencies** get stored in the **node_modules** folder.
- We don’t manually change anything inside `node_modules`.
- It automatically updates or deletes when we install/uninstall packages.

---

## 8. **Dependencies vs DevDependencies**
- **dependencies** → Packages required for the application to run (e.g., `express`, `mongoose`).
- **devDependencies** → Packages only needed during development, not in production (e.g., `nodemon`, `eslint`).

---

## 9. What is **Express.js**?
- **Express.js** is an **NPM package**.
- It is a **framework for Node.js** that helps manage server-side logic easily.
- It handles everything from **receiving requests** to **sending responses**.

**Installation:**

```bash
npm install express
```

**Example setup:**

```javascript
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```

---

## 10. Using **Nodemon**
- **Nodemon** is an NPM package that automatically restarts the server when you make code changes.

**Install:**

```bash
npm install nodemon --save-dev
```

**Run:**

```bash
npx nodemon server.js
```

---

## 11. **Middleware** in Express
- Middleware is a function that runs **before reaching the route handler**.

**Example:**

```javascript
app.use((req, res, next) => {
  console.log("Middleware executed");
  next(); // pass control to next middleware/route
});
```

---

## 12. What is **Request (req) and Response (res) Handling**?
- The **frontend sends a request (req)** to the backend.
- The **backend processes it and sends a response (res)** back.

**Example:**

```javascript
app.get('/user', (req, res) => {
  res.send("This is the response from backend");
});
```

---

## 13. **Error Handling** in Express
- Errors can be handled using special middleware with **4 parameters**:

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
```

---
