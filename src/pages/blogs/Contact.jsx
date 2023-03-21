import React from 'react';
import Navbar2 from '../../Components/Navbar2/Navbar2';
import Contact from '../../Components/blogs/Contact';
import "./style.scss";

const Contacts = () => {
  return (
    <div className='contact'>
      <Navbar2 />
      <div className="container " >
        <Contact/>
      </div>
    </div>
  )
}

export default Contacts;