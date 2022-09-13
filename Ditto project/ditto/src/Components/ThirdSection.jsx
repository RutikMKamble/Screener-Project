import React from 'react'
import './ThirdSection.css'
import avani from '../Asset/avani.png'

const ThirdSection = () => {
    return (
        
        <>
            <div className='third-sec'>
                <div>
                    <p>
                        Simple, Easy and Reliable! Ditto helped me narrow down my choices effortlessly. The entire process was fuss free, what I needed was always kept on priority while giving me options without pushing anything. Absolutely love this platform.
                    </p>
                    <div className='avani-desc'>
                        <img src={avani} className='avani-img' />
                        <h5>
                            AVANI JHA <br />
                            <span className='text-light'>Associate Consultant</span>
                        </h5>
                    </div>
                </div>
                <div>
                    <h2>45</h2>
                    <p>Top Insurance Advisors on standby to answer your queries</p>
                </div>
                <div>
                    <h2>50,000+</h2>
                    <p>People have sought Ditto’s advice before making their insurance purchase</p>
                </div>
            </div>
        </>
    )
}

export default ThirdSection