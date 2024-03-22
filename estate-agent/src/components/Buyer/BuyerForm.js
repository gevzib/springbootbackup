import React, { useState } from "react";
import '../styles/BuyerForm.css';
import { Link } from 'react-router-dom';

import profile from '../../assets/profile.png'
import phone from '../../assets//phone.png';
import email from '../../assets/email.png';


const BuyerForm = () => {   

    const [formData, setForm] = useState({});
    
    function submitForm(e){
        e.preventDefault();
         
            fetch("http://localhost:8000/buyers", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
          
            
        for(let key in formData) {
            sessionStorage.setItem(key, formData[key])
        };
    };
    
    return (
        <div className='container'>
            <div className='header'>
                <div className='title'>Register New Buyer</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={profile} alt='silhouette icon image of a person' />
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" onInput={e=>setForm({...formData, firstname: e.target.value})} />
                </div>
                <div className='input'>
                    <img src={profile} alt='silhouette icon image of a person' />
                    <input type="text" id="surname" name="surname" placeholder="Surname" onInput={e=>setForm({...formData, surname: e.target.value})} />
                </div>
                <div className='input'>
                    <img src={email} alt='silhouette icon image of an email evelope' />
                    <input type="email" id="email" name="email" placeholder="Email Address" onInput={e=>setForm({...formData, email: e.target.value})} />
                </div>
                <div className='input'>
                    <img src={phone} alt='silhouette icon image of an old typical phone' />
                    <input type="tel" id="phone" name="phone" placeholder="Telephone Number" onInput={e=>setForm({...formData, telephone: e.target.value})} />
                </div>
            </div>
            <div className='submitContainer'>
                <buttonLink onClick={e=>submitForm(e)} ><Link className="link" to="/buyer">REGISTER</Link></buttonLink>
            </div>
        </div>
    );
};

export default BuyerForm;