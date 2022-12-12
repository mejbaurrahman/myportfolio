import React from 'react';
import './DentalShow.css'
import pic1 from '../../images/dental/1.jpg';
import pic2 from '../../images/dental/2.jpg'
import pic3 from '../../images/dental/3.jpg'
import pic4 from '../../images/dental/4.jpg'
import pic5 from '../../images/dental/5.jpg'
import pic6 from '../../images/dental/6.jpg'
import pic7 from '../../images/dental/7.jpg'
import pic8 from '../../images/dental/8.jpg'
import pic9 from '../../images/dental/9.jpg'
import pic10 from '../../images/dental/10.jpg'

import Slider from 'react-slick';

const DentalShow = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
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

export default DentalShow;