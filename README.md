# 💰 Expense Tracker

A modern personal finance management application built with Node.js and React that helps you track your income and expenses with beautiful visualizations and comprehensive analytics.


![Screenshot 2025-06-28 152619](https://github.com/user-attachments/assets/ef23336b-424d-4773-8c11-05e9076b732a)

## ✨ Features

###  **Smart Dashboard**
- **Real-time Financial Overview**: Get instant insights into your total balance, income, and expenses
- **Interactive Charts**: Beautiful donut charts and line graphs that make your financial data come alive
- **Recent Transactions**: Quick access to your latest financial activities
- **Monthly Trends**: Visual representation of your spending patterns over time

### 💸 **Expense Management**
- **Easy Expense Tracking**: Add expenses with just a few clicks using our intuitive interface
- **Category-based Organization**: Organize expenses by categories like Food, Rent, Orange (groceries), and more
- **Expense Timeline**: Track your spending trends with detailed time-based analytics
- **Quick Actions**: Fast expense entry with pre-defined categories and amounts

### 💰 **Income Tracking**
- **Multiple Income Sources**: Track salary, interest, and other income streams
- **Income Analytics**: Comprehensive 60-day income breakdowns with visual charts
- **Growth Tracking**: Monitor your income growth over time with detailed statistics

### 📈 **Advanced Analytics**
- **Expense Overview**: Detailed spending analysis with trend lines and insights
- **30-Day Expense Reports**: Quick monthly spending summaries
- **Year-over-Year Comparisons**: Track your financial progress across different time periods
- **Category Breakdowns**: Understand where your money goes with detailed category analysis

### 🔐 **User Experience**
- **Secure Authentication**: Safe login system with email and password protection
- **Responsive Design**: Works seamlessly across all devices and screen sizes
- **Clean UI**: Modern, purple-themed interface that's easy on the eyes
- **Data Export**: Download your financial data for external analysis

## 📱 Screenshots

### Login Interface
![Screenshot 2025-06-28 152528](https://github.com/user-attachments/assets/43fba38a-9f1d-4879-9344-0660e7f33dcc)
*Clean and secure authentication interface*

### Dashboard Overview
![Screenshot 2025-06-28 152619](https://github.com/user-attachments/assets/1afd3983-452c-483c-9b9c-0db617c955a5)
*Main dashboard showing financial overview with balance, income, and expense summaries*


### Expense Analytics
![Screenshot 2025-06-28 152738](https://github.com/user-attachments/assets/b5fe7d58-161c-4cb9-974f-8f7a8278b594)
*Detailed expense tracking with trend analysis and category breakdowns*


### Financial Overview
![Screenshot 2025-06-28 152640](https://github.com/user-attachments/assets/d91b7748-b71f-41ff-9ac2-40dccd3bb5aa)
*Comprehensive financial analytics with interactive charts and recent transactions*

## 🛠️ Tech Stack

**Backend:**
- Node.js with Express.js
- MongoDB database
- JWT (JSON Web Tokens) for authentication

**Frontend:**
- React.js
- Tailwind CSS for styling and responsive design
- Recharts for data visualization and charts

**Database:**
- MongoDB for storing user data, transactions, and financial records


## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iceyy64/expense-tracker-app.git
   cd expense-tracker-app
   ```
2. **Start the development server**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database
   JWT_SECRET=your_jwt_secret_here
   PORT=5001
   ```

   
4. **Run the frontend**
    ```bash
   cd frontend
   npm install
   npm run dev
    ```
5. **Open your browser**
   Navigate to localhost see the application in action.

---

   **Made with ❤️ by [iceyy64](https://github.com/iceyy64)**

*Start taking control of your finances today with this powerful, easy-to-use expense tracker!*
