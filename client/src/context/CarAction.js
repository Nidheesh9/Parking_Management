import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'
const { carContext } = require("./Context");
const CarAction = (props) => {
    const navigate = useNavigate();
    const host = "http://localhost:5000";

    const addCar = async (carDetails) => {
        try {
            const response = await fetch(`${host}/api/user/addCar`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('auth-token'),
                },
                body: JSON.stringify(carDetails)
            });
            const json = await response.json();
            if (!json.success) {
                throw new Error(json.message || 'Add Car failed');
            }
            alert("Car added successfully");
            navigate('/dashboard');
        }
        catch (error) {
            console.log({ update: "Cannot register car", error: error });
            return;
        }
    }

    const getCars = async () => {
        try {
            const response = await fetch(`${host}/api/user/getCars`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('auth-token'),
                }
            });
            const json = await response.json();
            if (!json.success) {
                throw new Error(json.message || 'Car fetching failed');
            }
            // toast.success("Car Details Fetched");
            return json;
        }
        catch (error) {
            console.log({ update: "Cannot Fetched car", error: error });
            return;
        }
    }

    const getSpecificUserCars = async ({ id }) => {
        try {
            const response = await fetch(`${host}/api/user/getCars/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('admin-token'),
                }
            });
            const json = await response.json();
            if (!json.success) {
                throw new Error(json.message || 'Car fetching failed');
            }
            toast.success("Car Details Fetched");
            return json;
        }
        catch (error) {
            console.log({ update: "Cannot Fetched car", error: error });
            return;
        }
    }

    const getUnparkedCars = async () => {
        try {
            const response = await fetch(`${host}/api/user/getUnparkedCars`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('auth-token'),
                }
            });
            const json = await response.json();
            if (!json.success) {
                throw new Error(json.message || 'Unparked Car fetching failed');
            }
            // toast.success("Car Details Fetched");
            return json;
        }
        catch (error) {
            console.log({ update: "Cannot Fetched Unparked car", error: error });
            return;
        }
    }

    const getParkedCars = async () => {
        try {
            const response = await fetch(`${host}/api/user/getParkedCars`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('auth-token'),
                }
            });
            const json = await response.json();
            if (!json.success) {
                throw new Error(json.message || 'Parked Car fetching failed');
            }
            // toast.success("Car Details Fetched");
            return json;
        }
        catch (error) {
            console.log({ update: "Cannot Fetched Parked car", error: error });
            return;
        }
    }

    const removeParkedCar = async ({ car_id }) => {
        try {
            const response = await fetch(`${host}/api/user/removeFromParking`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ car_id }),
            });
            const json = await response.json();
            if (!json.success) {
                throw new Error(json.message || 'Parked Car removing failed');
            }
            toast.success("Car Removed");
            return;
        }
        catch (error) {
            console.log({ update: "Cannot remove Parked car", error: error });
            return;
        }
    }

    return (
        <>
            <carContext.Provider value={{ addCar, getCars, getSpecificUserCars, getUnparkedCars, getParkedCars, removeParkedCar}}>
                {props.children}
            </carContext.Provider>
        </>
    )
}

export default CarAction;