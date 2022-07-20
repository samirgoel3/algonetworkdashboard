import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import Constants from '../../constants';
import Routesname from '../../routes/Routesname';
import './sidebar.css';
import MobileMenu from "./MobileMenu";

const routes = [
  {
    path: Routesname.DASHBOARD,
    name: "Dashboard",
    icon: <Constants.ICONS.DashboardIcon />,
  },
  {
    path: Routesname.USER,
    name: "Users",
    icon: <Constants.ICONS.PersonIcon />,
  },
  {
    path: Routesname.CREATE_ALGO_CATEGORIES,
    name: "Algo Categories",
    icon: <Constants.ICONS.GridViewIcon />,
    subRoutes: [
      {
        path: Routesname.CREATE_ALGO_CATEGORIES,
        name: "create",
        icon: "",
      },
      {
        path: Routesname.LIST_CATEGORIES,
        name: "list",
        icon: "",
      },
    ],
  },
  {
    path: Routesname.LIST_ALGORITHM,
    name: "Algorithm",
    icon: <Constants.ICONS.VerticalSplitIcon />,
    subRoutes: [
      {
        path: Routesname.CREATE_ALGORITHM,
        name: "create",
        icon: "",
      },
      {
        path: Routesname.LIST_ALGORITHM,
        name: "list",
        icon: "",
      },
    ],
  },
  {
    path: Routesname.NOTIFICATIONS,
    name: "Notifications",
    icon: <Constants.ICONS.NotificationsIcon />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Send Notification",
        icon: <Constants.ICONS.SendToMobileIcon />,
      },
      {
        path: "/settings/2fa",
        name: "Stats",
        icon: <Constants.ICONS.PieChartIcon />,
      }
    ],
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <Constants.ICONS.SettingsIcon />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Mobile",
        icon: <Constants.ICONS.InstallMobileIcon />,
      },
      {
        path: "/settings/2fa",
        name: "Panel",
        icon: <Constants.ICONS.AdminPanelSettingsIcon />,
      },
    ],
  },
];


const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "220px" : "45px",
            transition: { duration: 0.5,type: "spring",damping: 10,},
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  AlgoNetwork
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <Constants.ICONS.MenuIcon onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <Constants.ICONS.SearchIcon />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <div className="mobile-bar">
          <MobileMenu data={routes}/>          
        </div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
