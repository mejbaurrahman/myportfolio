import React from 'react';
import HeaderBanner from '../../HeaderBanner/HeaderBanner';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div >
            <HeaderBanner></HeaderBanner>
            <About></About>
            <Portfolio></Portfolio>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;