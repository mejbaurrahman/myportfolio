import React from 'react';
import HeaderBanner from '../../HeaderBanner/HeaderBanner';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import MyPortfolio from '../MyPortfolio/MyPortfolio';
// import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div >
            <HeaderBanner></HeaderBanner>
            <About></About>
            <MyPortfolio></MyPortfolio>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;