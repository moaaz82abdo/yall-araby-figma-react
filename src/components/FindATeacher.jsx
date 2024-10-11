import React from 'react'
import '../App.css'
import '../styles/findTeacher.css'
import FindTeacherOne from './FindTeacherOne'
import FindTeacherTwo from './FindTeacherTwo'
function FindATeacher() {
  return (
    <div>

      <FindTeacherOne/>
      <FindTeacherTwo/>
    </div>
    // <div className='select'>
    //     <select name="select" id="">
    //         Arabic
    //         <option value="1">Arabic</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>
    //         <option value="4">4</option>
    //     </select>
    //     <select name="select" id="">
    //         Arabic
    //         <option value="1">Lesson category</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>
    //         <option value="4">4</option>
    //     </select>
    //     <select name="select" id="">
    //         Arabic
    //         <option value="1">level</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>
    //         <option value="4">4</option>
    //     </select>
    // </div>
  )
}

export default FindATeacher