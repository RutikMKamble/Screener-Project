import React from 'react';
import './HealthIns.css';
import FirstVideo from '../Asset/ditto_intro.mp4'


export const HealthIns = () => {
    return (
        <>
            <div className='healthIns'>
                <h3>Beginners guide to Health Insurance</h3>
                <div>
                    <video autoPlay muted >
                        <source src={FirstVideo} type="video/mp4" />
                    </video>
                </div>
                <p className='health-first-text'>
                    Buying insurance is hard. Reading a policy document is even harder. And even if you make an effort to painstakingly go through this thing, you’ll most likely draw a blank because you won’t know what half those words mean. So in a bid to uncomplicate matters and teach you how to read a policy document, we’ve created a set of simple case studies to explain what some of the most common terms and features actually mean. We will also tell you how they impact you and why you may or may not need them.
                </p>
                <hr />
                <h3 className='sayNo-text'>Say no to Co-Payment?</h3>
                <p className='health-first-text'>
                    You’re about to buy health insurance. The agent pitches a policy with a cover totaling 5 Lakhs for a bargain price of just ₹7000 a year. But then he sweetens the pot even further. He promises to cut down the premium by 25% (roughly ₹1800/year) if only you agree to a 20% co-payment clause. You think that’s amazing and you sign off on the agreement. Wow, you just saved ₹1800.
                </p>
                <p className='health-first-text'>
                    9 months later, you suffer an accident. You’re hospitalized and you need extensive care. Thankfully you make a full recovery and the bill adds up to ₹2 Lakh. No problem. You’ve got insurance. However, the insurer only pays ₹1,60,000. They ask you to pay the remaining ₹40,000 out of pocket since you promised to co-pay 20% of the bill.
                </p>
                <p className='health-first-text'>
                    You start doing the math. You saved ₹1,800 but you had to pay ₹40,000 because of the co-payment clause. It would take ~22 years worth of premium savings to make up for this fatal mistake. Not something you want in your insurance policy
                </p>
            </div>
        </>
    )
}
