# Employee Management Dashboard

A modern, full-featured Employee Management Dashboard built with React.js, TypeScript, Ant Design, and Tailwind CSS. This application provides a complete solution for managing employee records with authentication, CRUD operations, advanced filtering, and printing capabilities.

![Employee Management Dashboard](https://img.shields.io/badge/React-19.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue) ![Ant Design](https://img.shields.io/badge/Ant%20Design-Latest-1890ff) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Latest-38bdf8)

## 🌟 Features

### Authentication
- **Secure Login System**: Mock authentication with username/password validation
- **Protected Routes**: Dashboard access restricted to authenticated users only
- **Session Management**: Persistent login using localStorage
- **Auto-redirect**: Unauthorized access redirects to login page

### Employee Management
- **CRUD Operations**:
  - ✅ Create new employee records
  - ✅ Read/View employee details
  - ✅ Update existing employee information
  - ✅ Delete employees (with confirmation)

- **Employee Information**:
  - Employee ID (auto-generated)
  - Profile Image (with upload and preview)
  - Full Name
  - Gender (Male/Female/Other)
  - Date of Birth (with age validation)
  - State (US states dropdown)
  - Active/Inactive status toggle

### Dashboard Features
- **Summary Cards**: Display total, active, and inactive employee counts
- **Interactive Table**: Sortable columns with inline status toggle
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Empty States**: Helpful messages when no data is available
- **Loading States**: Smooth loading animations for better UX

### Search & Filter
- **Real-time Search**: Search employees by name instantly
- **Multi-criteria Filtering**:
  - Filter by Gender (Male/Female/Other)
  - Filter by Status (Active/Inactive)
- **Combined Filtering**: All filters work together for precise results
- **Clear Filters**: One-click button to reset all filters

### Form Validation
- **Required Fields**: All essential fields must be filled
- **Name Validation**: Minimum 2 characters, maximum 50 characters
- **Age Validation**: Employees must be at least 18 years old
- **Date Validation**: Cannot select future dates
- **Image Upload**: Profile image with preview before saving
- **State Selection**: Searchable dropdown with all US states

### Print Functionality
- **Print Employee List**: Generate printable reports
- **Professional Format**: Clean, print-optimized layout
- **Report Metadata**: Includes generation date and total count
- **Filtered Results**: Prints currently filtered/searched results

### Data Persistence
- **LocalStorage**: All data persists across browser sessions
- **Mock Data**: Comes with 7 sample employees for testing
- **Data Integrity**: Automatic timestamps for created and updated records

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0**: Latest React with improved performance
- **TypeScript 5.9.3**: Type-safe development
- **Vite 7.2.4**: Lightning-fast build tool and dev server

### UI Libraries
- **Ant Design**: Professional enterprise-grade UI components
- **Tailwind CSS**: Utility-first CSS framework for custom styling
- **@ant-design/icons**: Comprehensive icon library

### Routing & State
- **React Router DOM**: Client-side routing with protected routes
- **Context API**: Global authentication state management

### Utilities
- **Day.js**: Modern date manipulation library
- **React-to-Print**: Print functionality for employee reports

### Development Tools
- **ESLint**: Code linting and quality checks
- **PostCSS**: CSS processing with Tailwind
- **Autoprefixer**: Automatic vendor prefixing

## 📁 Project Structure

```
assignment/
├── public/                  # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── DashboardHeader.tsx      # Header with user menu
│   │   ├── DashboardSummary.tsx     # Summary statistics cards
│   │   ├── EmployeeForm.tsx         # Add/Edit employee form
│   │   ├── EmployeeTable.tsx        # Employee data table
│   │   ├── ProtectedRoute.tsx       # Route protection HOC
│   │   └── SearchFilter.tsx         # Search and filter controls
│   ├── context/            # React Context providers
│   │   └── AuthContext.tsx          # Authentication context
│   ├── pages/              # Page components
│   │   ├── Dashboard.tsx            # Main dashboard page
│   │   └── Login.tsx                # Login page
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts                 # All type interfaces
│   ├── utils/              # Utility functions
│   │   ├── constants.ts             # App constants
│   │   └── localStorage.ts          # LocalStorage service
│   ├── App.css             # Global styles
│   ├── App.tsx             # Main app component with routing
│   ├── index.css           # Tailwind imports and custom CSS
│   └── main.tsx            # App entry point
├── .eslintrc.js            # ESLint configuration
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 16.x or higher
- **npm**: Version 8.x or higher (comes with Node.js)

### Installation

1. **Clone or extract the repository**
```bash
cd assignment
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173` (or the port shown in terminal)

### Building for Production

```bash
npm run build
```

The optimized production build will be created in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🔐 Login Credentials

For demo purposes, the application accepts any non-empty username and password combination. For quick testing:

- **Username**: `admin`
- **Password**: `admin123`

Or use any other credentials you prefer.

## 📱 Using the Application

### 1. Login
- Enter any username and password
- Click "Sign In"
- You'll be redirected to the dashboard

### 2. View Dashboard
- See summary statistics at the top
- Browse the employee list in the table
- Use pagination controls at the bottom

### 3. Add Employee
- Click "Add Employee" button
- Fill in all required fields
- Upload a profile image (optional)
- Click "Add Employee" to save

### 4. Edit Employee
- Click the blue edit icon in the Actions column
- Modify the desired fields
- Click "Update Employee" to save changes

### 5. Delete Employee
- Click the red delete icon
- Confirm the deletion in the popup
- Employee will be removed from the list

### 6. Toggle Status
- Use the Active/Inactive switch in the table
- Status changes are saved immediately

### 7. Search & Filter
- Type in the search box to find employees by name
- Select gender from the gender dropdown
- Select status from the status dropdown
- Click "Clear Filters" to reset

### 8. Print Report
- Click "Print List" button
- A print dialog will open
- The current filtered results will be printed

## 🎨 Design Decisions

### Why Ant Design + Tailwind CSS?
- **Ant Design**: Provides robust, enterprise-grade components with consistent design
- **Tailwind CSS**: Allows custom styling and rapid UI development
- **Combination**: Best of both worlds - professional components with custom flexibility

### Why LocalStorage?
- **Simplicity**: No backend required for demonstration
- **Persistence**: Data survives browser refresh
- **Instant**: No network latency
- **Realistic**: Can be easily replaced with API calls in production

### Why Context API?
- **Built-in**: No additional dependencies
- **Sufficient**: Perfect for simple authentication state
- **Type-safe**: Works seamlessly with TypeScript

### Component Structure
- **Separation of Concerns**: Each component has a single responsibility
- **Reusability**: Components can be easily reused or extended
- **Type Safety**: All components are fully typed with TypeScript

### Form Validation
- **User-friendly**: Clear error messages
- **Real-time**: Validation happens as user types
- **Business Logic**: Age restriction (18+), name length limits

## 🐛 Known Limitations

1. **Mock Authentication**: In production, implement proper JWT-based authentication
2. **LocalStorage**: Replace with REST API or GraphQL in production
3. **Image Upload**: Currently stores base64 in localStorage; use cloud storage in production
4. **No Backend**: All data is client-side; implement server-side persistence for production
5. **Print Styling**: May vary slightly across browsers

## 🔮 Future Enhancements

- [ ] Role-based access control (Admin, Manager, Viewer)
- [ ] Export to Excel/CSV
- [ ] Advanced analytics and charts
- [ ] Employee performance tracking
- [ ] Department management
- [ ] Email notifications
- [ ] Activity logs and audit trail
- [ ] Bulk import/export functionality
- [ ] Dark mode support
- [ ] Multi-language support (i18n)

## 📄 License

This project is created as an assignment and is free to use for educational purposes.

## 👨‍💻 Developer

Created with ❤️ as part of a React.js assignment

## 🙏 Acknowledgments

- React team for the amazing framework
- Ant Design team for the beautiful components
- Tailwind CSS team for the utility-first approach
- All open-source contributors

---

**Note**: This is a demonstration project built for an assignment. For production use, implement proper security, backend API, and follow industry best practices.
