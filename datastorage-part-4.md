# Data Storage

We need a place to store all users' information.  
Databases are used for this purpose. A **database** can store almost anything and is very efficient.

---

## Types of Databases

1. **SQL (Structured Query Language)**  
   - Stores data in a structured format called **tables** (rows and columns).  
   - Example: MySQL, PostgreSQL, Oracle.

2. **NoSQL (Not Only SQL)**  
   - Stores data in a flexible format, often as **objects/documents**.  
   - Example: MongoDB, Firebase, Cassandra.

---

## MongoDB (NoSQL Database)

- **MongoDB** is a popular NoSQL database.  
- It stores data in the form of **documents** (similar to objects in JSON).  
- Structure:  


---

## Backend Servers

A backend system usually has two main servers:

1. **Application Server** – Runs the backend code (e.g., Node.js, Express).  
2. **Database Server** – Manages the data storage (e.g., MongoDB).

---

## Code Flow (with Mongoose)

| Code / Step              | What it does                |
|---------------------------|-----------------------------|
| `mongoose.connect()`      | Creates/Connects to Database |
| Create a **Model**        | Defines a Collection         |
| Create/Insert a Document  | Adds data to the Collection  |

---

✅ Example:  
- **Database**: `studentDB`  
- **Collection**: `students`  
- **Document**: `{ name: "Shivani", age: 24 }`
