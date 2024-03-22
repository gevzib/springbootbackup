import React from "react";
import { Link } from "react-router-dom";

function PropertyListing(props) {
    

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

export default PropertyListing;