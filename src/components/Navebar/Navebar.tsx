import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Navebar() {
      let{userData}=useContext(AuthContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">UMS</a>

          <div className="d-flex">
            <h5>{userData?.firstName}</h5>
          </div>
        </div>
      </nav>
    </>
  )
}
