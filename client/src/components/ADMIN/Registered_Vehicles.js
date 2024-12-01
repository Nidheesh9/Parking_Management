import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { carContext } from '../../context/Context';
import dummyCar from '../../Images/dummyCar.png'

const Registered_Vehicles = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const { getSpecificUserCars } = useContext(carContext);
  const [cars, setCars] = useState([]);


  useEffect(() => {
    if (!localStorage.getItem('admin-token')) {
      navigate('/adminLogin');
    }

    //fetch cars of the user with id: user_id (left to be implement)
    const fetchVehicles = async () => {
      if (id) {
        const userCars = await getSpecificUserCars({id});
        setCars(userCars?.data);
      }
    }
    fetchVehicles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Registered Cars: {'User-' + cars[0]?.car_owner}</h1>
          <p className="text-xl text-gray-600">Here are the cars registered under user account.</p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cars?.map((car) => (
            <div key={car.car_id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
              <img src={car.image_url || dummyCar} alt={car.car_name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{car.car_name}</h2>
                <p className="text-sm text-gray-600">Car ID{' '}: {car.car_id}</p>
                <p className="text-sm text-gray-600">Car No.{' '}: { car.car_number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Registered_Vehicles;
