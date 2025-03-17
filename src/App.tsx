import "./App.css";
import Login from "./pages/access/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ForgotPassword from "./pages/access/ForgotPassword";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Index";
import NotFound from "./pages/notfound/NotFound";
import Uploads from "./pages/uploads/Index";
import UploadDashboard from "./pages/uploads/UploadDashboard";
import Public from "./routes/Public";
import Protected from "./routes/Protected";
import Profile from "./pages/profile/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route element={<Public />}>
          <Route index path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route element={<Layout />}>
          <Route element={<Protected />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/uploads" element={<Uploads />} />
            <Route path="/uploads/dashboard" element={<UploadDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
