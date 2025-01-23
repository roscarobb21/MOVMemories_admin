import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase"; // Import your Firebase auth instance
import CircularProgress from '@mui/material/CircularProgress';

function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="d-flex justify-content-center align-items-center" style={{height:'100vh', width:'100%', backgroundColor:'black'}}><CircularProgress /></div>; // Show a loading spinner or message
  if (!user) return <Navigate to="/signin" />; // Redirect if not authenticated

  return children; // Render the private component if authenticated
}

export default PrivateRoute;
