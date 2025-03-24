# MERN Bug Tracker

## Overview
This MERN stack application allows users to report, view, update, and delete bugs. The project integrates unit and integration tests for both backend and frontend components, along with debugging best practices.

## Installation

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend

Install dependencies:

bash
Copy
Edit
npm install
Create a .env file with your MongoDB connection string.

Start the server:

bash
Copy
Edit
npm run dev
Frontend
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the React app:

bash
Copy
Edit
npm start
Running Tests
Backend Tests
bash
Copy
Edit
cd backend
npm test
Frontend Tests
bash
Copy
Edit
cd frontend
npm test
Debugging Techniques
Backend: Use console.log and Node.js inspector (node --inspect app.js).

Frontend: Use Chrome DevTools and React Developer Tools. API calls can be inspected via the Network tab.

Error Boundaries: Implement in React to gracefully handle UI crashes.

Testing Approach
Backend: Unit tests for helper functions and integration tests for API endpoints using Jest and Supertest.

Frontend: Unit tests for components and integration tests for API calls and UI updates using React Testing Library.