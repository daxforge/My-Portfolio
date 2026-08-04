# Daksh Pratap Singh — Portfolio

A modern MERN portfolio with a React/Vite frontend and an Express/MongoDB contact API.

## Run locally

1. Install dependencies in both applications:
   `cd frontend && npm install`
   `cd ../backend && npm install`
2. Copy `backend/.env.example` to `backend/.env` and optionally add a MongoDB URI.
3. Start the API with `npm run dev` inside `backend`.
4. Start the site with `npm run dev` inside `frontend`.

The contact route works without MongoDB by logging submissions to the server console. Add `MONGODB_URI` to persist messages.
