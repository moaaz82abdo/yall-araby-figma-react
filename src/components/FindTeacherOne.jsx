import React from 'react'

export default function FindTeacherOne() {
  return (
    <div>
    <div className="container-fluid FindOne">
        <div className="row">
            <div className="selectgroups d-flex ">
            <div className='mt-5 ms-5 me-3'>
       <select class="form-select form-select-lg  mb-3" >
        <option selected>Arabic</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
       </div>

        <div className='mt-5 me-3'>
        <select class="form-select form-select-lg mb-3 me-4" >
                <option className='selectO' selected>Lesson Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
        </div>

        <div className='mt-5 me-3'>
        <select class="form-select form-select-lg  mb-3" >
                <option selected>Level</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
        </div>

        <div className="btnFind mt-5 ms-5 me-3">
            <button className='btn  btnFindOne shadow'>Search</button>
        </div>



            </div>

            <div className="findHeader mt-5">
                <h2>Learn <span>Arabic</span> from professionals</h2>
                <p>The best way to learn Arabic, professional lecturers to<br></br> facilitate the learning of Arabic professionally</p>
            </div>
        
        </div>
      </div>

    </div>
  )
}
