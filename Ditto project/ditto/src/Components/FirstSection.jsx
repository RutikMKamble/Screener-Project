import React from 'react'
import './FirstSection.css'
import FirstVideo from '../Asset/ditto_intro.mp4'
import {Link} from "react-router-dom"

const FirstSection = () => {
    return (
        <>
            <section className='first-section'>
                <div>
                    <h2 className='first-section-text'>Insurance made easy</h2>
                    <p className='first-section-text-2'>With Ditto, you get the best advice on insurance. Understand your policy, get answers to your burning questions, and buy insurance, all at the same place.</p>
                    <Link to='/bookCall'>
                    <button className='book-call-btn'>Book a free call</button>
                    </Link>
                </div>
                <div>
                <video class="video-div" autoPlay muted type="video/mp4">
                <source  src={FirstVideo}  type="video/mp4"/>
                </video>
                </div>
            </section>
        </>
    )
}

export default FirstSection