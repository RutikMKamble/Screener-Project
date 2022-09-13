import React from 'react'
import './HotLine.css'
import CallImg from '../Asset/call.jpg'
import CallAndWhatsapp from '../Components/CallAndWhatapp'


export const HotLine = () => {
  return (
    <>
      <div className='Buy-ins'>
        <img className='call-main-img' src={CallImg} alt="" />
        <h3>Ditto Insurance Hotline</h3>
        <p>A place where you get to talk to someone about your insurance concerns in plain English.</p>
        <hr />
         <CallAndWhatsapp></CallAndWhatsapp>
      </div>
    </>
  )
}
