import React from 'react';
import HeaderBanner from '../../HeaderBanner/HeaderBanner';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div >
            <HeaderBanner></HeaderBanner>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;