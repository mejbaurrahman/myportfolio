import React from 'react'
import { Link } from 'react-router-dom';
import { FaReact, FaStripe,FaCss3Alt, FaNode, } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiJsonwebtokens, SiBootstrap } from "react-icons/si";
import { GiDaisy } from "react-icons/gi";

export default function School() {
  return (
    <div>
    <h5 className='fw-lighter text-center text-uppercase' >E-School-Course Selling Website </h5>
    <hr />
    <div className='d-flex justify-content-lg-around flex-lg-row flex-column'>
    <Link to='https://e-school-63355.web.app/'><h6 className='fw-lighter'>Live site <i class="fas fa-arrow-alt-circle-right"></i></h6></Link>   
    <Link to='https://github.com/mejbaurrahman/e-school'><h6 className='fw-lighter'>Client Repo <i class="fab fa-github"></i></h6></Link>   
    <Link to='https://github.com/mejbaurrahman/e-school-server'><h6 className='fw-lighter'>Server Repo <i class="fab fa-github"></i></h6></Link>   
    </div>
    <div>
        <h5 className='fw-lighter text-center text-uppercase'>Used Technologies</h5>
        <hr />
        <div className='d-flex justify-content-lg-around fs-1 flex-lg-row flex-column mb-3'> <AiFillHtml5/> <FaCss3Alt/> <FaReact/> <SiFirebase/> <SiTailwindcss/> <GiDaisy/> <FaNode/> <SiMongodb/> <SiExpress/> <SiJsonwebtokens/> </div>
        
    </div>
</div>
  )
}
