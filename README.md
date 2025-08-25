# ⚡ Flux

_A Simple E-commerce Platform built with the MERN Stack_

![Flux Banner](https://img.shields.io/badge/MERN-Stack-green?logo=mongodb&logoColor=white)  
![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)  
![Status](https://img.shields.io/badge/status-in%20development-orange)

---

## 🚀 Overview

Flux is a **simple e-commerce platform** built with the **MERN stack** (MongoDB, Express.js, React, Node.js).  
It’s designed to demonstrate a clean **monorepo architecture**, with shared code, API, and client-side app in one place.

This project is perfect as a starting point for learning full-stack development, experimenting with monorepo setups, or extending into a real-world e-commerce app.

---

## 📂 Project Structure
```bash
Flux/
├─ client/       # React + Vite frontend
├─ server/       # Express backend with MongoDB
├─ shared/       # Shared types, validation, utils
├─ docs/         # Documentation
├─ package.json  # Root workspace config
```

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite + TypeScript
- **Backend**: Node.js + Express.js + MongoDB
- **Shared**: Types, validation schemas, utils
- **Dev Tools**:
  - [Nodemon](https://nodemon.io/) for hot reloading backend
  - [Concurrently](https://www.npmjs.com/package/concurrently) to run client & server together
  - [ESLint](https://eslint.org/) for code linting
  - [Helmet](https://www.npmjs.com/package/helmet) & [CORS](https://www.npmjs.com/package/cors) for security

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/davinzaki/flux.git

cd flux
```

Install dependencies for root, client, and server:
```bash
npm run install-deps
```

Run in development mode
```bash
npm run dev
```

Build client for production
```bash
npm run build
```

Preview production build
```bash
npm run preview
```

## 🐳 Running with Docker

Flux comes with a ready-to-use **Docker setup** for local development.  
This will spin up **3 containers**:
- `client` → React + Vite frontend
- `server` → Express backend
- `mongo` → MongoDB database

### 1️⃣ Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running
- A `.env` file at the project root (already included in `.env.example`)

Example `.env`:
```env
# App environment
NODE_ENV=development

# Ports
CLIENT_PORT=5173
SERVER_PORT=5000
MONGO_PORT=27017

# Database
MONGO_URI=mongodb://mongo:27017/fluxdb
```

### 2️⃣ Build & Run Containers

From the root of the project:
```bash
docker compose up --build
```

### 3️⃣ Stopping & Cleaning

To stop:
```bash
docker compose down
```

If you want to reset MongoDB data (useful if you see the unclean shutdown warning):

```bash
docker compose down -v
```

(-v removes volumes, wiping the database)

✅ With this setup, you don’t need Node, Mongo, or Vite installed locally—just Docker.
