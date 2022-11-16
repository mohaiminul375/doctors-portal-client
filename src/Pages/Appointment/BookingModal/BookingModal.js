import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment,selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PPPP");

const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
const booking ={
  appointmentDate: date,
  treatment:  name,
  patient:name,
  slot,
  email,
  phone,
}
    console.log(booking)
    setTreatment(null);


}

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="mt-10">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {
                slots?.map((slot,index) =>  <option
                key={index}
                slot={slot}
                >
                    {slot}
                  </option>)
              }
            </select>
            <input
              type="name"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="type your email"
              className="input input-bordered w-full"
            />
            <input
              type="phone"
              name="phone"
              placeholder="phone"
              className="input input-bordered w-full"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
