import React from "react";
import { ConfigProvider } from "antd";

interface AntdThemeProviderProps {
  children: React.ReactNode;
}

const AntdThemeProvider: React.FC<AntdThemeProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fc8000",
          colorPrimaryHover: "#ff9900",
          colorPrimaryActive: "#e67300",
          colorPrimaryBorder: "#fc8000",

          colorSuccess: "#52c41a",
          colorError: "#ff4d4f",
          colorWarning: "#faad14",

          fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
          fontSize: 13,
          fontSizeHeading1: 24,
          fontSizeHeading2: 20,
          fontSizeHeading3: 18,
          fontSizeHeading4: 16,
          fontSizeHeading5: 14,
          colorTextBase: "#333",
          colorTextSecondary: "#595959",

          borderRadius: 6,
          borderRadiusSM: 2,
          borderRadiusLG: 8,
          colorBorder: "#d9d9d9",

          controlHeight: 32,
          controlHeightSM: 24,
          controlHeightLG: 40,

          controlPaddingHorizontal: 8,
          controlPaddingHorizontalSM: 6,

          colorBgContainer: "#fff",
          colorBgLayout: "#f5f5f5",
          colorBgElevated: "#fafafa",
          colorBgMask: "rgba(0,0,0,0.45)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
          motionDurationFast: "0.2s",
          motionDurationMid: "0.3s",
          motionDurationSlow: "0.5s",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdThemeProvider;
