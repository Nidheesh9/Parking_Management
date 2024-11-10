import { Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './pages/Navbar';
import Dashboard from './pages/Dashboard';
import AddCar from './pages/AddCar';
import AdminLogin from './components/ADMIN/AdminLogin';
import Admin from './components/ADMIN/Admin';
import EmptySlots from './components/ADMIN/EmptySlots';
import RegisteredUsers from './components/ADMIN/RegisteredUsers';
import RestrictUsers from './components/ADMIN/RestrictUsers';
import RemoveUsers from './components/ADMIN/RemoveUsers';
import ViewParkingLocation from './components/ADMIN/ViewParkingLocation';
import OccupiedSlots from './components/ADMIN/OccupiedSlots';
import CreateNewSlot from './components/ADMIN/CreateNewSlot';
import DeleteExistingSlot from './components/ADMIN/DeleteExistingSlot';
import Slots from './components/ADMIN/Slots';
import RegisteredCars from './components/ADMIN/RegisteredCars';
import AdminSignup from './components/ADMIN/AdminSignup';


function App() {

  const [login,setLogin] = useState(true);

  return (
    <div >
        <Navbar login={login} setLogin={setLogin}/>
        {/* <Login/> */}
        <Routes>
          {
            login?(<Route path='/' element={<Login login={login} setLogin={setLogin}/>}/>)
                :(<Route path='/' element={<SignUp login={login} setLogin={setLogin}/>}/>)
          }
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/addCar' element={<AddCar/>} />
          <Route path='/adminSignup' element={<AdminSignup />} /> 
          <Route path='/adminLogin' element={<AdminLogin/>} /> 
          <Route path='/admin' element={<Admin/>} /> 
          <Route path='/registeredUsers' element={<RegisteredUsers/>} />
          <Route path='/restrictUsers' element={<RestrictUsers/>} />
          <Route path='/removeUser' element={<RemoveUsers/>} />
          <Route path='/parkingLocations' element={<ViewParkingLocation/>} />
          <Route path='/emptySlots' element={<EmptySlots/>} />
          <Route path='/occupiedSlots' element={<OccupiedSlots/>} />
          <Route path='/createParkingSlot' element={<CreateNewSlot/>} />
          <Route path='/deleteParkingSlot' element={<DeleteExistingSlot/>} />
          <Route path='/slots' element={<Slots/>} />
          <Route path='/registeredCars' element={<RegisteredCars/>} />
        </Routes>
    </div>
  );
}

export default App;
