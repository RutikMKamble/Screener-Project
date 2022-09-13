import React from 'react'
import './FifthSection.css'

const FifthSection = () => {
    return (
        <>
            <div className='five-sec-div'>
                <div className='five-sec-div-div'>
                    <div>
                        <h3 className='why-text'>Why you should buy from Ditto</h3>
                        <p className='if-text'>If you're still reading this, we are pretty sure you already recognize the benefit of using Ditto. However, if you are still not convinced, here’s a few extra points to change your mind</p>
                        <ul className='why-list'>
                            <li>※  Chat Support for additional queries </li>
                            <li>※  Claim Support for when you have to make a claim</li>
                            <li>※  Moral Support for when you need reassurance 😜</li>
                        </ul>
                    </div>
                    <div className='five-sec-nxt-div'>
                        <div>
                            <h4>Buy Insurance</h4>
                            <p>Use our intuitive platform to understand, compare & buy a comprehensive plan</p>
                        </div>
                        <div>
                            <h4>Ditto Hotline</h4>
                            <p>If you need personalized advice, book a call with the best advisors in town</p>
                        </div>
                        <div>
                            <h4>Understand your Insurance</h4>
                            <p>If you already have a health plan, you can see what it's lacking here</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FifthSection