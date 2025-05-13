import React from 'react'
import { Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
const Cource = () => {
  return (
    <>
    <Header/>
     <div className="contact-nav">
             <Link to="/contact">
               <button className="contact-button">Profile</button>
             </Link>
             <Link to="/cource">
               <button className="contact-button">Courses</button>
             </Link>
           </div>
  <Footer/>
    </>
    
  )
}

export default Cource