import { APIProvider } from "@vis.gl/react-google-maps";
import React from "react";
interface IProps {
  children: React.ReactNode;
}

const CustomAPIProvider = ({ children }: IProps) => {
  const API_KEY = "YOUR_API_KEY_HERE...";
  return (
    <div className="App" style={{}}>
      <APIProvider apiKey={API_KEY}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          {children}
        </div>
      </APIProvider>
    </div>
  );
};

export default CustomAPIProvider;
