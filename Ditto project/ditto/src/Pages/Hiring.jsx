import React from 'react'
import HireImg from '../Asset/hiring.png'
import './Hiring.css'

const Hiring = () => {
  return (
    <>
      <div>
        <img className='Hire-img' src={HireImg} alt="" />
      </div>
      <div className='hire-div'>
        <h2>Open Position</h2>
        <div>
          <div>
            <select>
              <option value="">Choose Department</option>
              <option value="">Advisory</option>
              <option value="">Human Resources</option>
              <option value="">Marketing</option>
            </select>
            <select>
              <option value="">Choose Work Type</option>
              <option value="">Full Time</option>
              <option value="">Part Time</option>
            </select>
            <select>
              <option value="">Choose location</option>
              <option value="">Pune</option>
              <option value="">Mumbai</option>
              <option value="">Jaipur</option>
            </select>
          </div>
          <div>
            <input type="text" className='search-box' placeholder='Search Job Title...........' />
          </div>
        </div>
      </div>
      <div className='job-title'>
        <h2>No Job Available......</h2>
      </div>
    </>
  )
}

export default Hiring