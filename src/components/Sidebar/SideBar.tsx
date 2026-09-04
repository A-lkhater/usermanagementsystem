// import React, { useContext, useState } from 'react'
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { Link, useNavigate } from 'react-router-dom';
// import profile from "../../assets/img/profile.jpeg";
// import { AuthContext } from '../../context/AuthContext';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; export default function SideBar() {
//   let navigate = useNavigate()
//   let { userData } = useContext(AuthContext)
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   let toggleCollapsed = () => {
//     setIsCollapsed(!isCollapsed)
//   }
//   let logout = () => {
//     toast.success("Logged out successfully")
//     ToastContainer(navigate("/Login"))
//   }

//   return (
//     <div>
//       <Sidebar className='Sidebar' style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column"
//       }} collapsed={isCollapsed}>
//         <div>
//           {isCollapsed ? <i onClick={toggleCollapsed} className="fa-solid fa-circle-arrow-right fs-2 m-3"></i> :
//             <i onClick={toggleCollapsed} className="fa-solid fa-circle-arrow-left fs-2 m-3"></i>
//           }

//           {isCollapsed ? <img src={userData?.image} className="rounded-circle" alt="profile"
//             style={{
//               width: "80px",
//               height: "80px",
//               objectFit: "cover",
//               display: "block",
//               margin: "20px auto"
//             }} />
//             :
//             <img src={userData?.image} className="rounded-circle" alt="profile"
//               style={{
//                 width: "150px",
//                 height: "150px",
//                 objectFit: "cover",
//                 display: "block",
//                 margin: "20px auto"
//               }}
//             />
//           }

//           <h4 className='text-center'>{userData?.firstName} {userData?.lastName}</h4>
//         </div>
//         <div>
//           <Menu>
//             <MenuItem icon={<i className='fa fa-home' ></i>} component={<Link to="/dashboard/Home" />}> Home</MenuItem>
//             <MenuItem icon={<i className='fa fa-users' ></i>} component={<Link to="/dashboard/UsersList" />}> Users</MenuItem>
//             <MenuItem icon={<i className='fa fa-user' ></i>} component={<Link to="/dashboard/UsersData" />}> Users data</MenuItem>
//             <MenuItem icon={<i className='fa fa-person' ></i>} component={<Link to="/dashboard/Profile" />}> Profile</MenuItem>
//           </Menu>
//         </div>
//         <div className="d-flex mt-auto p-3">
//           <button onClick={logout} className="btn btn-dark w-100">
//             Logout <i className="fa-solid fa-right-from-bracket">
//             </i>
//           </button>
//         </div>
//       </Sidebar>
//     </div>
//   )
// }
import React, { useContext, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SideBar() {
  let navigate = useNavigate();

  let { userData } = useContext(AuthContext);

  const [isCollapsed, setIsCollapsed] = useState(false);
  let logout = () => {
    toast.success("Logged out successfully");

    setTimeout(() => {
      navigate("/Login");
    }, 1000);
  };

  let toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  

  return (
    <div>
      <Sidebar
        className="Sidebar"
        style={{ height: "100vh" }}
        collapsed={isCollapsed}
      >
        <div className="d-flex flex-column h-100">

          {/* Top Section */}
          <div>
            {/* Collapse Button */}
            {isCollapsed ? (
              <i
                onClick={toggleCollapsed}
                className="fa-solid fa-circle-arrow-right fs-2 m-3"
              ></i>
            ) : (
              <i
                onClick={toggleCollapsed}
                className="fa-solid fa-circle-arrow-left fs-2 m-3"
              ></i>
            )}

            {/* Profile Image */}
            <img
              src={userData?.image}
              className="rounded-circle"
              alt="profile"
              style={{
                width: isCollapsed ? "80px" : "150px",
                height: isCollapsed ? "80px" : "150px",
                objectFit: "cover",
                display: "block",
                margin: "20px auto",
              }}
            />

            {/* User Name */}
            {!isCollapsed && (
              <h4 className="text-center">
                {userData?.firstName} {userData?.lastName}
              </h4>
            )}

            {/* Menu */}
            <Menu>
              <MenuItem
                icon={<i className="fa fa-home"></i>}
                component={<Link to="/dashboard/Home" />}
              >
                Home
              </MenuItem>

              <MenuItem
                icon={<i className="fa fa-users"></i>}
                component={<Link to="/dashboard/UsersList" />}
              >
                Users
              </MenuItem>

              <MenuItem
                icon={<i className="fa fa-user"></i>}
                component={<Link to="/dashboard/UsersData" />}
              >
                Users data
              </MenuItem>

              <MenuItem
                icon={<i className="fa fa-person"></i>}
                component={<Link to="/dashboard/Profile" />}
              >
                Profile
              </MenuItem>
            </Menu>
          </div>

          {/* Logout - Bottom */}
          <div className="mt-auto p-3">
            <button
              onClick={logout}
              className="btn btn-dark w-100"
            >
              Logout{" "}
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>

        </div>
      </Sidebar>
    </div>
  );
}