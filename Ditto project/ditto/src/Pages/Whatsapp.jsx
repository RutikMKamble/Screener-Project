import React from 'react'
import './Whatsapp.css'

const Whatsapp = () => {
  return (
    <>
      <div className='whatApp-div'>
         <h3>Talk to us on WhatsApp</h3>
         <p>Let us know your query. We are available throughout the day.</p>
          <div>
            <form className='form-div'>
                <label htmlFor="">Your Name</label>
                <input type="text" name="" id="" placeholder='Enter your name' />
                <label htmlFor="">Your WhatsApp number</label>
                <input type="number" placeholder='Enter your whatsApp no.....' />
                <label htmlFor="">Tell us your query</label>
                <textarea placeholder='Enter your query....'></textarea>
                <div className='whatsApp-btn'>
                    <input type="button" className='btn' value="WhatsApp us" />
                </div>
            </form>
          </div>
      </div>
    </>
  )
}

export default Whatsapp