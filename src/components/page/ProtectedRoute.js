import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, number }) => {
  if (!number) {
    return <Navigate to="/" />;
  }
  return children; // <SuccesSubmitedPage/> aris children
};

export default ProtectedRoute;
