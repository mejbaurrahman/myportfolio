import React from 'react';
import './MyProjects.css'
import pic1 from '../images/mobileshop/1.jpg'
import pic2 from '../images/mobileshop/2.jpg'
import pic3 from '../images/mobileshop/3.jpg'
import pic4 from '../images/mobileshop/4.jpg'
import pic5 from '../images/mobileshop/5.jpg'
import pic6 from '../images/mobileshop/6.jpg'
import pic7 from '../images/mobileshop/7.jpg'
import pic8 from '../images/mobileshop/8.jpg'
import pic9 from '../images/mobileshop/9.jpg'
import pic10 from '../images/mobileshop/10.jpg'
import pic11 from '../images/mobileshop/11.jpg'
import Slider from 'react-slick';

const MyProjects = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
 
    return (
        <Slider {...settings}>
          <div className='slidePic'>
            <img className='w-100 p-3' src={pic1}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3' src={pic1}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3' src={pic1}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3' src={pic1}/>
          </div>
          
         
        </Slider>
    );
};

export default MyProjects;