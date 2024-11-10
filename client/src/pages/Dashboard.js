import React from 'react';
import pic from '../material/Parking_car.jpg'
import CarCard from './CarCard';
import { Link } from 'react-router-dom';



const Dashboard = () => {


  return (
    <div className="flex flex-col md:flex-row mt-4 pt-2 justify-center">
      {/* Left Side: Profile Card */}
      <div className="bg-white p-6 rounded-lg shadow-md md:w-[30%] ">
        <img src={pic} alt="Profile" className="rounded-full w-24 h-24 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-center mb-2">John Doe</h2>
        <p className="text-center text-gray-500">Full Stack Developer</p>
        <p className="text-center text-gray-500">myGmail@gmail.com</p>
        <p className="text-center text-gray-500">+31-94567809</p>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit Profile</button>
          <Link to={'/addCar'} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
            Add Car
          </Link>
        </div>
      </div>

      {/* Right Side: Edit Profile */}
      <div className="bg-white p-6 rounded-lg shadow-md md:w-[65%] md:ml-4 gap-2">
        <h1 className=' text-center mb-4 font-bold text-2xl'>You Have</h1>
        <div className="bg-white rounded-lg w-[100%] md:ml-4 flex gap-2 justify-center items-center flex-wrap">
          <CarCard image={pic} name={"Alto"}/>
          <CarCard image={pic} name={"WagonR"}/>
          <CarCard image={pic} name={"Swift"}/>
          <CarCard image={pic} name={"Baleno"}/>
          <CarCard image={pic} name={"Scorpio"}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;