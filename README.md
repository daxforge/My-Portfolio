# ✨ Daksh Pratap Singh — Portfolio ✨

A modern, high-performance developer portfolio built with the **MERN** stack (**React, Node.js, Express, and MongoDB**). Featuring a sleek glassmorphic UI, smooth CSS transitions, custom scroll-driven micro-animations, and a technological binary-scramble hover effect.

---

## 🚀 Key Features

*   **🖥️ Modern React & Vite Frontend:** Blazing fast load times and optimized rendering.
*   **🎨 Custom UI/UX & Vanilla CSS:** Built entirely with pure CSS for complete layout flexibility and smooth glassmorphic designs.
*   **⚡ Interactive Animations:** Features custom text-scramble/decoding animations on name hover and page entrances.
*   **🔌 Express Contact API:** Connects seamlessly with a backend to receive messages.
*   **🍃 Smart Database Fallback:** Works dynamically without MongoDB by falling back to logging messages directly to the backend console if a connection is unavailable.

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Backend & Database
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

---

## 📂 Project Structure

```bash
My Portfolio/
├── backend/            # Express.js API
│   ├── src/
│   │   └── server.js   # API routes, Mongoose schema, server startup
│   ├── .env.example    # Backend environment variables template
│   └── package.json
└── frontend/           # React / Vite Client
    ├── src/
    │   ├── components/ # Reusable UI components (ContactForm, SectionHeading)
    │   ├── data/       # Static details (portfolio.js: projects, bio, skills)
    │   ├── App.jsx     # Main layout & router handler
    │   └── styles.css  # Layout grid, typography, mesh animation styles
    ├── .env            # Frontend environment variables configuration
    └── package.json
```

---

## ⚙️ Local Development Setup

Follow these steps to get your portfolio site up and running locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Install Dependencies
Install dependencies for both frontend and backend directories:
```bash
# Clone the repository (if not already cloned)
git clone https://github.com/daxforge/My-Portfolio.git
cd My-Portfolio

# Install Frontend dependencies
cd frontend && npm install

# Install Backend dependencies
cd ../backend && npm install
```

### 3. Environment Variables Configuration

#### Backend Config (`backend/.env`):
Create a `.env` file in the `backend/` directory:
```env
PORT=5001
MONGODB_URI=mongodb://127.0.0.1:27017/daksh_portfolio
CLIENT_URL=http://localhost:5173
```
*Note: If no database is connected, the API will log message submissions to the terminal console.*

#### Frontend Config (`frontend/.env`):
Create a `.env` file in the `frontend/` directory:
```env
VITE_API_URL=http://localhost:5001
```

### 4. Running the Applications

Open two terminals or background tasks to start the development servers:

#### Start the API (Backend):
```bash
cd backend
npm run dev
```

#### Start the Site (Frontend):
```bash
cd frontend
npm run dev
```

Once running, view your website at **`http://localhost:5173/`**.

---

## 📬 Contact & Socials

*   **GitHub:** [@daxforge](https://github.com/daxforge)
*   **LinkedIn:** [Daksh Pratap Singh](https://www.linkedin.com/in/daksh-pratap-singh-93a200384)
*   **Email:** [pratapdaksh20@gmail.com](mailto:pratapdaksh20@gmail.com)
