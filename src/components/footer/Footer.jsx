import React from 'react';
import './footer.css';
// import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome';


export default function Footer() {
  return (
    <>

    <div>
      <div className="container-fluid footer p-2">
        <div className="row footerOne">
          <div className="col-md-8 d-flex justify-content-around">
          <h5 className='align-content-center'>© 2023 yalla araby copy rights </h5>
      <div className='footerTwo'>
      <a className='me-5' href="">About us</a>
      <a className='me-5' href="">Join us</a>
      <a className='me-5' href="">Contact</a>
      </div>
          </div>
          <div className="col-md-4 footerThree">
          <a href=""><i   className='fa-brands me-3   fa-facebook'></i></a>
          <a href=""><i   className='fa-brands me-3 fa-instagram'></i></a>
          <a href=""><i className="fa-brands me-3 fa-youtube"></i></a>
          <a href=""><i   className='fa-brands me-3 fa-twitter'></i></a>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="footer bg-secondary w-100 d-flex justify-content-between">
      <h5 className=' w-50 align-content-center'>© 2023 yalla araby copy rights </h5>
      <a href="">about us</a>
      <a href="">join us</a>
      <a href="">contact</a>
      <div className='d-inline-block justify-content-around m-3'>
       <a href=""><i   className='fa-brands me-3   fa-facebook'></i></a>
       <a href=""><i   class='fa-brands me-3 fa-instagram'></i></a>
       <a href=""><i   className='fa-beans fa-youtube'></i></a>
       <a href=""><i   class='fa-brands me-3 fa-twitter'></i></a>
        </div>

    </div> */}
    </>
  )
}
