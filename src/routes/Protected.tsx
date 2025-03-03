import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getToken } from "../services/AuthServices";

const Protected: React.FC = () => {
  const location = useLocation();
  
  return getToken() ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ prevUrl: location.pathname }} />
  );
};

export default Protected;

