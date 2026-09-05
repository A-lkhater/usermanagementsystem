import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
}

export default function UsersList() {

  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  const [Users, setdUsers] = useState<User[]>([]);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (id: number) => {
    setUserId(id);
    setShow(true);
  };

  const deleteUsers = async (id: number | null) => {
    try {
      let response = await axios.delete(`https://dummyjson.com/users/${id}`);
      console.log(response);
      setdUsers((oldUsers) => oldUsers.filter((user) => user.id !== id));
      setShow(false);
    } catch (error) {
      console.log(error);
      alert("Error while deleting user");
    }
  };

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
  let navigateUpdatadata = (id: number) => {
    navigate(`/dashboard/UsersData/${id}`)
  }

  return (
    <>
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

      <div className="title d-flex justify-content-between p-3">
        <h3>Users List</h3>
        <button onClick={navigateuserdata} className="btn btn-warning">Add new user</button>
      </div>

      <hr />

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
                  <button onClick={() => navigateUpdatadata(user.id)} className="border-0 bg-transparent p-0">
                    <i
                      className="text-warning fa fa-edit me-3"
                      aria-hidden="true"
                    ></i>
                  </button>
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
