import React from 'react';
import Project from '../../Project/Project';
import './Portfolio.css';


const Portfolio = () => {

    const projects = [{
        projectName: 'WATCH SHOP (MERN STACK)',
        liveLink: `https://watch-shop-757a1.web.app/`,
        detail: `This project is watch shop website where user can buy their favorite watch from it. 
        Some watches are showing in product list. They can buy it and can write review of the website.  
        Home page will show nav bars (home, explore products, login)`,
        clientLink: 'https://github.com/mejbadev/watch-shop-client',
        serverLink: 'https://github.com/mejbadev/watch-shop-server',
        usedTechnology: `REACT, BOOTSTRAP, FIREBASE, NODE JS, EXPRESS`,
        img: 'https://i.ibb.co/vc6n6mV/watch-Shop.png'
       
    
    }, 
    {
        projectName: 'Tour BD (MERN STACK)',
        liveLink: `https://tour-booking-website-6ccf1.web.app/`,
        detail: `This project is tour booking 
        website where user can book 
        their order as their wish.Home page will show the nav bar 
        (home, about, contact us and 
        login). And its show banner, 
        offers.In dashboard another add 3 extra 
        navigations (Add a service, My 
        Orders, Manage Order) and 
        Logout with username.`,
        clientLink: 'https://github.com/mejbadev/tourbd',
        serverLink: 'https://github.com/mejbadev/tourbd-server',
        usedTechnology: `REACT, BOOTSTRAP, FIREBASE, NODE JS, EXPRESS `,
        img: 'https://i.ibb.co/bJFpcvK/screencapture-tour-booking-website-6ccf1-web-app-2021-12-26-13-14-37.png'
    
    }, 
    {
        projectName: 'DENTAL CARE (FRONT END DEVELOPMENT)',
        liveLink: `https://healthcare-website-c383f.web.app/`,
        detail: `This is a healthcare website 
        named DENTALCARE. This Website have about 7 
        navigations Home, Services, 
        Doctors, contact used in home 
        page. Used private Route for service 
        detail and get appointment and 
        blog navigation. People cannot
        read blogs or watch detail service 
        or get appointment without login 
        the page`,
        clientLink: 'https://github.com/mejbadev/dentalcare',
        serverLink: '#',
        usedTechnology: `HTML, CSS, Bootstrap , 
        FontAwesome, Vanila Css, 
        ReactJs, Firebase `,
        img: 'https://i.ibb.co/BZtLdnn/screencapture-healthcare-website-c383f-web-app-2021-12-26-13-24-04.png'
    
    }, 
    
    ];
    
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
            <div className='row'>
            {
                 projects.map(project=> <Project key={project.projectName} project={project}></Project>)
            }
            </div>
           </div>
            
        </div>
    );
};

export default Portfolio;