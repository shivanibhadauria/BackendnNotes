# 🍪 Cookies, Sessions & Parsers in Express.js

## 1. Cookie Parser Installation
```bash
npm install cookie-parser
```

---

## 2. What are Sessions and Cookies?

- **Cookie**  
  - A **small file** stored on the **client side (browser)**.  
  - Sent along with every request to the server.  
  - Helps the server recognize the client across multiple requests.  

- **Session**  
  - A **temporary storage of data** on the **server side**.  
  - Stores user information during a login period.  
  - A session usually relies on cookies to identify the user.  

---

## 3. How They Work Together
1. When you **log in**, the server creates a **session** and stores it temporarily.  
2. The server sends a **cookie** to the client (browser).  
3. On every new request, the browser sends this cookie back to the server.  
4. The server checks the cookie → finds the session → knows which user you are.  
5. When you **remove the cookie** or **logout**, the session ends.  

✅ Example:  
- **Login → Logout** = A session lifecycle.  
- **Cookie** = The key that tells the server *“this request belongs to you”*.  

---

## 4. Express Middleware for Parsing Data

- **`express.json()`**  
  - Parses **JSON data** from incoming requests.  
  - Example: API requests sending `{ "name": "John" }`.  

- **`express.urlencoded({ extended: true })`**  
  - Parses **form data (URL-encoded)** from HTML forms.  
  - Example: `<form method="POST">`.  

📌 Why?  
When the client sends plain text or form data, the server receives it in a **raw blob format**.  
These middlewares convert it into a **readable object** so we can easily use it in our code.  

```js
// Middleware setup
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
```

---

## 5. Summary
- **Cookie** → Client-side storage (small file).  
- **Session** → Server-side temporary storage.  
- **Middleware** (`express.json`, `express.urlencoded`) → Makes incoming request data readable.  
