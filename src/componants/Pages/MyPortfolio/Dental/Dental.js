import React from 'react'
import { Link } from 'react-router-dom';
import { FaReact, FaStripe,FaCss3Alt, FaNode, } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiJsonwebtokens } from "react-icons/si";
import { GiDaisy } from "react-icons/gi";

export default function Dental() {
  return (
    <div>
    <h5 className='fw-lighter text-center text-uppercase' >Dental Care- Service Review Website </h5>
    <hr />
    <div className='d-flex justify-content-lg-around flex-lg-row flex-column'>
    <Link to=''><h6 className='fw-lighter'>Live site <i class="fas fa-arrow-alt-circle-right"></i></h6></Link>   
    <Link to=''><h6 className='fw-lighter'>Client Repo <i class="fab fa-github"></i></h6></Link>   
    <Link to=''><h6 className='fw-lighter'>Server Repo <i class="fab fa-github"></i></h6></Link>   
    </div>
    <div>
        <h5 className='fw-lighter text-center text-uppercase'>Used Technologies</h5>
        <hr />
        <div className='d-flex justify-content-lg-around fs-1 flex-lg-row flex-column mb-3'> <AiFillHtml5/> <FaCss3Alt/> <FaReact/> <SiFirebase/> <SiTailwindcss/> <GiDaisy/> <FaNode/> <SiMongodb/> <SiExpress/> <SiJsonwebtokens/> </div>
        
    </div>
</div>
  )
}
