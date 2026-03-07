# 🏨 Hotel Booking System

A full-stack **Hotel Booking Platform** that allows users to explore hotels, book rooms, and complete secure online payments using **Stripe**.  
The system also provides a **hotel owner dashboard** to manage properties, rooms, bookings, and revenue.

The platform is built using the **MERN stack (MongoDB, Express, React, Node.js)** with **Clerk authentication, Stripe payments, and Cloudinary image storage**.

---

# 🚀 Live Deployment

Deployment Link:
https://quickstay1-chi.vercel.app/

---
# 📌 Key Features

## 👤 User Features
- Browse available hotel rooms
- View room details including price, amenities, and images
- Check room availability with selected dates
- Book hotel rooms online
- Secure payment using **Stripe Checkout**
- View and manage personal booking history

## 🏨 Hotel Owner Features
- Register a hotel on the platform
- Add and manage room listings
- Upload room images using **Cloudinary**
- View booking analytics
- Track total bookings and revenue

## ⚙️ System Features
- Secure authentication with **Clerk**
- **Role-based access control** (User / Hotel Owner)
- **Stripe payment gateway integration**
- **Stripe webhook verification** to confirm payments
- RESTful API architecture
- Cloud image storage via **Cloudinary**

---

# 🛠 Tech Stack

### 🎨 Frontend
- ⚛️ **React**
- 🔀 **React Router**
- 🎨 **Tailwind CSS**
- 🌐 **Axios**
- 🔔 **React Hot Toast**

### ⚙️ Backend
- 🟢 **Node.js**
- 🚂 **Express.js**
- 🍃 **MongoDB**
- 📦 **Mongoose**

### 🔐 Authentication
- 🔑 **Clerk Authentication**

### 💳 Payments
- 💳 **Stripe Checkout**
- 🔔 **Stripe Webhooks**

### 🖼 Media Storage
- ☁️ **Cloudinary**

### 🚀 Deployment
- ▲ **Vercel**

---

# 💻 Running the Project Locally

Follow these steps to run the project on your local machine.

---

# Clone the Repository

```bash
git clone https://github.com/Vibha-1729/Hotel_Booking_System.git
cd Hotel_Booking_System
```
# Install Dependencies
- Backend
```bash
cd server
npm install
```

- Frontend
```bash
cd client
npm install
```

---

## Configure Environment Variables
# Backend Environment Variables
- 
- PORT=3000
- MONGODB_URI=your_mongodb_connection_string

- STRIPE_SECRET_KEY=your_stripe_secret_key
- STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

- CLOUDINARY_CLOUD_NAME=your_cloudinary_name
- CLOUDINARY_API_KEY=your_cloudinary_api_key
- CLOUDINARY_API_SECRET=your_cloudinary_secret

- CLERK_SECRET_KEY=your_clerk_secret_key

# Frontend Environment Variables

- VITE_BACKEND_URL=http://localhost:3000
- VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
- VITE_CURRENCY=$

---

## Run the Backend Server
```bash
cd server
npm run server
```

## Run the Frontend Application
```bash
cd client
npm run dev
```
  





