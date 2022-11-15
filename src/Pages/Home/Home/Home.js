import React from 'react';
import HomeBanner from '../../HomeBanner/HomeBanner';
import InfoCards from '../Infocards/InfoCards';
import Services from '../Sevices/Services';

const Home = () => {
    return (
        <div>
         <HomeBanner></HomeBanner>
         <InfoCards></InfoCards>
         <Services></Services>
        </div>
    );
};

export default Home;