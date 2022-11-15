import React from 'react';
import HomeBanner from '../../HomeBanner/HomeBanner';
import HomeDescription from '../HonmeDescription/HomeDescription';
import InfoCards from '../Infocards/InfoCards';
import Services from '../Sevices/Services';

const Home = () => {
    return (
        <div>
         <HomeBanner></HomeBanner>
         <InfoCards></InfoCards>
         <Services></Services>
         <HomeDescription></HomeDescription>
        </div>
    );
};

export default Home;