🍽️ Node Hotels (Menu & Staff Management API)

A backend project built with Node.js and Express.js for managing restaurant menu items and staff information.
This project provides RESTful APIs to perform CRUD operations on menu and staff data, along with secure authentication using JWT and bcrypt.

---

🚀 Features

- 🍔 Manage menu items (Add, update, delete, view)
- 👨‍🍳 Manage staff/person data
- 🔐 User authentication (Signup & Login using JWT)
- 🔑 Protected routes using token-based authentication
- 🔒 Password hashing using bcrypt
- 🔄 RESTful API structure
- 🗄️ MongoDB database integration
- ⚡ Lightweight and scalable backend
- 🌐 Deployed on Render (Live API available)

---

🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt

---

📂 Project Structure

Node_Hotels/
│── models/          # Mongoose schemas (Menu, Person)
│── routes/          # API routes
│── main_server.js   # Main server entry point

---

⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/db362966/Node_Hotels.git

2️⃣ Navigate to project folder

cd Node_Hotels

3️⃣ Install dependencies

npm install

4️⃣ Create a ".env" file

Add the following environment variables:

PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key

5️⃣ Start the server

npm start

---

🔐 Authentication

This project uses JWT (JSON Web Token) and bcrypt for secure authentication.

🧾 Auth Routes

- "POST /signup" → Register a new user (password hashed using bcrypt)
- "POST /login" → Login user and receive JWT token

🔑 How it works

- User password is hashed using bcrypt before storing in database
- On login, password is verified using bcrypt
- A JWT token is generated after successful authentication
- The token must be included in headers for protected routes

Example:

Authorization: Bearer <your_token>

---

📡 API Endpoints

🍔 Menu Routes

- "GET /menu" → Get all menu items
- "POST /menu" → Add new item (Protected)
- "PUT /menu/:id" → Update item (Protected)
- "DELETE /menu/:id" → Delete item (Protected)

👨‍🍳 Staff Routes

- "GET /person" → Get all staff
- "POST /person" → Add staff (Protected)
- "PUT /person/:id" → Update staff (Protected)
- "DELETE /person/:id" → Delete staff (Protected)

---

🌐 Live Demo

🚀 Live API is available here:

👉 https://hotel-mw65.onrender.com

Example Endpoint:

GET https://hotel-mw65.onrender.com/menu

---

📋 Prerequisites

Make sure you have the following installed:

- Node.js
- npm (comes with Node.js)
- MongoDB (local or MongoDB Atlas)

🔗 Download Node.js: https://nodejs.org/

---

📈 Future Improvements

- 📊 Admin dashboard
- 🖼️ Image upload for menu items
- ⚛️ Frontend integration (React)
- 🔐 Role-based access (Admin/User)

---

🤝 Contributing

Feel free to fork this repository and contribute.
Pull requests are welcome!

---

👨‍💻 Author

Deepak Bisht