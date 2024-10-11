import React from 'react'

export default function HomeTwo() {
  return (
    <div>
      <div className="container pb-5  mt-4">
        <div className="row HomeTwo">
            <div className="col-md-12 mb-5 mt-5 HeaderHomeOne">
                <h3>See what <span>Yalla Arabi</span> offers</h3>

            </div>
            <div className="col-md-4 cardHomeTwo">
                <img src="/assets/Maskgroup.png" alt="" />
                <h3>Grammmatical <br></br>correction</h3>
                <a href="">More <i class="fa-solid fa-caret-right"></i></a>
            </div>

            <div className="col-md-4 cardHomeTwo">
                <img src="/assets/Maskgroup1.png" alt="" />
                <h3>Grammmatical <br></br>correction</h3>
                <a href="">More <i class="fa-solid fa-caret-right"></i></a>
            </div>

            <div className="col-md-4 cardHomeTwo">
                <img src="/assets/Maskgroup2.png" alt="" />
                <h3>Grammmatical <br></br>correction</h3>
                <a href="">More <i class="fa-solid fa-caret-right"></i></a>
            </div>


        </div>

      </div>
    </div>
  )
}
