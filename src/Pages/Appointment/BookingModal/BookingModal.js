import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const BookingModal = ({ treatment, setTreatment,selectedDate }) => {
  const { name:treatmentName, slots } = treatment;
  const date = format(selectedDate, "PPPP");
  const {user} = useContext(AuthContext);

const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
const booking ={
  appointmentDate: date,
  treatment: treatmentName,
  patient:name,
  slot,
  email,
  phone,
}
    console.log(booking)
    fetch('http://localhost:5000/bookings',{
      method:'POST',
      headers:{
        'content-type': 'application/json' 
      },
      body: JSON.stringify(booking)
    })
     .then(res => res.json())
     .then(data =>{
      console.log(data);
      setTreatment(null);

     })

    

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
          <h3 className="text-lg font-bold">{treatmentName}</h3>
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
              defaultValue={user?.displayName}
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              readOnly
            />
            <input
              type="email"
              defaultValue={user?.email}
              name="email"
              placeholder="type your email"
              className="input input-bordered w-full"
              readOnly
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
