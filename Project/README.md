# E-commerce Backend API

This project is a robust backend API for an e-commerce application, developed as a capstone project for the Celebal Summer Internship 2025. It provides core functionalities for user authentication, product management, shopping cart operations, and order processing.

## Features

- **User Authentication**: Register and log in users with secure JWT-based authentication.
- **Product Management**: Create, retrieve, update, and delete product listings.
- **Shopping Cart**: Add, update, and manage items in a user's shopping cart (currently in-memory).
- **Order Processing**: Create orders based on the current cart contents.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **bcryptjs**: For password hashing.
- **jsonwebtoken**: For implementing JSON Web Tokens for authentication.
- **dotenv**: For managing environment variables.

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or higher recommended)
- pnpm (as specified in `package.json`)
- MongoDB (running locally or accessible via a connection string)

### 1. Clone the Repository

```bash
git clone <repository_url>
cd Project
```

### 2. Install Dependencies

Using pnpm, install the required packages:

```bash
pnpm install
```

### 3. Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables.

```
MONGO_URI=mongodb://localhost:27017/ecommerce_backend
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

- `MONGO_URI`: Your MongoDB connection string.
- `JWT_SECRET`: A secret key for signing JWTs.
- `PORT`: The port on which the server will run (default is 5000).

### 4. Start the Server

```bash
node index.js
```

The server will start and listen on the port specified in your `.env` file (default: `http://localhost:5000`).

## API Endpoints

Here's a brief overview of the main API routes:

- `/api/auth/register` (POST): Register a new user.
- `/api/auth/login` (POST): Log in an existing user.
- `/api/products` (GET): Get all products.
- `/api/products` (POST): Create a new product (requires authentication).
- `/api/products/:id` (PUT): Update a product by ID (requires authentication).
- `/api/products/:id` (DELETE): Delete a product by ID (requires authentication).
- `/api/cart` (GET): Get current cart contents.
- `/api/cart` (POST): Add a product to the cart.
- `/api/cart` (PUT): Update product quantity in the cart.
- `/api/cart` (DELETE): Clear the cart.
- `/api/orders` (POST): Create a new order.

