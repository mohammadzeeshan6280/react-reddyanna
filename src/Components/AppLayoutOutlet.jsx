import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";
const AppLayoutOutlet = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const openSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <>
      <Header openSidebar={openSidebar} />
      <SideBar sidebarVisible={sidebarVisible} />
      <Outlet />
    </>
  );
};
export default AppLayoutOutlet;
