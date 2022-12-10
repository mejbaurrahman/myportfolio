import React from 'react';
import './About.css';
import Mejba from '../../../images/MEJBA.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const About = () => {
    return (
        <div className='bg-dark p-2 text-white bg-opacity-50'>
            <div className='about text-center'>
                <p data-aos="fade-up" className=' halka'>ABOUT ME</p>
                <div className='bg-info'>
                <p  data-aos="fade-right" className='show-about '>ABOUT ME</p>
                </div>
                <span></span>
            </div>
            <div className='container'>
            <div className='row '>
                <div className='col-lg-6 col-md-6 col-12'>
                        <div className='about-myself justify'>
                            <div data-aos="fade-up"  className='personal'>
                                <h3 className='text-uppercase fw-bold'>Hi! I am Md. Mejbaur Rahman</h3>
                                <h4 className='profile-des-1 fw-lighter'>
                                I'm a Front-end/ MERN Stack Developer with over 1 years of experience. I'm from Bangladesh. I code and create web elements for amazing people around the world. I like work with new people.
                                </h4>
                            </div>
                            
                        </div>
                        
<button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  More About Me
</button>

<div className=" modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header h-m bg-dark">
        <h2 className="modal-title" id="exampleModalLabel">ABOUT ME</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body bg-dark">
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-12'>
                    <div className='personal-info p-2 m-2'>
                        <h3 className='fw-lighter'>Personal Info</h3>
                        <hr className='fw-lighter' />
                        <h5 className='fw-lighter'>Name: Md. Mejbaur Rahman</h5>
                        <h5 className='fw-lighter'>Birthdate: 07/11/1992</h5>
                        <h5 className='fw-lighter'>Email: mejbaurrahman03@gmail.com</h5>
                        <h5 className='fw-lighter'>Mobile: +8801916102072</h5>
                    </div>

                    <div className='personal-info p-2 m-2'>
                        <h3 className='fw-lighter'>Experience</h3>
                        <hr className='fw-lighter' />
                        <h5 className='fw-lighter'>Full Stack Web Developer</h5>
                        <h5 className='fw-lighter'>2021-Present</h5>
                        <hr className='fw-lighter' />
                        <h5 className='fw-lighter'>Assistant Programmer</h5>
                        <h5 className='fw-lighter'>ICT Division</h5>
                        <h5 className='fw-lighter'>Ministry of Post and Telecommunication</h5>
                        <h5 className='fw-lighter'>2019-Present</h5>
                            <hr />
                        <h5 className='fw-lighter'>Lecturer in CSE</h5>
                        <h5 className='fw-lighter'>Dhaka Internationa University</h5>
                        <h5 className='fw-lighter'>June, 2016- January, 2017</h5>
                       
                        
                        


                    </div>

                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                        <div className='personal-info p-2 m-2'>
                        <h3 className='fw-lighter'>Educational Info</h3>
                        <hr className='fw-lighter' />
                        <h5 className='fw-lighter'>BSc in Computer Science & Engineering</h5>
                        <h5 className='fw-lighter'>University of Dhaka</h5>
                        <h5 className='fw-lighter'>Getting 3.34 out of 4.00</h5>
                        </div>
                        <div className='personal-info p-2 m-2'>
                        <h3 className='fw-lighter'>Language Proficiencies</h3>
                        <hr />
                        <h5 className='fw-lighter'>Bangla (Native)</h5>
                        <h5 className='fw-lighter'>English (Full Proficiency)</h5>
                        <h5 className='fw-lighter'>Hindi (Comfortable in Speaking and Listening)</h5>
                        <h5 className='fw-lighter'>Urdu (Comfortable in Speaking and Listening)</h5>
                        </div>
                   
                </div>

            </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

                        
                </div>
                <div className='col-lg-6 col-md-6 col-12 profile-pic'>
                <div data-aos="fade-down"  className='personal lg:mt-0'>
                                <h3 className='text-uppercase fw-bold'>What is my Skill Level</h3>
                                <div className='skill-progress mb-5'>
                              <div className='p-3 ps-0'>
                              <h5 className='profile-des-1' >REACT JS</h5>
                                <div className="progress">
                                    <div className="react-percentage progress-bar" style={{width: '90%'}} role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                    </div>
                              </div>
                              <div className='p-3 ps-0'>
                              <h5 className='profile-des-1' >NODE JS</h5>
                                <div className="progress">
                                    <div className="react-percentage progress-bar" style={{width: '90%'}} role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">90%</div>
                                    </div>
                              </div>
                              <div className='p-3 ps-0'>
                              <h5 className='profile-des-1' >EXPRESS JS</h5>
                                <div className="progress">
                                    <div className="react-percentage progress-bar" style={{width: '75%'}} role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                              </div>
                              <div className='p-3 ps-0'>
                              <h5 className='profile-des-1' >BOOTSTRAP</h5>
                                <div className="progress">
                                    <div className="react-percentage progress-bar" style={{width: '85%'}} role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="90">85%</div>
                                    </div>
                              </div>
                              <div className='p-3 ps-0'>
                              <h5 className='profile-des-1' >TAILWIND CSS</h5>
                                <div className="progress">
                                    <div className="react-percentage progress-bar" style={{width: '85%'}} role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="90">85%</div>
                                    </div>
                              </div>
                              <div className='p-3 ps-0'>
                              <h5 className='profile-des-1' >MONGODB</h5>
                                <div className="progress">
                                    <div className="react-percentage progress-bar " style={{width: '80%'}} role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                    </div>
                              </div>
                              <div className='p-3 ps-0'>
                              <h5 className='profile-des-1' >MATERIAL UI</h5>
                                <div className="progress">
                                    <div className="react-percentage progress-bar"   style={{width: '75%'}} role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                              </div>
                                </div>

                                
                            </div>
                   
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default About;