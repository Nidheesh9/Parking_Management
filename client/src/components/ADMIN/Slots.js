import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { getParkingSlotContext } from '../../context/Context';

const Slots = () => {
  const navigate = useNavigate();
  let {location} = useParams();
  const {getParkingSlot} = useContext(getParkingSlotContext);
  const [slots, setSlots] = useState();


  useEffect(() => {
    if (!localStorage.getItem('admin-token')) {
      navigate('/adminLogin');
    }
    
    location = (location !== "IITG Lake_Estate Building" ? location : "IITG Lake/Estate Building");

    const getSlots = async () =>{
      const res = await getParkingSlot({location});
      setSlots(res?.data); 
    }
    getSlots();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Parking Slots - {location}</h1>
          <p className="text-xl text-gray-600">Here are the available parking slots for {location}.</p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full table-auto">
            <thead className="bg-pink-300 text-gray-800">
              <tr>
                <th className="px-6 py-4 text-left">Parking ID</th>
                <th className="px-6 py-4 text-left">Slot No.</th>
                <th className="px-6 py-4 text-left">Length</th>
                <th className="px-6 py-4 text-left">Width</th>
                <th className="px-6 py-4 text-left">Height</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {slots?.map((slot) => (
                <tr key={slot.slot_no} className="border-b hover:bg-gray-100">
                  <td className="px-6 py-4">{slot.parking_id}</td>
                  <td className="px-6 py-4">{slot.slot_no}</td>
                  <td className="px-6 py-4">{slot.length}</td>
                  <td className="px-6 py-4">{slot.width}</td>
                  <td className="px-6 py-4">{slot.height}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-4 py-2 rounded-full text-white ${slot.isEmpty ? 'bg-green-500' : 'bg-red-500'
                        }`}
                    >
                      {slot.isEmpty ? 'Available' : 'Occupied'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Slots;
