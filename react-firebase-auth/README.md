# React Routing & Firebase Authentication

Course: Tools & Technologies for Internet Programming

A simple React app with React Router, Firebase Email/Password authentication,
protected routes, and persistent login.

## Pages

| Page      | Route        | Access    |
|-----------|--------------|-----------|
| Home      | `/`          | Public    |
| Login     | `/login`     | Public    |
| Register  | `/register`  | Public    |
| Dashboard | `/dashboard` | Protected |
| Profile   | `/profile`   | Protected |

## Setup

1. `npm install`
2. Create a Firebase project, enable **Authentication -> Email/Password**,
   and register a Web app.
3. Copy `.env.example` to `.env` and fill in your Firebase config values.
4. `npm run dev` and open http://localhost:5173

## Project Structure

```
src/
  firebase.js              Firebase initialisation
  main.jsx                 Entry point (BrowserRouter + AuthProvider)
  App.jsx                  Route definitions
  context/AuthContext.jsx  Auth state + register/login/logout
  components/Navbar.jsx
  components/ProtectedRoute.jsx
  pages/                   Home, Login, Register, Dashboard, Profile
```
