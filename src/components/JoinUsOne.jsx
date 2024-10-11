import React from 'react'

export default function JoinUsOne() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row joinOne">
                <div className="Joinimg">
                    <div className="col-md-3 p-4 m-5 card">
                        <h4 className='m-4'>Teach online</h4>
                        <p className='mb-4'>Earn money on your schedule</p>
                        <input className='form-control mb-3' type="text" placeholder='username' />
                        <input className='form-control mb-3' type="passoward" placeholder='passoward' />

                        <button className='btn m-auto w-25 signBtn mb-3'>Sign in</button>
                        <div><button className='btn btnAccount mb-2 btn-light'><i class="fa-brands fa-google"></i> Continue with Google</button></div>
                        <div><button className='btn btnAccount mb-3 btn-light'><i class="fa-brands fa-facebook"></i> Continue with Facebook</button></div>
                    
                        <p>By signing up, you agree to<br></br> Preply’s <a href="">Terms of Service </a>and<br></br> <a href="">Privacy Policy</a></p>
                        
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}
