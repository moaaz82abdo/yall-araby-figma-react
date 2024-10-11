import React from 'react'
import '../App.css'
import '../styles/home.css'
import '../assets/Frame 42.png';
import '../assets/Frame41.png';
import '../assets/Frame 21.png';
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
// import '/assets/Ellipse51.jpg';

function Home() {
  return (
    <>
<div className='bgHome'>
  <HomeOne/>
  <HomeTwo/>
  {/* <div className="container ">
    <div className="row">
      <div className="col-md-6 p-3 cardte  d-flex">
        <div className="image pe-3">
          <img src="./assets/Ellipse 55.png" alt="" />
          <span className='rate'>
          <i className="fa-solid pe-2 fa-star"></i>
          4.9
          </span>

        
        </div>
        <div className="data">
          <h4>Ahmed Khalel</h4>
          <h5>Professional Teacher</h5>
          <h6>Category: <span>Arabic</span></h6>
          <p>I believe that I am a very friendly teacher with an amazing personality .  My ability to adjust and improvise in any situation is the reason why I have gained popularity among my students over the years . My motto is...</p>
          <div className='price d-flex justify-content-end '>
          <p className='m-2'>EGP 200/trial</p>
          <button className='btn btnData'>Book trial</button>
          </div>

        </div>

      </div>

      <div className="col-md-6  p-3 cardte  d-flex">
        <div className="image pe-3">
          <img src="/assets/Ellipse51.jpg" alt="" />
          <span className='rate'>
          <i className="fa-solid pe-2 fa-star"></i>
          4.9
          </span>

        
        </div>
        <div className="data">
          <h4>Ahmed Khalel</h4>
          <h5>Professional Teacher</h5>
          <h6>Category: <span>Arabic</span></h6>
          <p>I believe that I am a very friendly teacher with an amazing personality .  My ability to adjust and improvise in any situation is the reason why I have gained popularity among my students over the years . My motto is...</p>
          <div className='price d-flex justify-content-end '>
          <p className='m-2'>EGP 200/trial</p>
          <button className='btn btnData'>Book trial</button>
          </div>

        </div>

      </div>
  

      <div className="col-md-6 p-3 cardte  d-flex">
        <div className="image pe-3">
          <img src="/assets/Ellipse52.jpg" alt="" />
          <span className='rate'>
          <i className="fa-solid pe-2 fa-star"></i>
          4.9
          </span>

        
        </div>
        <div className="data">
          <h4>Ahmed Khalel</h4>
          <h5>Professional Teacher</h5>
          <h6>Category: <span>Arabic</span></h6>
          <p>I believe that I am a very friendly teacher with an amazing personality .  My ability to adjust and improvise in any situation is the reason why I have gained popularity among my students over the years . My motto is...</p>
          <div className='price d-flex justify-content-end '>
          <p className='m-2'>EGP 200/trial</p>
          <button className='btn btnData'>Book trial</button>
          </div>

        </div>

      </div>


      <div className="col-md-6 p-3 cardte  d-flex">
        <div className="image pe-3">
          <img src="/assets/Ellipse53.jpg" alt="" />
          <span className='rate'>
          <i className="fa-solid pe-2 fa-star"></i>
          4.9
          </span>

        
        </div>
        <div className="data">
          <h4>Ahmed Khalel</h4>
          <h5>Professional Teacher</h5>
          <h6>Category: <span>Arabic</span></h6>
          <p>I believe that I am a very friendly teacher with an amazing personality .  My ability to adjust and improvise in any situation is the reason why I have gained popularity among my students over the years . My motto is...</p>
          <div className='price d-flex justify-content-end '>
          <p className='m-2'>EGP 200/trial</p>
          <button className='btn btnData'>Book trial</button>
          </div>

        </div>

      </div>

    <div className="col-md-12">
      <div className="btnHomeOne">
        <button className='btn btnHone'> Find More</button>
      </div>
    </div>

    </div>
  </div> */}
</div>
    {/* <div className='home1 container'>
     <div className="portfolio">
     <div className="picture">
      <img src="./assets/Frame 21.png" alt="frame" />
      ⭐ 4.9

</div>
<div className="data">
  <h5>Ahmed Kalil</h5>
  <p>Profissional teacher</p>
  <p>Category: <strong>Arabic</strong></p>
  <p>I believe that iam a very friendly teacher with an amazing personality. My ability to adjust and improvise in any situation is the reason why i have gained popularity among my students over the years. My motto is : ...</p>
  <strong>EGP 200/trial</strong>
  <button className='btn btn-danger'>Book trial</button>
  
</div>
     </div>
     <div className="portfolio">
     <div className="picture">
      <img src="./assets/Frame 41.png" alt="frame" />
      ⭐ 4.9

</div>
<div className="data">
  <h5>Ahmed Kalil</h5>
  <p>Profissional teacher</p>
  <p>Category: <strong>Arabic</strong></p>
  <p>I believe that iam a very friendly teacher with an amazing personality. My ability to adjust and improvise in any situation is the reason why i have gained popularity among my students over the years. My motto is : ...</p>
  <strong>EGP 200/trial</strong>
  <button className='btn btn-danger'>Book trial</button>
  
</div>
     </div>
     <div className="portfolio">
     <div className="picture">
      <img src="./assets/Frame 41.png" alt="frame" />
      ⭐ 4.9

</div>
<div className="data">
  <h5>Ahmed Kalil</h5>
  <p>Profissional teacher</p>
  <p>Category: <strong>Arabic</strong></p>
  <p>I believe that iam a very friendly teacher with an amazing personality. My ability to adjust and improvise in any situation is the reason why i have gained popularity among my students over the years. My motto is : ...</p>
  <strong>EGP 200/trial</strong>
  <button className='btn btn-danger'>Book trial</button>
  
</div>
     </div>
     <div className="portfolio">
     <div className="picture">
      <img src="./assets/Frame 41.png" alt="frame" />
      ⭐ 4.9

</div>
<div className="data">
  <h5>Ahmed Kalil</h5>
  <p>Profissional teacher</p>
  <p>Category: <strong>Arabic</strong></p>
  <p>I believe that iam a very friendly teacher with an amazing personality. My ability to adjust and improvise in any situation is the reason why i have gained popularity among my students over the years. My motto is : ...</p>
  <strong>EGP 200/trial</strong>
  <button className='btn btn-danger'>Book trial</button>
  
</div>
     </div>
    
    </div>
    <div className='findmore'><a href="">Find more</a></div>
    <div className="section2">
      <h1>See what <span>Yalla Araby </span> offers</h1>
      <div className="container-fluid">
        <div className="row">
        <div className="offer">
          <img src="./assets.Frame 42.png" alt="frame2" />
          <h1>Grammatical correction</h1>
          <h4><a href="more">More <i className='icon arrow-left'></i> </a></h4>
        </div>
        <div className="offer">
          <img src="./assets.Frame 42.png" alt="frame2" />
          <h1>Grammatical correction</h1>
          <h4><a href="more">More <i className='icon arrow-left'></i> </a></h4>
        </div>
        <div className="offer">
          <img src="./assets.Frame 42.png" alt="frame2" />
          <h1>Grammatical correction</h1>
          <h4><a href="more">More <i className='icon arrow-left'></i> </a></h4>
        </div>
      
        </div>
       </div>
    </div> */}
    </>)
}

export default Home