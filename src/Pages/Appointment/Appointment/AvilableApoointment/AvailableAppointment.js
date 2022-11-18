import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";
import AvilableAppiontmentCard from "./AvilableAppointmentCard";
// import AvilableAppiontmentCard from "./AvilableAppointmentCard";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointments, SetAppointments] = useState([]);
  const [treatment,setTreatment] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/appointmentOptions")
      .then((res) => res.json())
      .then((data) => SetAppointments(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="mt-20">
      <p className="text-center font-bold  text-secondary">
        Available appointment {format(selectedDate, "PPPP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {appointments.map((appointment) => (
          <AvilableAppiontmentCard
            key={appointment._id}
            appointment={appointment}
            setTreatment={setTreatment}
          ></AvilableAppiontmentCard>
        ))}
      </div>
    { treatment &&  
    <BookingModal
      treatment={treatment}
      selectedDate={selectedDate}
      setTreatment={setTreatment}
      ></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;
