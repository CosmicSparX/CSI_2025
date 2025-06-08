---
# My Node.js Hello World Application

This repository contains a simple "Hello World" application built with Node.js.
---

## Table of Contents

- [Prerequisites](https://www.google.com/search?q=%23prerequisites)
- [Installing Node.js (with `nvm`)](https://www.google.com/search?q=%23installing-nodejs-with-nvm)
- [Running the "Hello World" Application](https://www.google.com/search?q=%23running-the-hello-world-application)

---

## Prerequisites

You need Node.js installed on your system. We recommend using `nvm` (Node Version Manager).

---

## Installing Node.js (with `nvm`)

`nvm` is the recommended way to install and manage Node.js versions.

1.  **Install `nvm`:**
    Open your terminal (macOS/Linux) and run the following command:

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```

    _(Note: Replace `v0.39.7` with the [latest nvm version](https://github.com/nvm-sh/nvm/releases) if available.)_

    After installation, close and reopen your terminal (or run `source ~/.bashrc` / `source ~/.zshrc`).

2.  **Install Node.js:**
    Install the latest LTS (Long Term Support) version of Node.js using `nvm`:

    ```bash
    nvm install --lts
    nvm use --lts
    nvm alias default --lts
    ```

### Verify Node.js Installation

Run these commands to confirm Node.js and npm are installed:

```bash
node -v
npm -v
```

You should see version numbers.

---

## Running the "Hello World" Application

### Step 1: Clone the Repository (or create the file)

Clone this repository:

```bash
git clone https://github.com/CosmicSparX/CSI_2025
cd your-repo-name
```

### Step 2: Run the Application

In your terminal, navigate to the directory containing `hello_world.js` and run:

```bash
node hello_world.js
```

### Expected Output

```
Hello, World!, I'm Pranay Sinha

The Server is listening on port 3000
Check it out at: http://localhost:3000
```

---
