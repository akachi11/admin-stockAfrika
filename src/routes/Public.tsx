import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../services/AuthServices";

const Public: React.FC = () => {
  return !getToken() ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default Public;
