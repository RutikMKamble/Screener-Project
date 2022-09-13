import React from 'react'
import './SecondSection.css'
import Shield from '../Asset/Shield.png'
import Waiting from "../Asset/Waiting.png"
import { Link } from 'react-router-dom'

const SecondSection = () => {
    return (
        <>
            <div className='Second-section'>
                <div className='second-section-text'>
                    <h6 className='welcome-text'>WELCOME TO THE DITTO UNIVERSE</h6>
                    <h4 className='sec-text'>What we do</h4>
                    <h6 className='sec-desc'>Choosing a health or life insurance policy can be extremely overwhelming. So we’ll tell you what we would do if we were you. And you can take it from there. Ditto!!! Get it?</h6>
                </div>
                <div className='common-div'>
                    <div>
                        <div>
                            <img src={Shield} alt="Shield Icon" className='icon-no-1' />
                        </div>
                        <h3>Health Insurance</h3>
                        <p>Cover your health related expenses by picking a comprehensive health plan. Try our easy to use platform to understand, compare and finalize a policy that best suits your needs</p>
                        <div className='sec-btn-flex'>
                            <Link to='/bookCall'>
                                <button className='btn-css blue-color'>Book a call</button>
                            </Link>
                            <Link to='/whatsAppUs'>
                                <button className='btn-css dark-color'>WhatsApp Us</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={Waiting} alt="Waiting Icon" className='icon-no-2' />
                        </div>
                        <h3>Term Life Insurance</h3>
                        <p>Protect your loved ones by insuring your life with a term plan. Try our easy to use platform to finalize a plan and understand the kind of protection your family will need in your absence</p>
                        <div className='sec-btn-flex'>
                            <Link to='/bookCall'>
                                <button className='btn-css blue-color'>Book a call</button>
                            </Link>
                            <Link to='/whatsAppUs'>
                                <button className='btn-css dark-color'>WhatsApp Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondSection