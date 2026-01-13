import React from 'react';
import { Table, Avatar, Tag, Switch, Button, Space, Tooltip, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { Employee } from '../types';
import dayjs from 'dayjs';

interface EmployeeTableProps {
  employees: Employee[];
  loading: boolean;
  onEdit: (employee: Employee) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, isActive: boolean) => void;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  employees,
  loading,
  onEdit,
  onDelete,
  onToggleStatus,
}) => {
  const columns: ColumnsType<Employee> = [
    {
      title: 'Employee ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      render: (id: string) => <span style={{ fontFamily: 'monospace', color: '#555' }}>#{id}</span>,
    },
    {
      title: 'Profile',
      dataIndex: 'profileImage',
      key: 'profileImage',
      width: 80,
      render: (image: string) => (
        <Avatar
          size={40}
          src={image}
          icon={<UserOutlined />}
          style={{ backgroundColor: '#fc8000' }}
        />
      ),
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
            width: 200,

      key: 'fullName',
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
      render: (name: string) => <strong>{name}</strong>,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      width: 100,
      filters: [
        { text: 'Male', value: 'Male' },
        { text: 'Female', value: 'Female' },
        { text: 'Other', value: 'Other' },
      ],
      onFilter: (value, record) => record.gender === value,
      render: (gender: string) => {
        const color = gender === 'Male' ? 'blue' : gender === 'Female' ? 'magenta' : 'purple';
        return <Tag color={color}>{gender}</Tag>;
      },
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
      width: 130,
      sorter: (a, b) => dayjs(a.dateOfBirth).unix() - dayjs(b.dateOfBirth).unix(),
      render: (date: string) => dayjs(date).format('MMM DD, YYYY'),
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      width: 120,
      sorter: (a, b) => a.state.localeCompare(b.state),
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      width: 120,
      filters: [
        { text: 'Active', value: true },
        { text: 'Inactive', value: false },
      ],
      onFilter: (value, record) => record.isActive === value,
      render: (isActive: boolean, record: Employee) => (
        <Switch
          checked={isActive}
          onChange={(checked) => onToggleStatus(record.id, checked)}
          checkedChildren="Active"
          
          unCheckedChildren="Inactive"
          style={{ backgroundColor: isActive ? '#fc8000' : undefined }}
        />
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 140,
      fixed: 'right',
      render: (_, record: Employee) => (
        <Space size="small">
          <Tooltip title="Edit">
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => onEdit(record)}
              style={{ backgroundColor: '#fc8000', borderColor: '#fc8000' }}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Popconfirm
              title="Delete Employee"
              description="Are you sure you want to delete this employee?"
              onConfirm={() => onDelete(record.id)}
              okText="Yes"
              cancelText="No"
              okButtonProps={{ danger: true }}
            >
              <Button type="primary" danger icon={<DeleteOutlined />} size="small" />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
   <Table
  columns={columns}
  dataSource={employees}
  rowKey="id"
  loading={loading}
  bordered
  size="middle"
  scroll={{ x: 1200 }}
  pagination={{
    pageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ['5', '10', '20', '50'],
    showQuickJumper: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} employees`,
  }}
/>

  );
};

export default EmployeeTable;
