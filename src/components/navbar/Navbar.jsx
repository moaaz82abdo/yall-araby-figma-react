import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import '../../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
  <div className="logo">
  <Link className="navbar-brand" href="#">

  <h4 className='text-red'>يلا عربي </h4>
  <img src="../../assets/logo.png" alt="logo" />
  </Link>

  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0  nav-dark ">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={'home'} color='black'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={'findateacher'}>Find a teacher</Link>
        </li>
       
       
        
        <li className="nav-item">
          <Link className="nav-link" to={'educationservice'}>Education service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'takeanexam'}>Take an exam</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'joinus'} >Join us</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  )
}
