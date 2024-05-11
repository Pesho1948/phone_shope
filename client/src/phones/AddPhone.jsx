import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddPhone = () => {
    const [phone,setPhone] = useState({
        model:"",
        description:"",
        price:"",
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setPhone((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/phones", phone);
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    };

    console.log(phone)
    return (
        <div className="AddPhoneForm">
            <h1>Add new phone</h1>
            <input type="text" placeholder="model" name="model" onChange={handleChange} />
            <input type="text" placeholder="description" name="description" onChange={handleChange} />
            <input type="text" placeholder="price" name="price" onChange={handleChange} />

        <button className="ButtonForm" onClick={handleClick}> Add </button>
        </div>
    )
};

export default AddPhone;