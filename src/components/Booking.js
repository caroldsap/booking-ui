import React, { useState } from 'react';
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker';
import Dropdown from './Dropdown';


const Booking = () => {

  const [city, setCity] = useState([]);
  const cityOptions = [
    {
      label: 'CHENNAI',
      value: '1',
    },
    {
      label: 'BANGALORE',
      value: '2',
    },
    {
      label: 'DELHI',
      value: '3',
    },
    {
      label: 'MUMBAI',
      value: '4',
    },
  ];


  const [service, setService] = useState([]);
  const serviceOptions = [
    {
      label: 'Full House Cleaning',
      value: '10',
    },
    {
      label: 'Water Leakages',
      value: '20',
    },
    {
      label: 'Fixing Lights',
      value: '30',
    },
    {
      label: 'Salon Services',
      value: '40',
    },
  ];

  const [value, onChange] = useState(new Date());
  const [formErrors,setFormErrors] = useState({ $valid: false});
  const [showError,setShowError] = useState(false);

  const enableSave = formErrors.$valid;

  const saveBooking = ()=>{
    const payLoad= {
      cityId:city.value,
      userId:"100",
      serviceId:service.value,
      bookingDateTime:1599819107000,
      paymentType:'1'
 
    };
    axios.post("http://localhost:8080/v1/booking/book",payLoad).then(function (response) {
      console.log(response);
      setShowError =false;
    } 
    )
    
  };
 
  return (


    <div>
      <div className="right floated content">
        <Dropdown
          label="Select a City"
          selected={city}
          onSelectedChange={setCity}
          options={cityOptions}
        />
      </div>

      <div className="right floated content">
        <Dropdown
          label="Select a Service"
          selected={service}
          onSelectedChange={setService}
          options={serviceOptions}
        />
      </div>
      <div>
      <DateTimePicker
        onChange={onChange}
        value={value}
      />
    </div>
    <div>
      <a className = {`button ${enableSave ? '' : 'disabled'}`} id="book" onClick ={saveBooking}>Book A Service</a>
    </div>
    </div>

  );

};

export default Booking;

