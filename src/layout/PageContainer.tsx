import React from 'react';
import { Typography, Divider } from 'antd';

const { Title } = Typography;

interface PageContainerProps {
  title?: string;
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ title, children }) => {
  return (
    <div
      style={{
        padding: '16px 24px',
        minHeight: 'calc(100vh - 128px)',
        background: '#f5f5f5', 
      }}
    >
      {title && (
        <>
          <Title level={4} style={{ color: '#fc8000', marginBottom: 16 }}>
            {title}
          </Title>
          <Divider style={{ margin: '8px 0' }} />
        </>
      )}
      {children}
    </div>
  );
};

export default PageContainer;
