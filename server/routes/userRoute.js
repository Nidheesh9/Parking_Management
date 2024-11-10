const express = require('express');
const { signUp, login, get_parking_slot, set_parking_slot, get_cars } = require('../controller/user');
const { AdminLogin, AdminSignup, getRegisteredUsers, getEmptySlots, getOccupiedSlots } = require('../controller/admin');
const { addCar } = require('../controller/user');
const fetchuser = require('../middleware/fetchuser.middleware'); 
const fetchadmin = require('../middleware/fetchadmin.middleware'); 
const router = express.Router();


router.post('/signup', signUp);
router.post('/login', login);
router.post('/adminLogin', AdminLogin);
router.post('/adminSignup', AdminSignup);
router.post('/addCar', fetchuser, addCar);
router.post('/getParkingSlot', get_parking_slot);
router.post('/setParkingSlot', set_parking_slot);
router.post('/getCars',fetchuser, get_cars);
router.get('/getUsers', fetchadmin, getRegisteredUsers);
router.get('/getEmptySlots', fetchadmin, getEmptySlots);
router.get('/getOccupiedSlots', fetchadmin, getOccupiedSlots);

module.exports = router;