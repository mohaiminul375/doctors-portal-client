import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const reviews=[
{
    id:1,
    name:'Winston Henrry',
    img: people1,
    review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    location:'california'
},
{
    id:2,
    name:'Winston Henrry',
    img: people2,
    review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    location:'california'
},
{
    id:3,
    name:'Winston Henrry',
    img:people3,
    review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    location:'California'
},


    ]
    return (
        <section className='mt-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-secondary font-bold'>
                        Testimonial
                    </h4>
                    <h2 className='text-4xl'>What's our patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt=""/>
                </figure>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
reviews.map(review => <TestimonialCard
key={review.id}
review={review}
></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;