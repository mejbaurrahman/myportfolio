import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './MyPortfolio.css';
import { FaReact, FaStripe,FaCss3Alt, FaNode, } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiJsonwebtokens } from "react-icons/si";
import { GiDaisy } from "react-icons/gi";
import MoblieShop from './MobileShop/MoblieShop';
import MobileShopShow from '../../../Myprojects/MobileShopShow/MobileShopShow';
import School from './School/School';
import SchoolShow from '../../../Myprojects/SchoolShow/SchoolShow';



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
           <MoblieShop></MoblieShop>
           <MobileShopShow></MobileShopShow>
           <div className='mt-5'>
            <School></School>
            <SchoolShow></SchoolShow>

           </div>
           </div>
            </div>
           
            
        </div>
    );
};

export default MyPortfolio;