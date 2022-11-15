import React from 'react';
import HomeBanner from '../../HomeBanner/HomeBanner';
import HomeDescription from '../HonmeDescription/HomeDescription';
import InfoCards from '../Infocards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Sevices/Services';
import Testimonial from '../Testimoniall/Testimonial';

const Home = () => {
    return (
        <div>
         <HomeBanner></HomeBanner>
         <InfoCards></InfoCards>
         <Services></Services>
         <HomeDescription></HomeDescription>
         <MakeAppointment></MakeAppointment>
         <Testimonial></Testimonial>
        </div>
    );
};

export default Home;