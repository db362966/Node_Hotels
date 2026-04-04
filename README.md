🍽️ Node Hotels (Menu & Staff Management API)

A backend project built with Node.js and Express for managing restaurant menu items and staff information. This project provides RESTful APIs to perform CRUD operations on menu and staff data.

---

🚀 Features

- 🍔 Manage menu items (Add, update, delete, view)
- 👨‍🍳 Manage staff/person data
- 🔄 RESTful API structure
- 🗄️ MongoDB database integration
- ⚡ Lightweight and scalable backend

---

🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

📂 Project Structure

Node_Hotels/
│── models/        # Mongoose schemas (Menu, Person)
│── routes/        # API routes
│── main_server.js      # Main server file

---

⚙️ Installation

1. Clone the repository:

 git clone https://github.com/db362966/Node_Hotels.git

2. Navigate to project folder:

 cd Node_Hotels

3. Install dependencies:

 npm install

4. Create a ".env" file and add:

 PORT=5000
 MONGO_URI=your_mongodb_connection_string

5. Start the server:

 npm start

---

📡 API Endpoints (Example)

Menu Routes

- GET /menu → Get all menu items
- POST /menu → Add new item
- PUT /menu/:id → Update item
- DELETE /menu/:id → Delete item

Staff Routes

- GET /person → Get all staff
- POST /person → Add staff
- PUT /person/:id → Update staff
- DELETE /person/:id → Delete staff

---

📈 Future Improvements

- Authentication system 🔐
- Admin dashboard 📊
- Image upload for menu items 🖼️
- Frontend integration (React)

---

📋 Prerequisites

Make sure you have the following installed before running the project:

- Node.js
- npm (comes with Node.js)
- MongoDB (local or MongoDB Atlas)

You can download Node.js from: https://nodejs.org/

---

🌐 Live Demo

You can access the live API here:

👉 https://your-deployed-link.com

No installation required.

---

🤝 Contributing

Feel free to fork this repository and contribute.

---

👨‍💻 Author

Deepak Bisht



