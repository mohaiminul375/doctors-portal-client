import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="w-full lg:w-1/2 rounded-lg shadow-2xl"
        alt=""/>
        <div>
          <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}/>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
