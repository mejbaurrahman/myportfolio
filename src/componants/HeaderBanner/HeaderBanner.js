import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import Mejba from '../../images/MEJBA.jpg';
import './HeaderBanner.css';
import resume from '../../allfiles/Resume.pdf';
import Particles from 'react-particles-js';
import { Particle } from 'react-tsparticles';

const HeaderBanner = () => {
    return (
        <div className='bg-dark banner-container'>
            <Particles className='position-absolute'></Particles>
            <div className='container position-relative'>
            
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-12'>
                    <div   className='p-3 m-3'>
                        <h2>I AM</h2>
                        <h2 data-aos="fade-up" className='halka'>MD. MEJBAUR RAHMAN</h2>
                        
                        

                       <h3>
                  
                        <Typed
                strings={[
                    'I AM FRONT-END-DEVELOPER',
                    'I AM MERN-STACK-DEVELOPER',
                    'I AM WEB-DEVELOPER']}
                    typeSpeed={40}
                    backSpeed={50}
                   
                    loop >
                    
                </Typed>
                </h3>
                <div className='icons mt-4'>
                        <a  className='icon-style' target='_blank' href="https://web.facebook.com/mejbamagura"><i class="fab fa-facebook-f"></i></a>
                        <span></span>
                        <a  className='icon-style' target='_blank' href="https://www.linkedin.com/in/md-mejbaur-rahman/"><i class="fab fa-linkedin-in"></i></a>
                        <span></span>
                         <a className='icon-style' target='_blank' href="https://github.com/mejbaurrahman"><i class="fab fa-github"></i></a> 
                        <span></span>
                        <a className='icon-style' target='_blank' href="https://www.instagram.com/rmejbaur/"><i class="fab fa-instagram"></i></a> 
                        </div>
                <Link  to='/files/Resume.pdf' target="_blank" download={resume}><button className='btn btn-outline-primary mt-5'>Resume <i class="fas fa-arrow-circle-down"></i></button></Link>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-12 profile-pic'> 
                    <div  data-aos="zoom-in-down" className=''>
                    <img  className='rounded-circle' src={Mejba} alt="" />
                    </div>
                        
                  
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default HeaderBanner;