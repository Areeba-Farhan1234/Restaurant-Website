Restaurant Website

This project is a full-stack restaurant website built with React.js (Frontend) and Node.js/Express + MongoDB (Backend). The website allows users to browse menu items, make reservations, and interact with the restaurant services.

Table of Contents

Technologies

Project Structure

Installation

Frontend

Backend

Usage

Environment Variables

License

Technologies

Frontend:

React 18

React Router DOM

React Icons

React Hot Toast

Vite

Axios

Backend:

Node.js

Express

MongoDB with Mongoose

Cors

Validator

Dotenv

Project Structure

Frontend (zeeshi)

zeeshi/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ pages/
│  ├─ App.jsx
│  └─ index.jsx
├─ package.json
├─ vite.config.js
└─ index.css


Backend (backend)

backend/
├─ models/
├─ routes/
├─ controllers/
├─ server.js
├─ package.json
└─ .env

Installation
Frontend

Navigate to the frontend folder:

cd zeeshi


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser at http://localhost:5173 (default Vite port).

Backend

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Start the server in development mode:

npm run dev


Backend server will run at http://localhost:5000 (or the port defined in .env).

Usage

Browse menu items, view dishes, and restaurant information.

Make reservations (if reservation API is implemented).

Admin can manage menu and reservations through backend routes.

Environment Variables

Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string


Replace your_mongodb_connection_string with your MongoDB URI.

License

This project is open-source and available under the MIT License.
