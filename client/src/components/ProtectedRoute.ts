import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../apicalls/users";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  const getCurrentUser = async () => {
    try {
      const response = await GetCurrentUser(); // Ensure GetCurrentUser is a function returning a Promise
      if (response.success) {
        return true; // User is authenticated
      } else {
        navigate("/login"); // Redirect to login if not authenticated
        return false;
      }
    } catch (error) {
      navigate("/login"); // Redirect to login on error
      return false;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getCurrentUser();
    } else {
      navigate("/login"); // Redirect if no token found
    }
  }, [navigate]);

  //   return <div>{children}</div>;
};

export default ProtectedRoute;
