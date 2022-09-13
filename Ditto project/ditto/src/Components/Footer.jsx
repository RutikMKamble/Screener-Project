import React from 'react'
import Logo from '../Asset/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    const top = ()=>{
        window.scroll({ 
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <>
            <div className='Foot-main-div'>
                <div className='company-info'>
                    <img src={Logo} alt="" />
                    <p>With Ditto, you don't just compare insurance. You understand it. Narrow down choices. Avoid pitfalls and make better decisions.</p>
                    <h4>help@joinditto.in | 080-48816818</h4>
                </div>
                <div className='footer-li'>
                    <div>
                        <h4>Products</h4>
                        <Link to='/healthIns'>
                            <p onClick={top}>Health Insurance</p>
                        </Link>
                        <Link to='/lifeIns'>
                            <p onClick={top}>Term Insurance</p>
                        </Link>
                    </div>
                    <div>
                        <h4>Guides</h4>
                        <Link to='/healthIns'>
                            <p onClick={top}>Health Insurance 101</p>
                        </Link>
                        <Link to='/lifeIns'>
                            <p onClick={top}>Term Insurance 101</p>
                        </Link>
                    </div>
                    <div>
                        <h4>General</h4>
                        <ul>
                        <Link to='/terms'>
                            <li onClick={top}>Terms & Conditions</li>
                        </Link>
                            <Link to='/hiring'>
                            <li onClick={top}>Careers</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className='company-desc'>
                <div>
                    <p>Finshots © 2022. All Rights Reserved.</p>
                    <p>Tacterial Consulting Private Limited <br />
                        CIN: U74999GJ2018PTC103398br <br />
                        IRDAI Registered Corporate Agent (Composite) License No CA0738 <br />
                        valid till 9th December 2023
                    </p>
                </div>
                <div>
                    <p>Disclaimer : The information contained in this website is presented purely for information purposes only provided as service to the internet community at large. It does not constitute insurance advice and we do not guarantee the accuracy, adequacy or the completeness of the information contained here.</p>
                </div>
            </div>
        </>
    )
}

export default Footer