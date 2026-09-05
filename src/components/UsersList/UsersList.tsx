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

  // Close Modal
  const handleClose = () => {
    setShow(false);
  };

  // Open Modal + save User ID
  const handleShow = (id: number) => {
    setUserId(id);
    setShow(true);
  };

  // Delete User
  const deleteUsers = async (id: number | null) => {
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
  let navigateUpdatadata = (id: number) => {
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

                  <button
