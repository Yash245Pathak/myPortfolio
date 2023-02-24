import React from 'react'
import './Home.css'
import myPic from '../../images/myPic.jpg';
import aboutUs from '../../images/aboutUs.png'
import contactUs from '../../images/contactUs.png'
import home from '../../images/home.png'
import portfolio from '../../images/portfolio.png'
import CV from '../../images/CV.pdf'



export default function Home() {

    return (
        <>
            <div className="home">
                <div className="home-left">
                    <div className="image">
                        <img src={myPic} alt="" />
                    </div>
                    <div className="left-text">
                        <span>i'm yash pathak.</span>
                        <span>Web developer</span>
                        <p>Pursuing Btech CSE from GLA University Mathura. A hardworking and passionate learner. Web Developer who is efficient in MERN STACK.</p>
                        <a href={ CV } download="MyCV">
                            <button className='btn'>Download CV</button>
                        </a>
                    </div>
                </div>
                <div className="home-right">
                    <ul>
                        <li className='tooltip'>
                            <img src={home} alt="" />
                            <span className='tooltip-text'>Home</span>
                        </li>
                        <li className='tooltip'>
                            <img src={aboutUs} alt="" />
                            <span className='tooltip-text'>About Us</span>
                        </li>
                        <li className='tooltip'>
                            <img src={portfolio} alt="" />
                            <span className='tooltip-text'>Portfolio</span>
                        </li>
                        <li className='tooltip'>
                            <img src={contactUs} alt="" />
                            <span className='tooltip-text'>Contact Us</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
