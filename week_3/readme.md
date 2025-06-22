# Convert callback-based code to Promises and Async/Await

This repository contains a simple Node.js application that serves as a practical demonstration for refactoring asynchronous JavaScript code. It showcases two primary patterns for handling asynchronous operations – Callbacks and Async/Await

---

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js and npm (Node Package Manager) installed on your system. Using `nvm` (Node Version Manager) is the recommended way to manage Node.js versions.

---

## Running the scripts 

Follow these steps to run the scripts on your local machine.

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/CosmicSparX/CSI_2025.git
cd ./CSI_2025/week_3 
```

### Step 2: Running the callback based code

In your terminal, navigate to the directory containing `callback.js` and run:

```bash
node callback.js
```

### Expected Output

You should see output similar to this: 

```
Starting callback function execution...
Attempting to fetch user data from https://jsonplaceholder.typicode.com/users/1 (callback-based)...
Fetch initiated. Program continues executing while waiting for API response...
API data fetched successfully.
User data received:
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

### Step 3: Running the async/await based code

In your terminal, navigate to the directory containing `async.js` and run:

```bash
node async.js
```

### Expected Output

You should see output similar to this:

```
Starting async function execution...
Awaiting user data from API...
Attempting to fetch user data from https://jsonplaceholder.typicode.com/users/1 (Promise-based)...
Main script continues executing while async function is awaiting API response...
API data fetched successfully.
User data received:
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

Async function finished.
```