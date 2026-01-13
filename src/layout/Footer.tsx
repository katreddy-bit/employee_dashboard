import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter: React.FC = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
        background: '#fff',
        padding: '8px 50px', 
      }}
    >
      <Text type="secondary" style={{ color: '#fc8000', fontSize: 12 }}>
        © {new Date().getFullYear()} Employee Management Dashboard
      </Text>
    </Footer>
  );
};

export default AppFooter;
