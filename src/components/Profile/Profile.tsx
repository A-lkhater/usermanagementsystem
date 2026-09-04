import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  let { userData } = useContext(AuthContext)

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(userData);
  return (
    <>
    <div className="title d-flex justify-content-between p-3">
        <h3>Profile</h3>
      </div>
      <hr />
      <div className="text-center mb-4">
        <img
          src={userData?.image}
          alt="profile"
          className="rounded-circle"
          width="120"
        />
      </div>
      <form className="shadow-sm p-4 m-4">
        <div className="row p-4 m-4">
          <div className="col-md-6 ">
            <label>First Name</label>
            <input
              className="form-control"
              value={userData?.firstName}
              // type="name"
              // placeholder="Enter your Frist Name"
              {...register("fristName", { required: "frist Name is required" })}
            />
            {errors.fristName && <span className="text-danger">{errors.fristName.message}</span>}
          </div>
          <div className="col-md-6">
            <label>Last Name</label>
            <input
              className="form-control"
              // type="emaill"
              // placeholder="Enter your Last Name "
              value={userData?.lastName}

              {...register("lastName", { required: "Last Name is required" })}
            />
            {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
          </div>
        </div>
        <div className="row p-4 m-4">
          <div className="col-md-6">
            <label>Email</label>
            <input
              className="form-control"
              // type="name"
              // placeholder="Enter your Email"
              value={userData?.email}
              {...register("Email", { required: "Email is required" })}
            />
            {errors.Email && <span className="text-danger">{errors.Email.message}</span>}
          </div>
          <div className="col-md-6">
            <label>Gender</label>
            <input
              className="form-control"
              // type="age"
              // placeholder="Enter your Age "
              value={userData?.gender}
              {...register("Age", { required: "Age is required" })}
            />
            {errors.Age && <span className="text-danger">{errors.Age.message}</span>}
          </div>
        </div>
        <div className="row p-4 m-4">
          <div className="col-md-6">
            <label>Phone Number</label>
            <input
              className="form-control"
              // type="name"
              // placeholder="Enter your Phone Number"
              value={userData?.iat}
              {...register("PhoneNumber", { required: "Phone Number is required" })}
            />
            {errors.PhoneNumber && <span className="text-danger">{errors.PhoneNumber.message}</span>}
          </div>
          <div className="col-md-6">
            <label>Iat</label>
            <input
              className="form-control"
              // type="date"
              // placeholder="Enter your Birth Date "
              value={userData?.iat}
              {...register("BirthDate", { required: "Birth Date is required" })}

            />
            {errors.BirthDate && <span className="text-danger">{errors.BirthDate.message}</span>}
          </div>
        </div>
      </form>
    </>)
}
