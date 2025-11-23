# Restaurant Website 

This is a **full-stack restaurant website** built with **React.js (Frontend)** and **Node.js/Express + MongoDB (Backend)**. The website allows users to browse menu items, view restaurant information, and make reservations.

---

## Table of Contents

- [Technologies](#technologies)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
  - [Frontend](#frontend)  
  - [Backend](#backend)  
- [Usage](#usage)  
- [Environment Variables](#environment-variables)  
- [License](#license)  

---

## Technologies

**Frontend:**  
- React 18  
- React Router DOM  
- React Icons  
- React Hot Toast  
- Vite  
- Axios  

**Backend:**  
- Node.js  
- Express  
- MongoDB with Mongoose  
- Cors  
- Validator  
- Dotenv  

---

## Project Structure

**Frontend (`zeeshi`)**  

zeeshi/
├─ public/
├─ src/
│ ├─ assets/
│ ├─ components/
│ ├─ pages/
│ ├─ App.jsx
│ └─ index.jsx
├─ package.json
├─ vite.config.js
└─ index.css

**Backend (`backend`)**  

backend/
├─ models/
├─ routes/
├─ controllers/
├─ server.js
├─ package.json
└─ .env

---

## Installation

### Frontend

1. Navigate to the frontend folder:  
```bash
cd zeeshi
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser at http://localhost:5173.

Backend
Navigate to the backend folder:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Start the server in development mode:

bash
Copy code
npm run dev
Backend server will run at http://localhost:5000 (or the port defined in .env).

Usage
Browse menu items and restaurant information.

Make reservations (if reservation API implemented).

Admin can manage menu and reservations via backend routes.

Environment Variables
Create a .env file in the backend folder:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
Replace your_mongodb_connection_string with your MongoDB URI.

License
This project is open-source and available under the MIT License.


---
