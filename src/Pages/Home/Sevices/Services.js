import React from "react";
import ServicesCard from "./Servicescard";
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: fluoride
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: cavity
    },
    {
      id: 3,
      name: "Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: whitening
    },
  ];
  return (
    <div className="mt-16">
      <div>
        <div className="text-center">
          <h3 className="text-xl text-secondary font-bold">OUR SERVICES</h3>
          <h2 className="text-4xl text-accent">Services We Provide</h2>
        </div>
      </div>
      <div className="grid gap-6 mt-[70px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map(service => <ServicesCard
      key={service.id}
      service={service}
      ></ServicesCard>)}</div>
    </div>
  );
};

export default Services;
