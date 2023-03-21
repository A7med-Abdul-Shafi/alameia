import React from 'react';
import Navbar2 from '../../Components/Navbar2/Navbar2';
import About from '../../Components/blogs/About';
import "./style.scss";

const AboutUs = () => {

    return (
        <div className='about'>
            <Navbar2 />
            <div className="container">
                <About/>
            </div>
        </div>
    )
}

export default AboutUs;