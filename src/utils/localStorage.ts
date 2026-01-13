import type { Employee } from '../types';

const STORAGE_KEY = 'employees_data';
const AUTH_KEY = 'auth_user';

// Initialize with mock data if localStorage is empty
const mockEmployees: Employee[] = [
  {
    id: '1',
    fullName: 'John Doe',
    gender: 'Male',
    dateOfBirth: '1990-05-15',
    profileImage: 'https://i.pravatar.cc/150?img=12',
    state: 'California',
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    fullName: 'Jane Smith',
    gender: 'Female',
    dateOfBirth: '1988-08-22',
    profileImage: 'https://i.pravatar.cc/150?img=5',
    state: 'New York',
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    fullName: 'Michael Johnson',
    gender: 'Male',
    dateOfBirth: '1992-03-10',
    profileImage: 'https://i.pravatar.cc/150?img=33',
    state: 'Texas',
    isActive: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    fullName: 'Sarah Williams',
    gender: 'Female',
    dateOfBirth: '1995-11-30',
    profileImage: 'https://i.pravatar.cc/150?img=9',
    state: 'Florida',
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '5',
    fullName: 'David Brown',
    gender: 'Male',
    dateOfBirth: '1987-07-18',
    profileImage: 'https://i.pravatar.cc/150?img=51',
    state: 'Illinois',
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '6',
    fullName: 'Emily Davis',
    gender: 'Female',
    dateOfBirth: '1993-09-25',
    profileImage: 'https://i.pravatar.cc/150?img=20',
    state: 'Washington',
    isActive: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '7',
    fullName: 'Alex Martinez',
    gender: 'Other',
    dateOfBirth: '1991-12-05',
    profileImage: 'https://i.pravatar.cc/150?img=68',
    state: 'Colorado',
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const localStorageService = {
  // Employee operations
  getEmployees: (): Employee[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      // Initialize with mock data
      localStorageService.setEmployees(mockEmployees);
      return mockEmployees;
    }
    return JSON.parse(data);
  },

  setEmployees: (employees: Employee[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
  },

  addEmployee: (employee: Omit<Employee, 'id' | 'createdAt' | 'updatedAt'>): Employee => {
    const employees = localStorageService.getEmployees();
    const newEmployee: Employee = {
      ...employee,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    employees.push(newEmployee);
    localStorageService.setEmployees(employees);
    return newEmployee;
  },

  updateEmployee: (id: string, updates: Partial<Employee>): Employee | null => {
    const employees = localStorageService.getEmployees();
    const index = employees.findIndex((emp) => emp.id === id);
    if (index === -1) return null;

    employees[index] = {
      ...employees[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    localStorageService.setEmployees(employees);
    return employees[index];
  },

  deleteEmployee: (id: string): boolean => {
    const employees = localStorageService.getEmployees();
    const filtered = employees.filter((emp) => emp.id !== id);
    if (filtered.length === employees.length) return false;
    localStorageService.setEmployees(filtered);
    return true;
  },

  getEmployeeById: (id: string): Employee | null => {
    const employees = localStorageService.getEmployees();
    return employees.find((emp) => emp.id === id) || null;
  },

  // Auth operations
  login: (username: string, password: string): boolean => {
    // Mock authentication - accept any non-empty credentials
    // In real app, validate against backend
    if (username && password) {
      const user = { username, name: username };
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      return true;
    }
    return false;
  },

  logout: (): void => {
    localStorage.removeItem(AUTH_KEY);
  },

  getAuthUser: (): { username: string; name: string } | null => {
    const data = localStorage.getItem(AUTH_KEY);
    return data ? JSON.parse(data) : null;
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(AUTH_KEY);
  },
};
