import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({login,setLogin}) => {
    const [loggedIn,setLoggedIn] = useState(false);
  return (
    <nav className="bg-blue-500 p-2 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Parking Management
        </Link>
        {
            loggedIn?(<div className="space-x-4">
                    <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
                        Home
                    </Link>
                    <Link to="/parking-slots" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
                        Parking Slots
                    </Link>
                    <Link to="/reservations" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
                        Reservations
                    </Link>
                    <Link to="/profile" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
                        Profile
                    </Link>
                    <button className="text-white bg-red-500 hover:bg-red-600 px-3 py-2 rounded">
                        Logout
                    </button>
                </div>):
                (<div className="space-x-4">
                    <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded text-2xl" onClick={()=>{
                        if(!login) setLogin(true);
                    }}>
                        Log In
                    </Link>
                </div>)
        }
      </div>
    </nav>
  );
};

export default Navbar;
