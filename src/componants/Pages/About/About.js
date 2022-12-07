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
                        <h3>Personal Info</h3>
                        <hr />
                        <h5>Name: Md. Mejbaur Rahman</h5>
                        <h5>Birthdate: 07/11/1992</h5>
                        <h5>Email: mejba02@gmail.com</h5>
                        <h5>Mobile: 01916102072</h5>

                        {/* //5aCoogo34O3R0Mf4 */}
                    </div>

                    <div className='personal-info p-2 m-2'>
                        <h3>Experience</h3>
                        <hr />
                        <h5>Web Developer</h5>
                        <h5>2021-Present</h5>
                        <hr />
                        <h5>Assistant Programmer</h5>
                        <h5>ICT Division</h5>
                        <h5>Ministry of Post and Telecommunication</h5>
                        <h5>2019-Present</h5>
                            <hr />
                        <h5>Lecturer in CSE</h5>
                        <h5>Dhaka Internationa University</h5>
                        <h5>June, 2016- January, 2017</h5>
                       
                        
                        


                    </div>

                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                        <div className='personal-info p-2 m-2'>
                        <h3>Educational Info</h3>
                        <hr />
                        <h5>BSc in Computer Science & Engineering</h5>
                        <h5>University of Dhaka</h5>
                        <h5>Getting 3.34 out of 4.00</h5>
                        </div>
                        <div className='personal-info p-2 m-2'>
                        <h3>Language Proficiencies</h3>
                        <hr />
                        <h5>Bangla (Native)</h5>
                        <h5>English (Full Proficiency)</h5>
                        <h5>Hindi (Comfortable in Speaking and Listening)</h5>
                        <h5>Urdu (Comfortable in Speaking and Listening)</h5>
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
                                    <div className="react-percentage progress-bar" style={{width: '80%'}} role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                    </div>
                              </div>
                              <div className='p-3 ps-0'>
                              <h5 className='profile-des-1' >NODE JS</h5>
                                <div className="progress">
                                    <div className="react-percentage progress-bar" style={{width: '80%'}} role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">80%</div>
                                    </div>
                              </div>
                              <div className='p-3 ps-0'>
                              <h5 className='profile-des-1' >EXPRESS JS</h5>
                                <div className="progress">
                                    <div className="react-percentage progress-bar" style={{width: '80%'}} role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                    </div>
                              </div>
                              <div className='p-3 ps-0'>
                              <h5 className='profile-des-1' >BOOTSTRAP</h5>
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