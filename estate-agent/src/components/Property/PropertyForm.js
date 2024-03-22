import React, { useState } from "react";
//import '../styles/SellerForm.css';
import { Link } from 'react-router-dom';

// import profile from '../../assets/profile.png';
// import phone from '../../assets/phone.png';
// import email from '../../assets/email.png';


const PropertyForm = () => {

    const [formData, setForm] = useState({});

    function submitForm(e) {
        e.preventDefault();

        fetch("http://localhost:8000/properties", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));


        for (let key in formData) {
            sessionStorage.setItem(key, formData[key])
        };
    };

    return (
        <div className="propertyListing">
            <h3>
                <span>{props.property.address1}, {props.property.city}, {props.property.county}, {props.property.postcode} - £{props.property.price} - {props.property.status.toUpperCase()}</span>
                <span>
                    <Link to="/sellaproperty/confirm"><button id="edit">Edit</button></Link>
                </span>
            </h3>
            <table>
                <tr>
                    <td>
                        <img className="leadImage" src={props.property.image} alt="Main image" />
                    </td>
                    <td>
                        <h3>Property Type </h3>
                        <p>{props.property.type}</p>
                        <h3>Bedrooms</h3>
                        <p>{props.property.bedrooms}</p>
                    </td>
                    <td>
                        <h3>Features</h3>
                        <ul>
                            <li>Parking</li>
                            <li>Pet Friendly</li>
                            <li>Gym Included</li>
                        </ul>
                    </td>
                    <td>
                        <p>{props.property.details}</p>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default PropertyForm;