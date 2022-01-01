import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='bg-dark p-2 text-white bg-opacity-50'>
        <div className='container'>
        <div className='about text-center'>
            <p data-aos="fade-up" className='halka'>BLOGS</p>
            <div className='bg-info'>
            <p  data-aos="fade-right" className='show-blogs'>BLOGS</p>
            </div>
            <span></span>
        </div>
            
        </div>

        <div className='row'>
            <div className='col-12'>
                <h2 className='text-secondary mt-4 text-center'>COMING SOON</h2>
            </div>
        </div>
        </div>
    );
};

export default Blogs;