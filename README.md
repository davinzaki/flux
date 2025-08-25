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

Flux/
├─ client/ # React + Vite frontend
├─ server/ # Express backend with MongoDB
├─ shared/ # Shared types, validation, utils
├─ docs/ # Documentation
├─ package.json # Root workspace config

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

Install dependencies for root, client, and server:

npm run install-deps

Run in development mode

npm run dev

Build client for production

npm run build

Preview production build

npm run preview
```
