import React, { useEffect, useRef, useState } from 'react';
import { Button, Empty, notification } from 'antd';
import { PlusOutlined, PrinterOutlined } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';

import AppLayout from '../layout/AppLayout';
import PageContainer from '../layout/PageContainer';

import DashboardSummary from '../components/DashboardSummary';
import SearchFilter from '../components/SearchFilter';
import EmployeeTable from '../components/EmployeeTable';
import EmployeeForm from '../components/EmployeeForm';

import type { Employee, EmployeeFilters } from '../types';
import { localStorageService } from '../utils/localStorage';

const Dashboard: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [formVisible, setFormVisible] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [filters, setFilters] = useState<EmployeeFilters>({
    search: '',
    gender: '',
    status: '',
  });

  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [employees, filters]);

  const notifySuccess = (msg: string) =>
    notification.success({
      message: msg,
      placement: 'topRight',
    });

  const notifyError = (msg: string) =>
    notification.error({
      message: msg,
      placement: 'topRight',
    });

  const loadEmployees = () => {
    setLoading(true);
    setTimeout(() => {
      setEmployees(localStorageService.getEmployees());
      setLoading(false);
    }, 400);
  };

  const applyFilters = () => {
    let data = [...employees];

    if (filters.search) {
      data = data.filter((e) =>
        e.fullName.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.gender) {
      data = data.filter((e) => e.gender === filters.gender);
    }

    if (filters.status) {
      data = data.filter(
        (e) => e.isActive === (filters.status === 'active')
      );
    }

    setFilteredEmployees(data);
  };

  const handleAddEmployee = (values: any) => {
    const newEmployee = localStorageService.addEmployee(values);
    setEmployees([...employees, newEmployee]);
    setFormVisible(false);
    notifySuccess('Employee added successfully');
  };

  const handleEditEmployee = (values: any) => {
    if (!editingEmployee) return;

    const updated = localStorageService.updateEmployee(
      editingEmployee.id,
      values
    );

    if (updated) {
      setEmployees((prev) =>
        prev.map((e) => (e.id === updated.id ? updated : e))
      );
      setEditingEmployee(null);
      setFormVisible(false);
      notifySuccess('Employee updated successfully');
    }
  };

  const handleDeleteEmployee = (id: string) => {
    const success = localStorageService.deleteEmployee(id);
    if (success) {
      setEmployees((prev) => prev.filter((e) => e.id !== id));
      notifySuccess('Employee deleted successfully');
    } else {
      notifyError('Failed to delete employee');
    }
  };

  const handleToggleStatus = (id: string, isActive: boolean) => {
    const updated = localStorageService.updateEmployee(id, { isActive });
    if (updated) {
      setEmployees((prev) =>
        prev.map((e) => (e.id === id ? updated : e))
      );
      notifySuccess(
        `Employee ${isActive ? 'activated' : 'deactivated'}`
      );
    }
  };

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Employee List',
  });

  return (
    <AppLayout>
      <PageContainer >
        <DashboardSummary employees={employees} />

        <div className="flex justify-between items-center mb-6">
          <h3 >
            Employee List
          </h3>
          <div className="flex gap-3">
            <Button
              icon={<PrinterOutlined />}
              onClick={handlePrint}
            >
              Print
            </Button>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="bg-primary-500"
              onClick={() => setFormVisible(true)}
            >
              Add Employee
            </Button>
          </div>
        </div>

        <SearchFilter
          filters={filters}
          onFilterChange={setFilters}
          onClear={() =>
            setFilters({ search: '', gender: '', status: '' })
          }
        />

        {filteredEmployees.length === 0 && !loading ? (
          <div className="bg-white rounded-lg p-12 shadow-sm">
            <Empty
              description={
                filters.search || filters.gender || filters.status
                  ? 'No employees match your filters'
                  : 'No employees yet'
              }
            />
          </div>
        ) : (
          <EmployeeTable
            employees={filteredEmployees}
            loading={loading}
            onEdit={(e) => {
              setEditingEmployee(e);
              setFormVisible(true);
            }}
            onDelete={handleDeleteEmployee}
            onToggleStatus={handleToggleStatus}
          />
        )}

        <EmployeeForm
          visible={formVisible}
          onClose={() => {
            setFormVisible(false);
            setEditingEmployee(null);
          }}
          onSubmit={
            editingEmployee ? handleEditEmployee : handleAddEmployee
          }
          employee={editingEmployee}
        />

        <div style={{ display: 'none' }}>
          <div ref={printRef} className="print-content p-8">
            <h1 className="text-2xl font-bold text-center mb-4">
              Employee List Report
            </h1>
            <p className="text-center mb-6">
              Total Employees: {filteredEmployees.length}
            </p>

            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  {['ID', 'Name', 'Gender', 'DOB', 'State', 'Status'].map(
                    (h) => (
                      <th key={h} className="border px-3 py-2 text-left">
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((e) => (
                  <tr key={e.id}>
                    <td className="border px-3 py-2">#{e.id}</td>
                    <td className="border px-3 py-2">{e.fullName}</td>
                    <td className="border px-3 py-2">{e.gender}</td>
                    <td className="border px-3 py-2">{e.dateOfBirth}</td>
                    <td className="border px-3 py-2">{e.state}</td>
                    <td className="border px-3 py-2">
                      {e.isActive ? 'Active' : 'Inactive'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </PageContainer>
    </AppLayout>
  );
};

export default Dashboard;
