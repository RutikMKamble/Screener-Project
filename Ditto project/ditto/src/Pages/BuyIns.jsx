import React from 'react'
import './BuyIns.css'
import CallImg from '../Asset/call.jpg'
import CallAndWhatsapp from '../Components/CallAndWhatapp'


const BuyIns = () => {
  return (
    <>
      <div className='Buy-ins'>
        <img className='call-main-img' src={CallImg} alt="" />
        <h3>Buy from Ditto</h3>
        <p>Talk to us and we will help you shortlist a policy, fill the application and make the best purchase you can</p>
        <hr />
       <CallAndWhatsapp></CallAndWhatsapp>
      </div>
    </>
  )
}

export default BuyIns