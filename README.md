# AgriTrust - Agricultural Trust Platform

AgriTrust is a comprehensive platform connecting farmers, customers, investors, and buyers in the agricultural ecosystem. The platform facilitates transparent transactions, investment opportunities, and supply chain management.

## 🌟 Features

### For Farmers 👨‍🌾
- Farm registration and profile management
- Smart planner for crop management
- Contract creation for bulk sales
- Geotagged photo uploads for transparency
- Real-time dashboard with farm analytics

### For Customers 🏪
- Browse fresh produce directly from farmers
- Secure OTP-based authentication
- Track orders and delivery status
- Transparent pricing and quality information
- Easy checkout process

### For Investors 💰
- Browse investment opportunities in farms
- Portfolio management
- Real-time investment tracking
- Detailed farm performance analytics
- Secure investment process

### For Buyers 🏭
- Bulk order management
- Contract tracking system
- Direct communication with farmers
- Supply chain transparency
- Supplier directory

## 🚀 Technologies Used

- **Frontend:**
  - React with TypeScript
  - Vite for build tooling
  - TailwindCSS for styling
  - React Router for navigation

- **Backend (Planned):**
  - **Node.js & Express.js:** For building the RESTful API.
  - **MongoDB:** As the NoSQL database to store user and farm data.
  - **Mongoose:** To model application data.
  - **JSON Web Tokens (JWT):** For handling secure user authentication.

## 📂 Project Structure

The repository is organized as a monorepo with separate directories for the frontend and backend.

```
/
├── .github/      # GitHub Actions workflows
├── frontend/     # React + Vite client application
└── backend/      # (Planned) Node.js + Express API server
```

##  Local Development

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Mufee150/agritrust.git
    cd agritrust
    ```

2.  **Set up the Frontend:**
    ```bash
    cd frontend
    npm install
    ```

3.  **Set up the Backend (when available):**
    ```bash
    cd ../backend
    npm install
    ```

### Running the Application

You will need to run the frontend and backend servers in separate terminals.

1.  **Start the Backend Server (from the `backend` directory):**
    ```bash
    npm start
    ```

2.  **Start the Frontend Development Server (from the `frontend` directory):**
    ```bash
    npm run dev
    ```

The frontend will be available at http://localhost:5173 and will connect to the backend API.

## 🌐 Live Demo

Visit our live demo at: [https://mufee150.github.io/agritrust/](https://mufee150.github.io/agritrust/)

## 📱 Screenshots

### Login Flow
- Secure OTP-based authentication
- Role-based access control
- Seamless user experience

### Dashboards
- Farmer Dashboard with farm analytics
- Customer Dashboard with order tracking
- Investor Dashboard with portfolio management
- Buyer Dashboard with contract management

## 🔒 Security Features

- OTP-based authentication
- Secure payment processing
- Data encryption
- Role-based access control

## 🛣️ Roadmap

- [ ] Mobile application development
- [ ] Integration with weather APIs
- [ ] AI-powered crop recommendations
- [ ] Blockchain integration for supply chain
- [ ] Multi-language support

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- UI/UX Design
- Frontend Development
- Project Management
- Quality Assurance

## 📞 Contact

For any queries, please raise an issue or contact the maintainers:
- GitHub: [@Mufee150](https://github.com/Mufee150)
