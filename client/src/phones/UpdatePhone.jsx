import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const UpdatePhone = () => {
    const [phone,setPhone] = useState({
        model:"",
        description:"",
        price:"",
    });

    const navigate = useNavigate();
    const location = useLocation();

    const phoneLocation = location.pathname.split("/")[2]
    const handleChange = (e) =>{
        setPhone((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:8081/updatePhone/"+phoneLocation, phone);
            console.log("http://localhost:8081/updatePhone/"+phoneLocation, phone)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    };

    console.log(phone)
    return (
        <div className="UpdatePhoneForm">
            <h1>Update a phone</h1>
            <input type="text" placeholder="model" name="model" onChange={handleChange} />
            <input type="text" placeholder="description" name="description" onChange={handleChange} />
            <input type="text" placeholder="price" name="price" onChange={handleChange} />

        <button className="ButtonForm" onClick={handleClick}>Update</button>
        </div>
    )
};
export default UpdatePhone;