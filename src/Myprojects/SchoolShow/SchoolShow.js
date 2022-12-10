import React from 'react';
import './SchoolShow.css'
import pic1 from '../../images/eschool/1.jpg';
import pic2 from '../../images/eschool/2.jpg'
import pic3 from '../../images/eschool/3.jpg'
import pic4 from '../../images/eschool/4.jpg'
import pic5 from '../../images/eschool/5.jpg'
import pic6 from '../../images/eschool/6.jpg'
import pic7 from '../../images/eschool/7.jpg'
import pic8 from '../../images/eschool/8.jpg'
import pic9 from '../../images/eschool/9.jpg'
import pic10 from '../../images/eschool/10.jpg'

import Slider from 'react-slick';

const SchoolShow = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
 
    return (
        <Slider {...settings}>
          <div className='slidePic'>
            <img className='w-100 h-100 p-3' src={pic1}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3 h-100' src={pic2}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 h-100 p-3' src={pic3}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3 h-100' src={pic4}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3 h-100' src={pic5}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3 h-100' src={pic6}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3 h-100' src={pic7}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3 h-100' src={pic8}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3 h-100' src={pic9}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3 h-100' src={pic10}/>
          </div>
        
          
         
        </Slider>
    );
};

export default SchoolShow;