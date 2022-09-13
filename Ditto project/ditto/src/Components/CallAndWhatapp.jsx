import React from 'react'
import './CallAndWhatapp.css'
import Call from '../Asset/callUs.jpg'
import Whatsapp from '../Asset/whatsapp.jpg'
import { Link } from 'react-router-dom'

const CallAndWhatsapp = () => {
  return (
    <>
     <div className='Buy-ins-flex'>
          <div className='buy-in-div'>
            <div className='height-div'>
              <img src={Call} alt="" />
            </div>
            <h4>Get on a call with us</h4>
            <p>We have around 150 slots open each day. Pick a time and we will call you at your convenience.</p>
            <Link to='/bookCall'>
                    <button className='book-call-btn'>Pick a suitable time</button>
            </Link>
          </div>
          <div className='buy-in-div'>
            <div className='height-div'>
              <img src={Whatsapp} alt="" />
            </div>
            <h4>WhatsApp us</h4>
            <p>If you'd much rather prefer texting at your own pace, just hit us up on WhatsApp. We promise no spam and a hassle free experience.</p>
            <Link to='/whatsAppUs'>
                    <button className='book-call-btn'>WhatApp US</button>
            </Link>
          </div>
        </div>
    </>
  )
}

export default CallAndWhatsapp;