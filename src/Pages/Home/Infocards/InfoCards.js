import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';


const InfoCards = () => {
    const Infodata=[
        {
            id:1,
            name:'Opening Hours',
            description:'Open 9.00 AM too 6 PM everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id:2,
            name:'Visit our location',
            description:'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id:3,
            name:'Contact us now',
            description:'+000 123 456789',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-secondary to-primary '
        }
    ]
    return (
        <div className='grid gap-6 mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                Infodata.map(card => <InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;