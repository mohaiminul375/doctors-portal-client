import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ selectedDate }) => {
  return (
    <div className="mt-20">
      <p className="text-center font-bold  text-secondary">
        Available appointment {format(selectedDate, 'PPPP')}
      </p>
    </div>
  );
};

export default AvailableAppointment;
