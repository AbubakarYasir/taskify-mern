# Taskify - Advanced Task Management App

Taskify is an advanced task management app built using the **MERN** stack (MongoDB, Express, React, Node.js). It is designed to help individuals and teams organize their tasks, set priorities, collaborate efficiently, and streamline workflows with a modern, intuitive UI/UX.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Features

- **Task Creation & Management**: Create, update, and delete tasks easily.
- **Smart Categorization**: Assign tasks to categories like Personal, Work, etc., for better organization.
- **Priority Tracking**: Set task priorities (High, Medium, Low) and stay focused on important tasks.
- **Due Dates & Reminders**: Set due dates and get notifications for upcoming tasks.
- **Real-time Collaboration**: Share tasks with your team, assign roles, and track progress.
- **User Authentication**: Secure login and registration using JWT for managing user sessions.
- **Task Filters**: Filter tasks by due date, priority, category, and completion status.
- **Responsive Design**: Fully responsive UI/UX that works across devices.
- **Dark Mode**: Toggle between dark and light themes for a more personalized experience.

## Technologies Used

Taskify leverages the following technologies to ensure scalability, performance, and security:

- **Frontend**:  
  - **React**: A JavaScript library for building user interfaces.
  - **React Router**: For seamless navigation between app pages.
  - **Redux**: For managing application state globally.
  - **Material-UI**: For a modern UI design and components.
  
- **Backend**:  
  - **Node.js**: JavaScript runtime environment for building scalable server-side applications.
  - **Express**: Web framework for Node.js, handling routing and API endpoints.
  - **MongoDB**: NoSQL database to store tasks and user data.
  - **Mongoose**: ODM (Object Data Modeling) library for MongoDB in Node.js.

- **Authentication**:  
  - **JWT (JSON Web Tokens)**: Secure authentication for users.

- **Others**:  
  - **Bcrypt**: For password hashing and security.
  - **Axios**: For making HTTP requests to communicate with the backend API.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (>= v18.0.0)
- **MongoDB** (locally or remotely hosted instance)
- **Git** for cloning the repository

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/taskify.git
   ```

2. Navigate to the project directory:

   ```bash
   cd taskify
   ```

3. Install dependencies for both frontend and backend:

   - For **backend**:

     ```bash
     cd backend
     npm install
     ```

   - For **frontend**:

     ```bash
     cd frontend
     npm install
     ```

4. Set up the environment variables. You will need to create a `.env` file in the **backend** directory with the following variables:

   ```
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret-key
   PORT=5000
   ```

5. Run the application locally:

   - **Backend**: Run the following command in the **backend** directory:

     ```bash
     npm run dev
     ```

   - **Frontend**: Run the following command in the **frontend** directory:

     ```bash
     npm start
     ```

   Your app should now be running locally at `http://localhost:3000` (Frontend) and `http://localhost:5000` (Backend).

## Usage

### Taskify UI

Once you have the app running, you can:

- Register a new account or login with your existing credentials.
- Create new tasks and categorize them.
- Set priorities and add due dates for tasks.
- Share tasks with team members and track progress in real-time.
- Use filters to quickly find tasks based on priority, due date, and category.

### Backend API

The backend exposes a set of RESTful API endpoints to manage tasks and users. Some of the key routes are:

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Log in a user.
- `GET /api/tasks`: Get all tasks for the logged-in user.
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/:id`: Update an existing task.
- `DELETE /api/tasks/:id`: Delete a task.

You can use tools like **Postman** or **Insomnia** to test the API.

## Contributing

We welcome contributions to **Taskify**. If you’d like to improve the project or fix bugs, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request describing your changes.

For major changes, please open an issue first to discuss what you would like to change.

## License

Taskify is open-source software licensed under the **MIT License**.