import React from 'react';
import './MobileShopShow.css'
import pic1 from '../../images/mobileshop/1.jpg';
import pic2 from '../../images/mobileshop/2.jpg'
import pic3 from '../../images/mobileshop/3.jpg'
import pic4 from '../../images/mobileshop/4.jpg'
import pic5 from '../../images/mobileshop/5.jpg'
import pic6 from '../../images/mobileshop/6.jpg'
import pic7 from '../../images/mobileshop/7.jpg'
import pic8 from '../../images/mobileshop/8.jpg'
import pic9 from '../../images/mobileshop/9.jpg'
import pic10 from '../../images/mobileshop/10.jpg'
import pic11 from '../../images/mobileshop/11.jpg'
import pic12 from '../../images/mobileshop/12.jpg'
import pic13 from '../../images/mobileshop/13.jpg'
import pic14 from '../../images/mobileshop/15.jpg'
import Slider from 'react-slick';

const MobileShopShow = () => {
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
          <div className='slidePic'>
            <img className='w-100 p-3 h-100' src={pic11}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3 h-100' src={pic12}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3 h-100' src={pic13}/>
          </div>
          <div className='slidePic'>
            <img className='w-100 p-3 h-100' src={pic14}/>
          </div>
          
         
        </Slider>
    );
};

export default MobileShopShow;