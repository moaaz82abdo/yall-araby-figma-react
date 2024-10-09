import React from 'react'
import './footer.css'
import '@fortawesome/fontawesome-svg-core'


export default function Footer() {
  return (
    <>
    <div className="footer d-flex justify-content-between">
      <h5 className=' w-50 align-content-center'>© 2023 yall araby copy rights </h5>
      <div className='d-inline-block justify-content-around m-3'>
       <a href=""><i   className='fa-brands me-3  fa-3x text-white fa-facebook'></i></a>
       <a href=""><i   class='fa-brands me-3  fa-3x text-white fa-instagram'></i></a>
       <a href=""><i   className='fa-beans fa-youtube'></i></a>
       <a href=""><i   class='fa-brands me-3  fa-3x text-white fa-twitter'></i></a>
        </div>

    </div>
    </>
  )
}
