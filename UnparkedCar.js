import React, { useContext, useEffect, useState } from 'react';
import { carContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const UnparkedCar = () => {
    const [carSaved,setCarSaved] = useState([]);
    const [car,setCar] = useState({});
    const {getParkedCars,removeParkedCar} = useContext(carContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const carTemp = await getParkedCars();
                setCarSaved(carTemp.data);
            } catch (error) {
                console.error("Failed to fetch cars:", error);
            }
        };
        fetchCars();
    }, []);
    
    const handleCarChange = (event)=>{
        const selectedCarModel = event.target.value;
        const selectedCar = carSaved.find(car => car.car_name === selectedCarModel);
        setCar(selectedCar);
    };

    const handleSubmit = async() => {
        const car_id = car.car_id;
        console.log("Car id : ",car_id);
        await removeParkedCar({car_id});
        setCar();
        navigate('/dashboard');
    };

  return (
    <div className='flex flex-col justify-center items-center h-[80vh]'>
        <div className=" flex justify-startt items-center mt-3">
            <select
                name="location"
                className={`bg-blue-100 text-black py-3 px-8 m-3 text-2xl rounded-lg w-96 hover:bg-blue-400`}
                onChange={handleCarChange}
                value={car?.car_name}
            >
                <option value="select">Select: Car</option>
                {carSaved.map((car, index) => (
                    <option value={car.car_name} key={index}> {car.car_name} </option>
                ))}
            </select>
        </div>

        <button
            className={`bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-600`}
            onClick={handleSubmit}
        >
            Remove Car
        </button>
    </div>
  )
}

export default UnparkedCar;
