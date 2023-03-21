import React from 'react'
import Navbar2 from '../../Components/Navbar2/Navbar2';
import Projects from '../../Components/blogs/Projects';
import "./style.scss";

const Project = () => {
    return (
        <div className='projects'>
            <Navbar2 />
            <div className="container ">
                <Projects/>
            </div>
        </div>
    )
}

export default Project;