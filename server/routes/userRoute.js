const express = require('express');
const { signUp, login, get_parking_slot, get_cars, bookSlot, getUserDetails, updateUser, getSpecificUserCars, get_unparked_cars, get_parked_cars, delete_car_from_parking } = require('../controller/user');
const { AdminLogin, AdminSignup, getRegisteredUsers, getEmptySlots, getOccupiedSlots } = require('../controller/admin');
const { addCar } = require('../controller/user');
const fetchuser = require('../middleware/fetchuser.middleware');
const fetchadmin = require('../middleware/fetchadmin.middleware'); 
const router = express.Router();


router.post('/signup', signUp);
router.post('/login', login);
router.post('/addCar', fetchuser, addCar);
router.post('/getParkingSlot', get_parking_slot);
router.get('/getCars', fetchuser, get_cars);
router.get('/getCars/:id', getSpecificUserCars);
router.post('/bookSlot', fetchuser, bookSlot);
router.get('/getUserDetails', fetchuser, getUserDetails);
router.put('/updateUser', fetchuser, updateUser);
router.get('/getUsers', fetchadmin, getRegisteredUsers);
router.get('/getEmptySlots', fetchadmin, getEmptySlots);
router.get('/getOccupiedSlots', fetchadmin, getOccupiedSlots);
router.post('/adminLogin', AdminLogin);
router.post('/adminSignup', AdminSignup);
router.post('/getUnparkedCars', fetchuser, get_unparked_cars);
router.post('/getParkedCars', fetchuser, get_parked_cars);
router.post('/removeFromParking', delete_car_from_parking);



module.exports = router;