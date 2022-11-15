import React from "react";

const TestimonialCard = ({ review }) => {
  const { name, img, review: userReview, location } = review;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="flex item-center mt-2 ">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-lg">{name}</h1>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
