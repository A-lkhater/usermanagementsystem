import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function UsersData() {
  const { id } = useParams();
  let getUser = async () => {
    let response = await axios.get(`https://dummyjson.com/users/${id}`);
    reset({
      fristName: response.data.firstName,
      lastName: response.data.lastName,
      Email: response.data.email,
      Age: response.data.age,
      PhoneNumber: response.data.phone,
      BirthDate: response.data.birthDate.split("-").map((x: string) => x.padStart(2, "0")).join("-"),
    });
  }


  useEffect(() => {
    if (id) {
      getUser();
    }
  }, [id]);

  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let submitData = async (data: any) => {
    try {
      let response = await axios.post("https://dummyjson.com/users/add", data);

      console.log(response);

      toast.success(id ? "User updata success" : "User Add success");

      navigate("/dashboard/UsersList");

    }
    catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <div className="title d-flex justify-content-between p-3">
        <h3>{id ? "Update User" : "Add User"}</h3>      </div>
      <hr />
      <form onSubmit={handleSubmit(submitData)} className="shadow-sm p-4 m-4">
        <div className="row p-4 m-4">
          <div className="col-md-6 ">
            <label>Frist Name</label>
            <input
              className="form-control"
              type="name"
              placeholder="Enter your Frist Name"
              {...register("fristName", { required: "frist Name is required" })}
            />
            {errors.fristName && <span className="text-danger">{errors.fristName.message as string}</span>}
          </div>
          <div className="col-md-6">
            <label>Last Name</label>
            <input
              className="form-control"
              type="emaill"
              placeholder="Enter your Last Name "
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
              type="name"
              placeholder="Enter your Email"
              {...register("Email", { required: "Email is required" })}
            />
            {errors.Email && <span className="text-danger">{errors.Email.message as string}</span>}
          </div>
          <div className="col-md-6">
            <label>Age</label>
            <input
              className="form-control"
              type="emaill"
              placeholder="Enter your Age "
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
              type="name"
              placeholder="Enter your Phone Number"
              {...register("PhoneNumber", { required: "Phone Number is required" })}
            />
            {errors.PhoneNumber && <span className="text-danger">{errors.PhoneNumber.message as string}</span>}
          </div>
          <div className="col-md-6">
            <label>Birth Date</label>
            <input
              className="form-control"
              type="date"
              placeholder="Enter your Birth Date "
              {...register("BirthDate", { required: "Birth Date is required" })}

            />
            {errors.BirthDate && <span className="text-danger">{errors.BirthDate.message as string}</span>}
          </div>
        </div>
        <div className="text-center m-5">
          <button className="btn btn-warning w-50 ">{id ? "Updata" : "Save"}</button>
        </div>
      </form>
    </>
  );
}
