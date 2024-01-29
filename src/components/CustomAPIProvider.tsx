import { APIProvider } from "@vis.gl/react-google-maps";
import React from "react";
interface IProps {
  children: React.ReactNode;
}

const CustomAPIProvider = ({ children }: IProps) => {
  const API_KEY = "AIzaSyCOWv5Pnu9Z-1NJutKgJ_7tM_ZIjtj0a58";
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
