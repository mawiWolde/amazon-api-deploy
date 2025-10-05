# 🎓 Evangadi Forum – Group Project

<div align="center">
  <a href="https://github.com/your-team/evangadi-forum">
    <img src="images/logo.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Evangadi Forum – Q&A Platform</h3>

  <p align="center">
    A collaborative full-stack group project where users can ask questions, post answers, and engage in discussions.  
    Built with React, Vite, Node.js, Express, and MySQL.  
    <br />
    <a href="https://github.com/your-team/evangadi-forum"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://evangadi-forum-demo.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/your-team/evangadi-forum/issues">Report Bug</a>
    ·
    <a href="https://github.com/your-team/evangadi-forum/issues">Request Feature</a>
  </p>
</div>

---

## 📑 Table of Contents
- [About the Project](#about-the-project)  
- [Built With](#built-with)  
- [API Documentation](#api-documentation)  
- [Task Breakdown](#task-breakdown)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Roadmap](#roadmap)  
- [Contributing](#contributing)  
- [License](#license)  
- [Team Members](#team-members)  
- [Acknowledgments](#acknowledgments)  

---
 
## 🚀 About The Project

Evangadi Forum is a **Q&A platform** inspired by StackOverflow, designed for collaborative learning.  
Users can:  
- Register and log in securely  
- Ask questions  
- Answer existing questions  
- View and manage discussions  

---

## 🛠️ Built With

- [![React][React.js]][React-url]  
- [![Vite][Vite.js]][Vite-url]  
- [![Node.js][Node.js]][Node-url]  
- [![Express][Express]][Express-url]  
- [![MySQL][MySQL]][MySQL-url]  
- [![MongoDB][MongoDB]][MongoDB-url]  
- [![CSS Modules][CSSModules]][CSSModules-url]  

---

## 📘 API Documentation

### Authentication Middleware
- **Endpoint**: `/api/user/checkUser` (GET)  
- **Description**: Verifies authenticated user.  
- **Headers**: `Authorization: Bearer token`  
- **Success (200)**:
```json
{ "message": "Valid user", "username": "Kebede", "userid": "123" }
