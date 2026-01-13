import React, { useState, useEffect } from 'react';
import { Form, Input, Select, DatePicker, Switch, Button, Upload, Modal, Typography } from 'antd';
import { UploadOutlined, CameraOutlined } from '@ant-design/icons';
import type { RcFile } from 'antd/es/upload/interface';
import type { Employee } from '../types';
import { US_STATES, GENDER_OPTIONS } from '../utils/constants';
import dayjs from 'dayjs';

const { Text } = Typography;

interface EmployeeFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
  employee?: Employee | null;
  loading?: boolean;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({
  visible,
  onClose,
  onSubmit,
  employee,
  loading = false,
}) => {
  const [form] = Form.useForm();
  const [imagePreview, setImagePreview] = useState<string>('');

  useEffect(() => {
    if (employee) {
      form.setFieldsValue({
        fullName: employee.fullName,
        gender: employee.gender,
        dateOfBirth: dayjs(employee.dateOfBirth),
        state: employee.state,
        isActive: employee.isActive,
      });
      setImagePreview(employee.profileImage);
    } else {
      form.resetFields();
      setImagePreview('');
    }
  }, [employee, form]);

  const handleImageChange = (file: RcFile) => {
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target?.result as string);
    reader.readAsDataURL(file);
    return false; // Prevent auto upload
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const formData = {
        ...values,
        dateOfBirth: values.dateOfBirth.format('YYYY-MM-DD'),
        profileImage:
          imagePreview || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      };
      onSubmit(formData);
      form.resetFields();
      setImagePreview('');
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setImagePreview('');
    onClose();
  };

  return (
    <Modal
      title={employee ? 'Edit Employee' : 'Add New Employee'}
      open={visible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
          {employee ? 'Update' : 'Add'} Employee
        </Button>,
      ]}
      width={600}
      destroyOnClose
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
            { required: true, message: 'Please enter full name' },
            { min: 2, message: 'Name must be at least 2 characters' },
            { max: 50, message: 'Name must not exceed 50 characters' },
          ]}
        >
          <Input placeholder="Enter full name" />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: 'Please select gender' }]}
        >
          <Select placeholder="Select gender">
            {GENDER_OPTIONS.map((gender) => (
              <Select.Option key={gender} value={gender}>
                {gender}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="dateOfBirth"
          label="Date of Birth"
          rules={[
            { required: true, message: 'Please select date of birth' },
            {
              validator: (_, value) => {
                if (!value) return Promise.resolve();
                const age = dayjs().diff(value, 'year');
                if (age < 18) return Promise.reject('Employee must be at least 18 years old');
                if (age > 100) return Promise.reject('Please enter a valid date of birth');
                return Promise.resolve();
              },
            },
          ]}
        >
          <DatePicker
            placeholder="Select date of birth"
            format="YYYY-MM-DD"
            style={{ width: '100%' }}
            disabledDate={(current) => current && current > dayjs().endOf('day')}
          />
        </Form.Item>

        <Form.Item
          name="state"
          label="State"
          rules={[{ required: true, message: 'Please select state' }]}
        >
          <Select
            placeholder="Select state"
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.children as unknown as string)
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          >
            {US_STATES.map((state) => (
              <Select.Option key={state} value={state}>
                {state}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Profile Image">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Upload beforeUpload={handleImageChange} showUploadList={false} accept="image/*">
              <Button icon={<UploadOutlined />}>Choose Image</Button>
            </Upload>
            {imagePreview && (
              <div style={{ position: 'relative' }}>
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #f0f0f0',
                  }}
                />
                <CameraOutlined
                  style={{
                    position: 'absolute',
                    bottom: 4,
                    right: 4,
                    fontSize: 18,
                    color: '#fa8c16', 
                  }}
                />
              </div>
            )}
          </div>
          <Text type="secondary" style={{ fontSize: 12 }}>
            Upload a profile image or leave empty for default avatar
          </Text>
        </Form.Item>

        <Form.Item name="isActive" label="Status" valuePropName="checked" initialValue={true}>
          <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EmployeeForm;
