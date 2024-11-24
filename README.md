## HR Management Backend Dashboard 🚀

A comprehensive backend system for managing employees and HR workflows using the MERN Stack.

## Features

- 🔒 **Authentication & Authorization**
  - Secure user login with JWT tokens (session valid for 2 hours).
  - Role-based access control (HR and Employees).
- 🗂️ **Employee Management**
  - Add, update, and delete employee records.
  - Search and filter employees by role or department.
- 🛠️ **Real-Time Operations**
  - Real-time notifications for HR actions using Socket.IO.
- 🌐 **RESTful APIs**
  - Fully-documented API for integration with external systems.

## 🚀 Tech Stack

| Technology        | Description                 |
| ----------------- | --------------------------- |
| 📦 **MPM**        | Dependency management       |
| ⚛️ **React.js**   | Frontend library            |
| 🟢 **Node.js**    | Backend runtime environment |
| ⚡ **Express.js** | Backend web framework       |
| 🔑 **JWT**        | Secure user authentication  |
| 🗄️ **MongoDB**    | NoSQL Database              |

## 🚀 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-name.git
   ```
2. Navigate to the project directory:
   ```bash
    cd hr-management-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   ```bash
   PORT=5000
   DATABASE_URL=mongodb+srv://<username>:<password>mongodb.net/HR
   JWT_SECRET=your_jwt_secret
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
5. API Documentation:
   
    - Access the API docs at http://localhost:5000/api-docs 📖.
  

## 📁 Project Structure
hr-management-backend/
├── controllers/         # Route controllers
├── middlewares/         # Custom middleware
├── models/              # Database models
├── routes/              # Application routes
├── utils/               # Helper utilities
├── .env.example         # Sample environment file
├── index.js             # Main entry point
└── README.md            # Documentation


## 🚦 API Endpoints

| HTTP Method | Endpoint             | Description         |
| ----------- | -------------------- | ------------------- |
| `POST`      | `/api/auth/register` | Register a new user |
| `POST`      | `/api/auth/login`    | User login          |

## 📷 Screenshots

## 🛡️ Security

- Encrypted passwords using bcrypt 🔒.
- Environment variables stored securely with dotenv.

## 📞 Contact

- Author: Ajay Kumar Prajapati

