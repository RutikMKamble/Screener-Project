import React from 'react'
import './BookCall.css'

const BookCall = () => {
  return (
    <>
      <div className='BookCall-div'>
        <div className='book-call-div-1'>
          <h4>Ditto Insurance Hotline</h4>
          <h6>30 Min</h6>
          <p>With Ditto Hotline, you get access to the best insurance advisors in town. Currently we are experiencing unprecedented traffic on the Ditto Hotline. So if you don’t want to wait, you can WhatsApp us and we will try to address your queries.</p>
        </div>
        <div className='book-call-div-2'>
          <h5>Please let us know if your query is regarding health insurance, life insurance or both? *</h5>
          <form className='book-flex'>
            <div>
            <input type="radio" name="selectIns" id="" value="HealthInsurance" />
            <label className='book-label' >Health Insurance</label>
            </div>
            <div>
            <input type="radio" name="selectIns" id="" value='TermInsurance' />
            <label  className='book-label'>Term Insurance</label>
            </div>
            <div>
            <input type="radio" name="selectIns" id="" value="both" />
            <label className='book-label'>Both</label>
            </div>
            <textarea className='book-text-box' placeholder='Please let us know your query....'></textarea>
            <input type="email" className='book-email' name="" id="" placeholder='Enter your Email Address....' />
            <input type="button" className='book-btn' value="SUBMIT" />
          </form>
        </div>
      </div>
    </>
  )
}

export default BookCall