import React from 'react';


const Project = (props) => {
    const {projectName, detail, clientLink, serverLink, liveLink, usedTechnology, img} =props.project;
    return (
        <div className='col-lg-4 col-md-6 col-12'>
             <div data-aos="fade-up" >
             <div className="card border-secondary mb-3">
            <div className="card-header text-dark">{projectName}</div>
            <div className="card-body text-secondary">
              <img style={{width: '90%', height: '600px'}} src={img} alt="" />
              <div style={{height: '190px'}}>
              <p className="card-text">{detail}</p>
              </div>
              <div style={{height: '50px'}}>
                <h5 className='text-bold'>{usedTechnology}</h5>
              </div>
              <div className='d-flex justify-content-around'>
                <a href={clientLink} target='_blank'><button className='btn btn-outline-primary mt-5'>Client <i class="fab fa-github"></i></button></a>
                <a href={serverLink}  target='_blank' ><button className='btn btn-outline-primary mt-5'>Server <i class="fab fa-github"></i></button></a>
                <a href={liveLink}  target='_blank'><button className='btn btn-outline-primary mt-5'>Live <i class="fas fa-chart-line"></i></button></a>

        
              </div>
            </div>
            </div>
             </div>
        </div>
    );
};

export default Project;