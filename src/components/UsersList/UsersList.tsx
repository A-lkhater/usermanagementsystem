// import axios from 'axios'
// import React, { useState, useEffect } from 'react'
// import type { Alert } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// export default function UsersList() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = (id) => setShow(true);

//   let deleteUsers = async (id) => {
//     try {
//       let response = await axios.delete(`https://dummyjson.com/users/${id}`)
//       alert(response)
//     } catch (error) {
//       alert("error")
//     }
//   }

//   const [Users, setdUsers] = useState([])
//   let getData = async () => {
//     try {
//       let response = await axios.get("https://dummyjson.com/users")
//       setdUsers(response.data.users)

//     } catch (error) {
//       console.log(errorr)

//     }
//   }
//   useEffect(() => {
//     getData();

//   }, []);

//   return (
//     <>
//       <>

//         <Modal show={show} onHide={handleClose}>
//           <Modal.Body>Are you sure you want to delete?</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               No
//             </Button>
//             <Button variant="warning" onClick={() => deleteUsers(id)}>
//               Yes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//       <div className="title d-flex justify-content-between p-3">
//         <h3>Users List</h3>
//         <button className='btn btn-warning'>Add new user</button>
//       </div>
//       <hr></hr>
//       <div className="table">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col"></th>
//               <th scope="col">Name</th>
//               <th scope="col">Email</th>
//               <th scope="col">Phone</th>
//               <th scope="col">BrithDate</th>
//             </tr>
//           </thead>

//           <tbody>
//             {Users.map((user) => (
//               <tr key={user.id}>
//                 <td>
//                   <img src={user.image} width="50" alt={user.firstName} />
//                 </td>
//                 <td>{user.firstName} {user.lastName}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.birthDate}</td>
//                 <td className=" icon d-flex justify-content-between p-3">
//                   <i className="text-warning fa fa-edit" aria-hidden="true"></i>
//                   <i onClick={() => handleShow(user.id)} className="text-warning fa fa-trash" aria-hidden="true"></i>
//                 </td>

//               </tr>
//             ))}
//           </tbody>

//         </table>
//       </div>

//     </>
//   )
// }

import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

export default function UsersList() {
  
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState(null);


  const [Users, setdUsers] = useState([]);

  // Close Modal
  const handleClose = () => {
    setShow(false);
  };

  // Open Modal + save User ID
  const handleShow = (id) => {
    setUserId(id);
    setShow(true);
  };

  // Delete User
  const deleteUsers = async (id) => {
    try {
      let response = await axios.delete(`https://dummyjson.com/users/${id}`);

      console.log(response);

      // Remove user from table
      setdUsers((oldUsers) => oldUsers.filter((user) => user.id !== id));

      // Close Modal
      setShow(false);
    } catch (error) {
      console.log(error);
      alert("Error while deleting user");
    }
  };

  // Get Users
  const getData = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/users");

      setdUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let navigateuserdata = () => {
    navigate("/dashboard/UsersData")
  }
  let navigateUpdatadata = (id:number) => {
    navigate(`/dashboard/UsersData/${id}`)
  }

  return (
    <>
      {/* Delete Modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to delete {userId}?</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>

          <Button variant="warning" onClick={() => deleteUsers(userId)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Page Header */}

      <div className="title d-flex justify-content-between p-3">
        <h3>Users List</h3>
        <button onClick={navigateuserdata} className="btn btn-warning">Add new user</button>
      </div>

      <hr />

      {/* Users Table */}

      <div className="table">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>BirthDate</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {Users.map((user) => (
              <tr key={user.id}>
                <td>
                  <img src={user.image} width="50" alt={user.firstName} />
                </td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.birthDate}</td>
                <td>
                  {/* Edit */}

                  <button onClick={()=>navigateUpdatadata(user.id)} className="border-0 bg-transparent p-0">
                    <i
                    className="text-warning fa fa-edit me-3"
                    aria-hidden="true"
                  >

                  </i>
                  </button>

                  {/* Delete */}

                  <i
                    onClick={() => handleShow(user.id)}
                    className="text-warning fa fa-trash"
                    aria-hidden="true"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
