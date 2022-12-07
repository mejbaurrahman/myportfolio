import React from 'react';
import { Link } from 'react-router-dom';
import MyProjects from '../../../Myprojects/MyProjects';
import Project from '../../Project/Project';
import './MyPortfolio.css';


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
                <h5 className='fw-lighter' >Mobile Shop - Used Product Sales</h5>
                <div className='d-flex justify-content-lg-around flex-lg-row flex-column'>
                <Link to=''><h6 className='fw-lighter'>Live site</h6></Link>   
                <Link to=''><h6 className='fw-lighter'>Client Repo</h6></Link>   
                <Link to=''><h6 className='fw-lighter'>Server Repo</h6></Link>   
                </div>
            </div>
           <MyProjects></MyProjects>
           </div>
            </div>
           
            
        </div>
    );
};

export default MyPortfolio;