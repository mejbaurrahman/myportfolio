import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import MyProjects from '../../../Myprojects/MyProjects';
import './MyPortfolio.css';
import { FaReact, FaStripe,FaCss3Alt, FaNode, } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiJsonwebtokens } from "react-icons/si";
import { GiDaisy } from "react-icons/gi";



const MyPortfolio = () => {

 
    
    return (
        <div className='bg-dark p-2 text-white bg-opacity-50'>
           <div className='container'>
           <div className='about text-center'>
                <p data-aos="fade-up" className='halka'>PORTFOLIO</p>
                <div className='bg-info'>
                <p  data-aos="fade-right" className='show-about '>PORTFOLIO</p>
                </div>
                <span></span>
            </div>
           <div>
            <div>
                <h5 className='fw-lighter text-center text-uppercase' >Mobile Shop - Used Product Sales</h5>
                <hr />
                <div className='d-flex justify-content-lg-around flex-lg-row flex-column'>
                <Link to=''><h6 className='fw-lighter'>Live site <i class="fas fa-arrow-alt-circle-right"></i></h6></Link>   
                <Link to=''><h6 className='fw-lighter'>Client Repo <i class="fab fa-github"></i></h6></Link>   
                <Link to=''><h6 className='fw-lighter'>Server Repo <i class="fab fa-github"></i></h6></Link>   
                </div>
                <div>
                    <h5 className='fw-lighter text-center text-uppercase'>Technologies</h5>
                    <hr />
                    <div className='d-flex justify-content-lg-around fs-1 flex-lg-row flex-column mb-3'> <AiFillHtml5/> <FaCss3Alt/> <FaReact/> <SiFirebase/> <SiTailwindcss/> <GiDaisy/> <FaStripe></FaStripe> <FaNode/> <SiMongodb/> <SiExpress/> <SiJsonwebtokens/> </div>
                    
                </div>
            </div>
           <MyProjects></MyProjects>
           </div>
            </div>
           
            
        </div>
    );
};

export default MyPortfolio;