# 🛒 E-commerce-Follow-Along

Welcome to the **E-commerce-Follow-Along** project! 🚀 This is a full-stack E-commerce Website built using modern frontend and backend technologies. The goal of this project is to create a seamless online shopping experience with features like product listings, user authentication, cart functionality, and secure payment processing.

---

## 🎯 Features

- 🏢 **Product Listings** – Browse a variety of products with detailed descriptions.
- 🔍 **Search & Filters** – Easily find products using an intuitive search and filter system.
- 🛒 **Shopping Cart** – Add/remove products and manage your cart effortlessly.
- 🏦 **Secure Payments** – Integrated payment gateway for smooth transactions.
- 🔒 **User Authentication** – Sign up, log in, and manage user accounts securely.
- 🚚 **Order Tracking** – Monitor orders in real-time with status updates.

---

## 📌 Project Milestones

### ✅ Milestone 1: Repository Initialization

- 📂 Created a GitHub repository named **Ecommerce-Follow-Along**.
- 📝 Initialized the repository with a README.md file.
- 🏗️ Set up basic project structure and committed initial files.

### ✅ Milestone 2: Project Setup and Login Page

- 🔗 Used the same GitHub repository created in **Milestone 1**.
- 🔐 Completed the **Login Page** implementation as part of the project setup.
- ⚙️ Configured basic authentication mechanisms.
- 📤 Committed and pushed all changes to GitHub.

### ✅ Milestone 3: Backend Organization and Database Setup

- 📂 Created dedicated folders and structure for organizing backend code efficiently.
- 🌐 Initialized and configured a **Node.js server** to handle API requests.
- 🟢 Connected the application to **MongoDB** for storing and managing data.
- 🛠️ Implemented basic **error handling** to ensure smooth server operation.

### ✅ Milestone 4: User Model, Controller, and File Uploads

- 👤 Created a **User Model** to define how user data is stored in the database.
- 🛠️ Developed a **User Controller** to handle user-related operations.
- 📤 Integrated **Multer** to enable file uploads (e.g., profile pictures, product images).

### ✅ Milestone 5: User Registration UI & Validation

- 🎨 Designed the frontend **UI for user registration**.
- ✅ Implemented **form validation** to ensure user inputs are properly checked before submission.
- 🔗 Connected the **registration UI** to the backend API.

### ✅ Milestone 7: Login Authentication

- 🔑 Created **backend endpoint** for user login.
- 🔍 Implemented **password validation and encryption** comparison.
- 🔐 Used **bcrypt** to securely store and validate passwords.
- ⚠️ Ensured proper **error handling** for failed login attempts.

### 🎉 Milestone 8: Product Card Component & Homepage

- 🛠️ **Created a Card Component** to showcase products effectively.
- 📄 Designed the **homepage layout** to display product cards.
- 🔧 **Implemented dynamic components** that accept product details as props.
- 🔁 Used **array mapping** to iterate over the product list.

---

## 🚀 Milestone 9: Product Input Form

- 📝 **Created a frontend form** for adding new products.
- 🖼️ Allowed users to **upload multiple images** for a product.
- 🎨 Designed an **intuitive UI** for product input.

---

## 🚀 Milestone 10: Product Schema & API Endpoint

- 🛠️ **Created a Mongoose schema** for defining product structure (e.g., name, description, price, image URL).
- 🔎 Ensured **proper validation** for required fields and correct data types.
- 🌐 **Built a POST endpoint** to receive and store product details in **MongoDB**.
- ✅ Implemented **data validation** before saving to maintain data integrity.

---

## 🚀 Milestone 11: Display Products at Frontend

- 📝 **Write an endpoint** that will send all products data to the frontend.
- 🔙 **In the frontend**, write a function to get all the data.
- 🖼️ **Display these data dynamically** by passing them to the product card component.

---

## 🚀 Milestone 12: Personalized Products Page

- 🌟 **Welcome to Milestone 12!** 
- 🛒 **Create a "My Products" page** that displays all products added by the user according to their email.
- 📝 **Write an endpoint** to filter and send products by user email from MongoDB.
- 🔙 **Implement frontend functionality** to fetch and display these filtered products.
- 🖼️ **Use the product card** to dynamically show user's products.

---

## 🚀 Milestone 13: Edit Product Functionality

- 🌟 **Welcome to Milestone 13!**
- ✏️ Added functionality to **edit uploaded products**.
- 🛠️ Implemented an **edit button** on the product card and created a backend endpoint to update product details in **MongoDB**.

**Learning Goals 🎯**  
By the end of this milestone, you will:  
- Learn how to write an endpoint to update existing data in MongoDB.  
- Understand how to auto-fill a form with previous data and provide options to edit it.  

**Steps for Milestone 13 📝**  
- Write a backend endpoint to receive updated product data and modify the existing entry in MongoDB.  
- Add an **edit button** to the product card in the frontend.  
- On clicking the edit button, populate a form with the product’s current data, allowing users to edit and save changes.  

---

## 🚀 Milestone 14: Delete Product Functionality

- 🌟 **Welcome to Milestone 14!**
- Today, we will add an functionality to delete button to the product data and write and backend endpoint to delete the product with the use of ID.

**Learning Goals 🎯**  
By the end of this milestone, you will:  
- How to write an endpoint that delete the product with specific ID from MongoDB.  

**Steps for Milestone 14 📝**  
- Write an endpoint that will Delete the data form MongoDB using ID. In frontend we will add an delete button to the product card. When click on delete button we will send the product id to server endpoint.

---

## 🛠️ Tech Stack

### **Frontend:**
- ⚛️ **React.js / Next.js**
- 🎨 **Tailwind CSS / Bootstrap**
- 🛠️ **Redux** (for state management)

### **Backend:**
- 🖥️ **Node.js / Express.js**
- 🟢 **MongoDB**
- 🔑 **JWT Authentication**

### **Other Tools & Services:**
- ☁️ **Firebase / AWS S3** (for file storage)
- 💳 **Stripe / Razorpay** (for payment processing)
- 📝 **RESTful APIs / GraphQL**
