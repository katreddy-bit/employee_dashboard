import React, { useState } from "react";
import { Layout } from "antd";
import AppHeader from "./Header";
import AppFooter from "./Footer";

const { Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Layout>
        <AppHeader
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />

        <Content>{children}</Content>

        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
