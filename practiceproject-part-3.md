
---

### 1. Install **EJS** from npm

```bash
npm install ejs
```

---

### 2. Dynamic Routing (Express.js)

1. First, open the browser.
2. Type the URL and press **Enter**.
3. Create a backend **route** for that URL.
4. If you want to make some part of that URL **dynamic**, identify which part changes.

   * Example: `/user/123` → here `123` is dynamic.
   * Express route:

     ```js
     app.get("/user/:id", (req, res) => {
       res.send(`User ID is ${req.params.id}`);
     });
     ```
   * `:id` is called a **route parameter**.

---

### 3. Getting Data from Frontend to Backend

There are 3 common ways to send data from the frontend to the backend:

#### (a) **Route Params (from URL path)**

```js
// URL: /user/123
app.get("/user/:id", (req, res) => {
  console.log(req.params.id); // "123"
});
```

#### (b) **Query Params**

```js
// URL: /search?name=shivani
app.get("/search", (req, res) => {
  console.log(req.query.name); // "shivani"
});
```

#### (c) **Request Body (Form / JSON data)**

👉 To handle JSON data, use `express.json()` middleware.

```js
app.use(express.json());

app.post("/register", (req, res) => {
  console.log(req.body); 
  // { name: "shivani", email: "abc@gmail.com" }
  res.send("Data received");
});
```

---

✅ This way, you can pass data from the frontend to the backend using **route params, query params, or request body**.

---
