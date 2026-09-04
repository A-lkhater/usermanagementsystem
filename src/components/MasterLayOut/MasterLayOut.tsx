import React from "react";
import Navebar from "../Navebar/Navebar";
import { Outlet } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";
export default function MasterLayOut() {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex" style={{ height: "100vh" }}>

        {/* Sidebar */}
        <div>
          <SideBar />
        </div>

        {/* Content */}
        <div
          className="flex-grow-1"
          style={{
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <Navebar />
          <Outlet />
        </div>

      </div>
    </div>
  );
}