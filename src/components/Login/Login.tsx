import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  let { userData } = useContext(AuthContext)

  let {
    register,
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
              {...register("fristName", { required: "frist Name is required" })}
            />
            {errors.fristName && <span className="text-danger">{errors.fristName.message as string}</span>}
          </div>
          <div className="col-md-6">
            <label>Last Name</label>
            <input
              className="form-control"
              value={userData?.lastName}

              {...register("lastName", { required: "Last Name is required" })}
            />
            {errors.lastName && <span className="text-danger">{errors.lastName.message as string}</span>}
          </div>
        </div>
        <div className="row p-4 m-4">
          <div className="col-md-6">
            <label>Email</label>
            <input
              className="form-control"
              value={userData?.email}
              {...register("Email", { required: "Email is required" })}
            />
            {errors.Email && <span className="text-danger">{errors.Email.message as string}</span>}
          </div>
          <div className="col-md-6">
            <label>Gender</label>
            <input
              className="form-control"
              value={userData?.gender}
              {...register("Age", { required: "Age is required" })}
            />
            {errors.Age && <span className="text-danger">{errors.Age.message as string}</span>}
          </div>
        </div>
        <div className="row p-4 m-4">
          <div className="col-md-6">
            <label>Phone Number</label>
            <input
              className="form-control"
              value={userData?.iat}
              {...register("PhoneNumber", { required: "Phone Number is required" })}
            />
            {errors.PhoneNumber && <span className="text-danger">{errors.PhoneNumber.message as string}</span>}
          </div>
          <div className="col-md-6">
            <label>Iat</label>
            <input
              className="form-control"
              value={userData?.iat}
              {...register("BirthDate", { required: "Birth Date is required" })}

            />
            {errors.BirthDate && <span className="text-danger">{errors.BirthDate.message as string}</span>}
          </div>
        </div>
      </form>
    </>)
}
