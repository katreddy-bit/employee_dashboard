import React from 'react';
import { Input, Select, Button, Card, Space } from 'antd';
import { SearchOutlined, ClearOutlined } from '@ant-design/icons';
import type { EmployeeFilters } from '../types';
import { GENDER_OPTIONS } from '../utils/constants';

const { Option } = Select;

interface SearchFilterProps {
  filters: EmployeeFilters;
  onFilterChange: (filters: EmployeeFilters) => void;
  onClear: () => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ filters, onFilterChange, onClear }) => {
  const handleSearchChange = (value: string) => {
    onFilterChange({ ...filters, search: value });
  };

  const handleGenderChange = (value: string) => {
    onFilterChange({ ...filters, gender: value });
  };

  const handleStatusChange = (value: string) => {
    onFilterChange({ ...filters, status: value });
  };

  return (
    <Card size="small" bordered={false} style={{ marginBottom: 24, boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Space wrap size="middle" style={{ width: '100%' }}>
          <Input
            placeholder="Search by employee name..."
            prefix={<SearchOutlined />}
            value={filters.search}
            onChange={(e) => handleSearchChange(e.target.value)}
            allowClear
            size="middle"
            style={{ minWidth: 200, flex: 1 }}
          />

          <Select
            placeholder="Filter by Gender"
            value={filters.gender || undefined}
            onChange={handleGenderChange}
            allowClear
            size="middle"
            style={{ minWidth: 150 }}
          >
            {GENDER_OPTIONS.map((gender) => (
              <Option key={gender} value={gender}>
                {gender}
              </Option>
            ))}
          </Select>

          <Select
            placeholder="Filter by Status"
            value={filters.status || undefined}
            onChange={handleStatusChange}
            allowClear
            size="middle"
            style={{ minWidth: 150 }}
          >
            <Option value="active">Active</Option>
            <Option value="inactive">Inactive</Option>
          </Select>

          <Button
            icon={<ClearOutlined />}
            onClick={onClear}
            type="default"
            size="middle"
          >
            Clear
          </Button>
        </Space>
      </Space>
    </Card>
  );
};

export default SearchFilter;
