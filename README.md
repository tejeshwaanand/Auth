# Project Name: User Authentication System

## Description
This project implements a simple user authentication system using Node.js, Express, MongoDB, and JWT. It includes the following features:
- User Registration
- User Login
- Forgot Password with Email Token
- Password Reset

## Prerequisites
Ensure you have the following installed on your system:
- Node.js
- npm or yarn
- MongoDB (or a connection string to a MongoDB Atlas cluster)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:
   ```env
   MONGO_URI=mongodb+srv://<enterpassword>@users.s2lg9.mongodb.net/?retryWrites=true&w=majority&appName=users
   JWT_SECRET=<your-jwt-secret>
   EMAIL_USER=<your-email>
   EMAIL_PASS=<your-email-password>
   ```
   - **MONGO_URI**: Replace `<enterpassword>` with your MongoDB password and ensure the URI is correctly formatted.
   - **JWT_SECRET**: Generate a secret using [jwtsecret.com](https://jwtsecret.com/generate).
   - **EMAIL_USER**: Your email address (e.g., Gmail).
   - **EMAIL_PASS**: Follow [this tutorial](https://youtu.be/n8fVC5UFRjA?si=AlnE34dM0AKPiDXr) to configure your email password or App Password.

4. Start the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

## API Endpoints

### 1. User Registration
- **Endpoint**: `/api/auth/register`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "username": "exampleUser",
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully"
  }
  ```

### 2. User Login
- **Endpoint**: `/api/auth/login`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "username": "exampleUser",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "<jwt-token>"
  }
  ```

### 3. Forgot Password
- **Endpoint**: `/api/auth/forgot-password`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Password reset email sent"
  }
  ```

### 4. Reset Password
- **Endpoint**: `/api/auth/reset-password`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "token": "<reset-token>",
    "newPassword": "newPassword123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Password reset successful"
  }
  ```
  ## Frontend folder
 Create a `.env` file in the frontend directory and add the following environment variables:
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
   ```
## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Feel free to submit a pull request or create an issue if you encounter any problems or have suggestions.

## Acknowledgements
- [jwtsecret.com](https://jwtsecret.com/generate) for generating JWT secrets.
- [Nodemailer YouTube Tutorial](https://youtu.be/n8fVC5UFRjA?si=AlnE34dM0AKPiDXr) for email configuration.
- MongoDB Atlas for providing a cloud-based database service.

