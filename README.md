# MIS-RENTAS GraphQL API

A GraphQL API built with Node.js 12, Express, Sequelize, and MySQL for property rental management.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation Guide](#installation-guide)
- [Project Setup](#project-setup)
- [Running the Server](#running-the-server)
- [GraphQL Usage](#graphql-usage)
- [Project Structure](#project-structure)


## 🚀 Prerequisites

Before you begin, ensure you have met the following requirements:

- **Operating System**: Windows or Linux
- **Node.js**: Version 12.22.12
- **npm**: Version 6.14.16 
- **MySQL**: Version 10.6.24 
- **Git**: (Optional) For version control

## 📥 Installation Guide

### Step 1: Install Node.js 12.22.12

#### **For Ubuntu/Debian:**
```bash
# Update package list
sudo apt update

# Install Node.js 12.x
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version  # Should output: v12.22.12
npm --version   # Should output: 6.14.16 or similar
```

#### **For Windows:**
1. Download the Node.js 12.22.12 installer from:
   [https://nodejs.org/dist/v12.22.12/](https://nodejs.org/dist/v12.22.12/)
   
2. Choose the appropriate installer:
   - `node-v12.22.12-x64.msi` (64-bit)
   - `node-v12.22.12-x86.msi` (32-bit)

3. Run the installer and follow the installation wizard

4. Verify installation in Command Prompt or PowerShell:
```cmd
node --version
npm --version
```

### Step 2: Install MySQL

#### **For Ubuntu/Debian:**
```bash
# Install MySQL Server
sudo apt install mysql-server

# Start MySQL service
sudo systemctl start mysql

# Secure MySQL installation
sudo mysql_secure_installation

# Enable MySQL on boot
sudo systemctl enable mysql
```

#### **For Windows:**
1. Download MySQL Installer from:
   [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)
   
2. Run the installer and select:
   - MySQL Server
   - MySQL Workbench (optional, for GUI)
   
3. Follow the installation wizard and set a root password

### Step 3: Clone and Setup Project

```bash
# Clone the repository (if using Git)
git clone <repository-url>
cd mis-rentas

# OR Create a new directory
mkdir mis-rentas-api
cd mis-rentas-api

# Initialize npm project
npm init -y
```

### Step 4: Install Dependencies

Create a `package.json` file with the following content:

```json
{
  "name": "mis-rentas",
  "version": "1.0.0",
  "description": "api built in node 12 using graphql",
  "main": "index.js",
  "scripts": {
    "start": "node index",
    "dev": "nodemon index",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "engines": {
    "node": "12.22.12",
    "npm": "6.14.16",
    "mysql": "10.6.24"
  },
  "dependencies": {
    "express": "4.18.2",
    "sequelize": "6.35.0",
    "mysql2": "2.3.3",
    "graphql": "15.8.0",
    "express-graphql": "0.12.0",
    "jsonwebtoken": "8.5.1",
    "cors": "2.8.5"
  },
  "keywords": [
    "api",
    "graphql",
    "mysql"
  ],
  "author": "juanse-morales",
  "license": "MIT",
  "devDependencies": {
    "nodemon": "2.0.22"
  }
}
```

Install all dependencies:

```bash
npm install
```

## 🛠️ Project Setup

### Database Configuration

1. **Create a MySQL database:**
```sql
CREATE DATABASE mis_rentas_db;
CREATE USER 'mis_rentas_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON mis_rentas_db.* TO 'mis_rentas_user'@'localhost';
FLUSH PRIVILEGES;
```

2. **Create a `.env` file** (optional but recommended):
```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=mis_rentas_db
DB_USER=mis_rentas_user
DB_PASS=your_password
JWT_SECRET=your_jwt_secret_key
PORT=4000
NODE_ENV=development
```

## 🚦 Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

Or directly with Node:
```bash
node index.js
```

## 📡 GraphQL Usage

### Access GraphiQL Interface

Open your browser and navigate to:
```
http://localhost:4000/graphql
```

### Sample Queries

#### 1. Server Status Check
```graphql
query {
  serverStatus {
    status
    timestamp
    database
    uptime
  }
}
```


## 📁 Project Structure

```
mis-rentas/
├── index.js              # Main application entry point
├── package.json          # Dependencies and scripts
├── package-lock.json     # Locked dependency versions
├── .env                  # Environment variables (gitignored)
├── .env.example          # Example environment variables
├── .gitignore           # Git ignore rules
├── README.md            # This documentation file
│
├── config/              # Configuration files
│   ├── database.js      # Database configuration
│   └── constants.js     # Application constants
│
├── models/              # Sequelize models
│   ├── index.js         # Models initialization
│   ├── Property.js      # Property model
│   ├── Tenant.js        # Tenant model
│   └── Rental.js        # Rental model
│
├── schema/              # GraphQL schema definitions
│   ├── index.js         # Schema composition
│   ├── typeDefs.js      # Type definitions
│   └── resolvers.js     # Resolver functions
│
├── middleware/          # Custom middleware
│   ├── auth.js          # Authentication middleware
│   └── validation.js    # Request validation
│
├── utils/               # Utility functions
│   ├── validators.js    # Data validation
│   ├── helpers.js       # Helper functions
│   └── logger.js        # Logging utility
│
└── tests/               # Test files
    ├── unit/            # Unit tests
    └── integration/     # Integration tests
```
