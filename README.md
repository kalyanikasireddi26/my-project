
# 🚀 Smart Service Request Portal (Microservices)

## 🏗 Architecture
- Auth Service (Port 4000)
- Request Service (Port 5000)
- API Gateway (Port 3000)
- MongoDB (Local)
- Frontend (Simple HTML UI)

---

## 📦 Setup Instructions

### 1️⃣ Install Node.js
Download and install Node.js (v18+)

### 2️⃣ Install MongoDB
Make sure MongoDB is running locally on:
mongodb://127.0.0.1:27017

---

## 🚀 Run the Application

### Step 1: Start Auth Service
cd auth-service
npm install
node server.js

### Step 2: Start Request Service
cd request-service
npm install
node server.js

### Step 3: Start API Gateway
cd api-gateway
npm install
node server.js

### Step 4: Open Frontend
Open frontend/index.html in browser

---

## 🔐 Login API
POST http://localhost:3000/auth/login

Body:
{
  "email": "test@example.com"
}

---

## 📝 Create Request API
POST http://localhost:3000/requests

---

## ✅ Features
✔ Create Request  
✔ View Requests  
✔ Update Status  
✔ JWT Authentication  
✔ Microservices Architecture  

---

Developed for Smart Service Request Portal Assignment
