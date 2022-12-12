import React from 'react'
import { Link } from 'react-router-dom';
import { FaReact, FaStripe,FaCss3Alt, FaNode, } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiJsonwebtokens } from "react-icons/si";
import { GiDaisy } from "react-icons/gi";

export default function MoblieShop() {
  return (
    <div>
    <h5 className='fw-lighter text-center text-uppercase' >Mobile Shop - Used Product Sales</h5>
    <hr />
    <div className='d-flex justify-content-lg-around flex-lg-row flex-column'>
    <Link to='https://mobile-shop-52fab.web.app/'><h6 className='fw-lighter'>Live site <i class="fas fa-arrow-alt-circle-right"></i></h6></Link>   
    <Link to='https://github.com/mejbaurrahman/mobile-shop-client'><h6 className='fw-lighter'>Client Repo <i class="fab fa-github"></i></h6></Link>   
    <Link to='https://github.com/mejbaurrahman/mobile-shop-server'><h6 className='fw-lighter'>Server Repo <i class="fab fa-github"></i></h6></Link>   
    </div>
    <div>
        <h5 className='fw-lighter text-center text-uppercase'>Used Technologies</h5>
        <hr />
        <div className='d-flex justify-content-lg-around fs-1 flex-lg-row flex-column mb-3'> <AiFillHtml5/> <FaCss3Alt/> <FaReact/> <SiFirebase/> <SiTailwindcss/> <GiDaisy/> <FaStripe></FaStripe> <FaNode/> <SiMongodb/> <SiExpress/> <SiJsonwebtokens/> </div>
        
    </div>
</div>
  )
}
