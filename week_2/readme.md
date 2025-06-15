# Node.js File Operations Application

This repository contains a simple Node.js application that demonstrates basic file operations: **creating**, **reading**, and **deleting** files on the server, controlled by a simple client-side interface created using bulma.css.

---

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js and npm (Node Package Manager) installed on your system. Using `nvm` (Node Version Manager) is the recommended way to manage Node.js versions.

---

## Running the Application

Follow these steps to get the file operations application up and running on your local machine.

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/CosmicSparX/CSI_2025.git
cd ./CSI_2025/week_2 
```

### Step 2: Start the Server

In your terminal, navigate to the directory containing `server.js` (or your main application file) and run:

```bash
node server.js
```

### Expected Server Output

You should see output similar to this, indicating the server has started successfully:

```
Server running on http://localhost:3000
Files will be stored in: /path/to/your/project/managed_dir
```

---

## Using the Application

1.  **Open in Browser**: Open your web browser and navigate to the URL provided in the server output:
    `http://localhost:3000`

2.  **Interact with Files**:
    * You'll see an interface where you can enter a **file name** and **content**.
    * The primary button will dynamically change its text (`Create File`, `Read File`, `Delete File`) depending on the Action selected.
    * **Click the button** to perform the action indicated by its text.
    * Messages will appear in the form of an alert indicating the success or failure of the operation.