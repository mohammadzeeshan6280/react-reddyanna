import { Navigate } from "react-router-dom";

// Protected route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!sessionStorage.getItem("token"); // Check if the user is logged in

  return isAuthenticated ? children : <Navigate to="/signin" />; // Redirect to SignIn if not logged in
};

export default ProtectedRoute;