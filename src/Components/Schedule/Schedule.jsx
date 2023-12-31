import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import './Schedule.css';
import Navbar from '../Header/Navbar';

export default function Schedule() {
  const tomorrow = dayjs().add(1, 'day');

  const [Data, setData] = useState({
    pickupdate: tomorrow.toISOString(),
    servicelocation:'Hengrabari',
    service: 'Wash and Fold'
  });

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    console.log( Data)
    try {
      const response = await fetch('http://localhost:8000/api/place/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),

      });
      

      if (response.ok) {
        alert('Data submitted successfully');
        // You can navigate to a success page or reset the form here
      } else {
        console.log('Failed to submit data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }; // Log the Data state
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleDateChange = (newDate) => {
    setData((prevData) => ({
      ...prevData,
      pickupdate: newDate.toISOString(), // Capture selected date
    }));
  };


  return (
    <>
    <Navbar/>
    <div className='schedulecontainer'>
      <div className='scheduleheader'>
        Schedule a pickup
      </div>

      <div className='details'>
        <div className='date'>
          <h2>Select Pickup Date</h2>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={[
                'DatePicker',
                'MobileDatePicker',
                'DesktopDatePicker',
                'StaticDatePicker',
              ]}
            >
              <DemoItem label="Select your pick up date">
                <DatePicker
                  minDate={tomorrow}
                  defaultValue={tomorrow}
                  onChange={handleDateChange}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <h2>Enter pick up details </h2>

        <div>
          <form onSubmit={handleFormSubmit}>
          <div>
                  <label>Select our service location</label>
                  <select
                    id='servicelocation'
                    className='addressbox'
                    onChange={handleInputChange}
                    value={Data.servicelocation}
                  >
                    <option value='Hengrabari'>Hengrabari</option>
                    <option value='Zoo road'>Zoo road</option>
                  </select>
                </div>
                <div>
                  <label>Select our service</label>
                  <select
                    id='service'
                    className='addressbox'
                    onChange={handleInputChange}
                    value={Data.service}
                  >
                    <option value='Wash and Fold'>Wash and Fold</option>
                    <option value='Iron'>Iron</option>
                    <option value='Primium Laundry'>Premium Laundry</option>
                    <option value='Home Service'>Home Service</option>
                    <option value='Dry Cleaning'>Dry Cleaning</option>
                  </select>
                </div>
                
          <div>
              <label htmlFor="name">Name</label>
              <input type="text" autoComplete="off" id="name" className="addressbox" onChange={handleInputChange} />
            </div>

          <div>
              <label htmlFor="pno">Phone no</label>
              <input type="number" autoComplete="off" id="phoneno" className="addressbox" onChange={handleInputChange} />
            </div>

            <div>
              <label htmlFor="houseNo">House no</label>
              <input type="number" autoComplete="off" id="hno" className="addressbox" onChange={handleInputChange} />
            </div>

            <div>
              <label htmlFor="pincode">Pincode</label>
              <input type="number" autoComplete="off" id="Pincode" className="addressbox" onChange={handleInputChange} />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <input type="text" autoComplete="off" id="address" className="addressbox" onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="landmark">Landmark</label>
              <input type="text" autoComplete="off" id="Landmark" className="addressbox" onChange={handleInputChange} />
            </div>
            
             

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div >
    </>
  );
}