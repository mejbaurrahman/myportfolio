import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';



const Contact = () => {
  const form = useRef();
  const [result, setResult] = useState(false);
  var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l8cdb2o', 'template_2xaun59', e.target, 'user_cmhSSa9NdhH8oBFHiRZGK')
      .then((result) => {
          setResult(true);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className='bg-dark p-2 text-white bg-opacity-50'>
            <div className='container'>
            <div className='about text-center'>
                <p data-aos="fade-up" className='halka'>CONTACT</p>
                <div className='bg-info'>
                <p  data-aos="fade-right" className='show-about '>CONTACT ME</p>
                </div>
                <span></span>
            </div>

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-12'>
                    <h6 className='text-secondary'>Hi! Contact me. I am ready to complete your project.</h6>
                    
                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                    {
                        result? <div>
                            <h5 className='text-info'>Successfully send</h5>
                        </div>: <div>
                            <h5 className='text-secondary'>
                                Send your message 
                            </h5>
                        </div>
                    }
                <form ref={form} onSubmit={sendEmail}>
               
                <input type="text" name="fullName" placeholder='your name' /> <br/>
                
                <input type="text" name="toName" placeholder='your email' /><br/>
                
                <textarea type="text" name="message" placeholder='message'/><br/>
                <input type="submit" className='btn btn-primary' value="SEND" />
                
                </form>
                </div>
            </div>
         
          
           

            </div>
            
        </div>
    );
};

export default Contact;