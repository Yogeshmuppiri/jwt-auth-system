# 🔐 JWT Auth System

This is a full-stack authentication system built with **Node.js**, **Express**, **MongoDB**, and **React** that uses **JWT (JSON Web Tokens)** to manage user authentication securely.

---

## ✨ Features

- User Registration
- Secure Login using JWT
- Protected Dashboard
- Password Reset via Email (Token-based)
- Client-side Routing (React Router)
- Email Format Validation
- Login Token Expiration Handling

---

## ⚙️ Tech Stack

- **Frontend**: React, CSS Modules, Axios
- **Backend**: Express, MongoDB, JWT, bcryptjs, dotenv
- **Database**: MongoDB

---

## 🔁 JWT Authentication Workflow

### 1. **User Registers**
- A user signs up by entering name, email, and password.
- Password is hashed using **bcryptjs**.
- Data is saved in MongoDB.

### 2. **User Logs In**
- User sends credentials to backend.
- Backend verifies email and password.
- If correct, it generates a **JWT**:
  ```js
  jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' })
The token is returned to the frontend.

3. Token Stored on Frontend
The token is stored in localStorage or cookies.

4. Accessing Protected Routes
Frontend sends this token in the Authorization header:

makefile
Copy
Edit
Authorization: Bearer <token>
Backend middleware validates the token using jwt.verify().

5. If Valid
User gains access to protected content (like /dashboard).

If expired or invalid → user is denied access.

🔍 JWT vs Regular Login
Feature	Regular Login	JWT Authentication
Session Storage	Server memory (sessions)	Token stored on client (localStorage/cookie)
Scalability	Less scalable	Highly scalable (no session storage needed)
Stateless	❌ No (server must track sessions)	✅ Yes
Token Expiry Control	Difficult	Easy with expiresIn
Mobile App Support	Not ideal	Perfect for mobile clients
Requires Server Memory	✅ Yes	❌ No
Cross-Origin Resource Use	Harder	Easier with tokens
