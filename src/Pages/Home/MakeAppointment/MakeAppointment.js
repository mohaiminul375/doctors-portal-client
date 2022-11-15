import React from "react";
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from "../../../Component/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
   <section className="mt-28"
   style={{
    background:`url(${appointment})`
   }}
   >
     <div className="hero ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctor}
          className="-mt-40 hidden md:block w-2/4 lg:block lg:w-1/2 "
       alt="doctor img" />
        <div>
            <p className="text-xl font-bold text-secondary ">Appointment</p>
          <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
          <p className="py-6 text-white">
            PIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <PrimaryButton>Appointment</PrimaryButton>
        </div>
      </div>
    </div>
   </section>
  );
};

export default MakeAppointment;
