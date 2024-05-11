import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(()=>{
        const getPhones = async ()=>{
            try{
                const response = await axios.get("http://localhost:8081/")
                setPhones(response.data);
            }catch(err){
                console.log(err)
            }
        }
        getPhones();
    },[])


const handleDelete = async (id)=>{
try {
    await axios.delete("http://localhost:8081/removePhone/"+id)
    window.location.reload();
} catch (error) {
    console.log(error)
}

}; 
    return <div>
          <h1>Phone Shop</h1>
          <div className="phones">
            {phones.map(phone => ( 

              <div className="phone" key={phone.id}>
                <img src={phone.imageUrl} alt={phone.model}/>
                <h2>{phone.model}</h2>
                <p>{phone.description}</p>
                <span>{phone.price}</span>
                <br />
                <button className="delete" onClick={()=>handleDelete(phone.id)}>Delete</button>
                <br />
                <button className="update"><Link to={`/update/${phone.id}`}>Update</Link></button>

        </div>
        ))};
            </div>
            <br/>
            <button><Link to="/add">Add new phone</Link></button>
        </div>
};
export default Phones;
