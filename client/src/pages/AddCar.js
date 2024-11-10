import React, { useState } from 'react';

const AddCar = () => {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [carImage, setCarImage] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // like sending the updated data to an API
    // alert(`Saved: ${name}, ${carModel}, ${carNumber}`);
  };

  return (
    <div className="flex flex-col md:flex-row pt-2 justify-center items-center bg-gray-100  h-[93.3vh]">

      {/* Right Side: Edit Profile */}
      <div className="bg-white p-6 rounded-lg shadow-lg md:ml-4 w-[70%] text-center">
        <h2 className="text-2xl font-bold mb-8">Add Car</h2>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Car Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carModel">
              Car Model
            </label>
            <input
              type="text"
              id="carModel"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your job title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carNumber">
              Car Number
            </label>
            <input
              type="text"
              id="carNumber"
              value={carNumber}
              onChange={(e) => setCarNumber(e.target.value)}
              className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your carNumber"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carNumber">
              Car Image
            </label>
            <input
              type="file"
              id="carImage"
            //   value={carImage}
              onChange={(e) => setCarImage(e.target.value)}
              className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your carNumber"
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
