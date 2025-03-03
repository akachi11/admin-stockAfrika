import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import defaultdp from "../../assets/defaultdp.jpg";
import { getuser } from "../../services/AuthServices";
import React from "react";

interface SidebarLink {
  id: number;
  name: string;
  icon: JSX.Element;
  link: string;
}

const SideBar: React.FC = () => {
  const user = getuser();
  console.log(user)

  const sidebarLink: SidebarLink[] = [
    {
      id: 0,
      name: "Dashboard",
      icon: <RxDashboard size={20} />,
      link: "/dashboard",
    }
  ];

  return (
    <div className="overflow-y-hidden hidden w-[244px] bg-accent font-inter text-white lg:flex flex-col relative pb-[80px]">
      <div className="h-full">
        <div className="h-full">
          <div className="grid justify-center pt-[45px] w-full">
            <div className="w-full flex flex-col">
              <Link to="/">
                <div className="w-[173px] h-[26px] overflow-hidden mb-[71px]">
                  <img className="w-full h-full" src={logo} alt="Logo" />
                </div>
              </Link>
              <div className="grid place-items-center mb-[72px]">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-3">
                  <img
                    className="w-full h-full object-cover"
                    src={!user?.image ? defaultdp : user?.image}
                    alt="Contributor"
                  />
                </div>
                <div>
                  <p className="text-2xl font-medium leading-8">
                    {user?.user?.full_name}
                  </p>
                  <p className="text-[10px] leading-[12px] tracking-[90%] font-semibold text-center">
                    -ALPHA-
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full">
            <ul>
              {sidebarLink.map((link) => (
                <NavLink
                  className={({ isActive }) =>
                    `flex py-3 pl-10 items-center gap-2 w-full relative duration-200 ease-linear transition-all ${isActive
                      ? "bg-background text-accent"
                      : "hover:bg-background text-white hover:text-accent"
                    }`
                  }
                  key={link.id}
                  to={link.link}
                >
                  {link.icon}
                  <p className="text-lg font-medium">{link.name}</p>
                  <div className="absolute h-[20px] w-[3px] bg-accent left-3"></div>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pl-10 absolute bottom-10">
        <Link to="/help" className="text-[15px] font-medium">
          Help & Support
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
