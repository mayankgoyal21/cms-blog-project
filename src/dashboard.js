// Dashboard.js
import React from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      alert("Logged out successfully!");
      navigate("/login");
    });
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h2>Welcome to your Dashboard!</h2>
      <p>This page is only accessible after logging in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
