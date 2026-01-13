import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { TeamOutlined, UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons';
import type { Employee } from '../types';

interface DashboardSummaryProps {
  employees: Employee[];
}

const DashboardSummary: React.FC<DashboardSummaryProps> = ({ employees }) => {
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(emp => emp.isActive).length;
  const inactiveEmployees = totalEmployees - activeEmployees;

  const cardStyle = {
    borderRadius: 8,
    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    transition: 'all 0.2s ease-in-out',
    cursor: 'default',
  };

  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      <Col xs={24} sm={8} lg={8}>
        <Card style={cardStyle} bordered={false}>
          <Statistic
            title="Total Employees"
            value={totalEmployees}
            prefix={<TeamOutlined style={{ color: '#fc8000' }} />}
            valueStyle={{ color: '#fc8000', fontWeight: 600 }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={8} lg={8}>
        <Card style={cardStyle} bordered={false}>
          <Statistic
            title="Active Employees"
            value={activeEmployees}
            prefix={<UserAddOutlined style={{ color: '#52c41a' }} />}
            valueStyle={{ color: '#52c41a', fontWeight: 600 }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={8} lg={8}>
        <Card style={cardStyle} bordered={false}>
          <Statistic
            title="Inactive Employees"
            value={inactiveEmployees}
            prefix={<UserDeleteOutlined style={{ color: '#ff4d4f' }} />}
            valueStyle={{ color: '#ff4d4f', fontWeight: 600 }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardSummary;
