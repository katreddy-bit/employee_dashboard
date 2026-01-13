
# Employee Management Dashboard

A modern, full-featured **Employee Management Dashboard** built using **React.js, TypeScript, and Ant Design**.  
This application allows users to manage employee records with authentication, CRUD operations, filtering, and printing support.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Ant Design](https://img.shields.io/badge/Ant%20Design-Latest-1890ff)

---

## 🌟 Features

### 🔐 Authentication
- Mock login system
- Protected routes using React Router
- Session persistence via `localStorage`
- Automatic redirect for unauthenticated users

### 👥 Employee Management
- Create, Read, Update, Delete (CRUD) employees
- Employee details:
  - Employee ID (auto-generated)
  - Profile image upload with preview
  - Full name
  - Gender
  - Date of birth (18+ validation)
  - State
  - Active / Inactive status

### 📊 Dashboard
- Summary cards:
  - Total employees
  - Active employees
  - Inactive employees
- Responsive and clean UI
- Empty and loading states

### 🔍 Search & Filters
- Real-time search by name
- Filter by:
  - Gender
  - Status
- Combine multiple filters
- Clear filters with one click

### 🧾 Printing
- Print employee list
- Respects current filters
- Clean, print-friendly layout
- Displays total count and print date

### 💾 Data Persistence
- Uses `localStorage`
- Sample mock data included
- No backend required

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0**
- **TypeScript 5.9.3**
- **Ant Design**
- **@ant-design/icons**

### Routing & State
- React Router DOM
- React Context API

### Utilities
- Day.js (date handling)
- React-to-Print

### Tooling
- Vite
- ESLint

---

## 📁 Project Structure

```

employee_dashboard/
├── src/
│   ├── components/
│   │   ├── DashboardSummary.tsx
│   │   ├── EmployeeForm.tsx
│   │   ├── EmployeeTable.tsx
│   │   ├── ProtectedRoute.tsx
│   │   └── SearchFilter.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   └── Login.tsx
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts

````

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16
- npm >= 8

### Installation

```bash
cd employee_dashboard
npm install
npm run dev
````

Open in browser:
`http://localhost:5173`

---

## 🔐 Demo Login

Any non-empty credentials will work.

Example:

* **Username:** admin
* **Password:** admin123

---

## 📱 How to Use

1. Login to access the dashboard
2. View employee summary cards
3. Add new employees using the form
4. Edit or delete employees from the table
5. Toggle active/inactive status
6. Search and filter employees
7. Print employee list

---

## 🎨 Design Decisions

* **Ant Design** for enterprise-grade UI
* **FC8000 (Orange) Theme** for branding
* **Context API** for simple global state
* **LocalStorage** for persistence without backend

---

## 🚧 Known Limitations

* Mock authentication (no real backend)
* LocalStorage only (no database)
* Images stored as base64
* Print styling may vary by browser

---

## 🔮 Future Enhancements

* Role-based access control
* Export to Excel / CSV
* Analytics & charts
* Department management
* Dark mode
* Internationalization (i18n)

---

## 📄 License

This project is created for **educational and assignment purposes**.

---

## 👨‍💻 Developer

Built with ❤️ using React, TypeScript, and Ant Design.





## ⚙️ Installation & Running Guide

### 📌 Prerequisites

Make sure the following tools are installed on your system:

* **Node.js** ≥ 16.x
* **npm** ≥ 8.x (comes with Node.js)

Check versions:

```bash
node -v
npm -v
```

---

## 📥 Installation Steps

### 1️⃣ Clone or Extract the Project

If using Git:

```bash
git clone <repository-url>
cd employee_dashboard
```

Or extract the ZIP file and navigate to the project folder:

```bash
cd employee_dashboard
```

---

### 2️⃣ Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:

* React
* TypeScript
* Ant Design
* React Router
* Day.js
* React-to-Print
* Other required dependencies

---

## ▶️ Running the Application (Development Mode)

Start the development server:

```bash
npm run dev
```

After successful startup, you will see output similar to:

```
Local: http://localhost:5173/
```

Open your browser and navigate to:

👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🔐 Login Instructions

This project uses **mock authentication**.

You can log in using **any non-empty credentials**.

Example:

* **Username:** admin
* **Password:** admin123

---

## 🏗️ Building for Production

To generate an optimized production build:

```bash
npm run build
```

The production-ready files will be created in the **`dist/`** folder.

---

## 🔍 Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

This simulates how the app will run in production.

---

## 🧪 Troubleshooting

### Common Issues & Fixes

**Port already in use**

```bash
npm run dev -- --port=5174
```

**Dependency issues**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Node version mismatch**

* Ensure Node.js ≥ 16

---

## 🧾 Notes

* No backend setup is required
* All data is stored in `localStorage`
* Application works fully offline after loading
* Best viewed in modern browsers (Chrome, Edge, Firefox)

---




