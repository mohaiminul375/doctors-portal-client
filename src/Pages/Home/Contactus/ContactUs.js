import React from 'react';
import appointment from '../../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <section className='mt-20'
        style={{
            background:`url(${appointment})`
           }}>
           <div>
           <div className='text-center'>
                <h4 className='text-xl text-secondary font-bold'>Contact Us</h4>
                <h2 className='text-4xl'>Stay connected with us</h2>
            </div>
            <div className='flex justify-center mt-10'>
                <form className=' w-[465px] mx-auto'>
                <input type="text" placeholder="Email Address" className="input w-full   mb-5" />
                <br/>
                <input type="text" placeholder="Type here" className="input w-full mb-5" />

                <input type="text" placeholder="Type here" className="input input-bordered h-[100px] input-lg w-full" />
                <div className='flex justify-center mt-6 mb-10'>
                <input className='btn btn-primary mx-auto' type="button" value="Submit"/>
                </div>
                </form>
            </div>
           </div>
        </section>
    );
};

export default ContactUs;