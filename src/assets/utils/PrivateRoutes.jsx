import React from "react";
import { Outlet, Navigate } from "react-router-dom";
function PrivateRoutes() {
  let Auth = localStorage.getItem("loggedIn");
  return Auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
