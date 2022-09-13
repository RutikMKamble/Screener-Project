import React from 'react'
import './FourthSection.css'
import { Link } from 'react-router-dom'



const FourthSection = () => {
    return (
        <>
            <div className='fourth-sec-wrapper'>
                <div className='fourth-sec-main-div'>
                    <div>
                        <h3>Advice you can count on</h3>
                        <p>With Ditto Hotline, you get access to the best insurance advisors in town. Book a call at your convenience and we can navigate the complex world of insurance together.</p>
                    </div>
                    <div className='fourth-flex'>
                        <div>
                            <h4>No salespeople</h4>
                            <p>You won't be talking to pushy salesmen. You’ll only be engaging with exceptional advisors.</p>
                        </div>
                        <div>
                            <h4>No spam ever</h4>
                            <p>We won't call you when you least expect it. Ditto Hotline comes with a spam-free guarantee</p>

                        </div>
                        <div>
                            <h4>30 min consultation</h4>
                            <p>Good advice takes time. And you will have our undivided attention for at least 30 mins.</p>
                        </div>
                        <div>
                            <h4>It's free</h4>
                            <p>Our consultations are free and we won’t harass you to buy from Ditto</p>
                        </div>
                    </div>
                    <div className='fourth-sec-btn'>
                        <Link to='/bookCall'>
                            <button className='fourth-sec-btn-1'>Book a free call</button>                            </Link>
                        <Link to='/whatsAppUs'>
                            <button className='fourth-sec-btn-2'>WhatsApp Us</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FourthSection