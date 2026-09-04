// import React from 'react'

// export default function Login() {
//   return (
//     <div className='login-container bg-warning vh-100'>
//       <div className="row">
//         <div className="Users col-md-4  ">

//           <div className="text-center">
//             <h4>User Management System</h4>
//             <h6>Sign In</h6>
//             <span>Enter your credentials to access your account</span>
//           </div>

//           <form>
//             <div className="mb-3">
//               <label >Email </label>
//               <input type="email" ></input>
//             </div>
//             <div className="mb-3">
//               <label>Password</label>
//               <input type="password" ></input>
//             </div>
//             <button className='btn btn-warning justify-content-center aline-item-center' type='submit'>SIGN IN</button>

//           </form>
//         </div>
//       </div>

//     </div>
//   )
// }

import axios from 'axios';
import  { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from "../../context/AuthContext";
export default function Login() {
  let{saveUSerData}=useContext(AuthContext)

  let{ register, handleSubmit, formState: { errors }, } = useForm();
  let navigate=useNavigate();


  let onSubmit = async(data) => {
    try {

      let response = await axios.post( 'https://dummyjson.com/auth/login', data)
      localStorage.setItem("usertoken",response.data.accessToken);
      saveUSerData();
      navigate("/dashboard");
      toast.success("welcom login success")
    } catch (error) {
      console.log(error)

    }

  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-warning">
      <div className="text-center bg-white rounded-5  p-5">

        <h4>User Management System</h4>
        <h6>Sign In</h6>
        <span>Enter your credentials to access your account</span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label>Email</label>
            <input type="emaill" {...register("username", { required: "email is required" })} placeholder='Enter your email' className="form-control" />
          </div>
          {errors?.username && <span className='text-danger'>{errors.username.message}</span>}

          <div className="mb-3">
            <label>Password</label>
            <input type="password" {...register("password", { required: "password is required" })} placeholder='Enter your password' className="form-control" />

          </div>
          {errors?.password && <span className='text-danger'>{errors.password.message}</span>}

          <button
            className="btn btn-warning w-100"
            type="submit"
          >
            SIGN IN
          </button>
        </form>

      </div>
    </div>
  )
}