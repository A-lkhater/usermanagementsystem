import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Home() {
    let { userData } = useContext(AuthContext)
    console.log(userData?.image)
  
  return (
<>
<div className="title d-flex justify-content-between p-3">
        <h3>Home</h3>
      </div>
      <hr />
      <div className="massageWelcome text-center p-3 m-2">
        <h1>Hello {userData?.firstName}</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <img className='rounded-circle' src={userData?.image} alt="" />
      </div>
</>
  )
}
