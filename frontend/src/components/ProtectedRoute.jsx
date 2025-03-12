import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Ensure the correct import path

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, user, loading } = useContext(AuthContext);

  // Show a loading spinner or placeholder while checking authentication
  if (loading) {
    return <div>Loading...</div>; // Replace with a proper loading component
  }

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If the user's role is not allowed, redirect to the home page or a "not authorized" page
  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  // If the user is authenticated and has the required role, render the children
  return children;
};

export default ProtectedRoute;