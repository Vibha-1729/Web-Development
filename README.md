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

## Frontend
- React
- React Router
- Tailwind CSS
- Axios
- React Hot Toast

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication
- Clerk Authentication

## Payments
- Stripe Checkout
- Stripe Webhooks

## Media Storage
- Cloudinary

## Deployment
- Vercel

---

# 🏗 System Architecture
User (React Frontend)
│
▼
REST APIs (Express Backend)
│
▼
MongoDB Database
│
├── Stripe Payment Gateway
└── Cloudinary Image Storage

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Vibha-1729/Hotel_Booking_System.git
cd Hotel_Booking_System
```

---
# Install Dependencies

Backend
``` bash
cd server
npm install
```

Frontend
``` bash
cd client
npm install
```
