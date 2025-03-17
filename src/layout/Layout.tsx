import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard/SideBar";

const Layout: React.FC = () => {
  return (
    <div className="font-open_sauce h-screen">
      <div className="flex flex-row h-screen"> {/* h-screen */}
        <SideBar />
        <div className="flex-1 bg-background overflow-hidden">
          <div className="overflow-y-scroll h-full pb-[40px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
