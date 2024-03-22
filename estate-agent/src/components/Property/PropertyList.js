import React from "react";
import "../styles/PropertyList.css";
import PropertyListing from "./PropertyListing";
import { useState } from "react";
import { Link } from "react-router-dom";



export default ()=> {

    const properties = [
        {
            status: "Sold",
            address1: "Montana House",
            address2:"Main Street",
            city: "Manchester",
            county: "Greater Manchester",
            postcode: "M1",
            price: 140000,
            image: "https://media.rightmove.co.uk/dir/crop/10:9-16:9/180k/179285/144749150/179285_APT19CFW_IMG_04_0000_max_476x317.jpeg",
            type: "Flat",
            bedrooms: 2,
            //features:
            details: "Montana House is situated on Princess Street, ideally positioned, especially for those involved in working within the nearby large MRI hospital complex and also for the University of Manchester. This tenth floor apartment comprising; an entrance hallway, open plan living room with modern fitted kitchen, two double bedrooms with the master benefitting from an en-suite shower room and a main bathroom suite."
        },
        {
            status: "For Sale",
            address1: "Greengate",
            address2:"Bridge Street",
            city: "Salford",
            county: "Greater Manchester",
            postcode: "M3",
            price: 240000,
            image: "https://media.rightmove.co.uk/dir/crop/10:9-16:9/217k/216824/144195791/216824_RCS190161_IMG_00_0000_max_476x317.jpeg",
            type: "Flat",
            bedrooms: 2,
            //features:
            details: "This two bedroom, two bathroom apartment is located on the twenty first floor. Internally the property is well laid out with a superb specification throughout, furnishings are to a high standard and a range of on-site facilities including residents lounge with free tea and coffee as well as free Wi-Fi access and on-site gymnasium. The development also has the added benefit of a on site resident team and 24hr Concierge."
        },
        {
            status: "Withdrawn",
            address1: "Skyline Central 2",
            address2:"St. Peter's Square",
            city: "Manchester",
            county: "Greater Manchester",
            postcode: "M4",
            price: 240000,
            image: "https://media.rightmove.co.uk/dir/crop/10:9-16:9/97k/96668/144740399/96668_198865414022024_IMG_00_0000_max_476x317.jpeg",
            type: "Terraced",
            bedrooms: 2,
            //features:
            details: "Leaders welcome to the market a well presented and modern, two bedroom apartment in the popular Skyline Central development. Offered on a furnished basis, the property comprises of; entrance hallway with storage/utility cupboard, spacious lounge with large windows which provide ample natural light, modern fitted kitchen with integrated appliances and plenty of storage space, master bedroom with en-suite bathroom, second double bedroom and a contemporary three piece bathroom suite. WiFi is INCLUDED in the rent. Residents have access to the exclusive pool and gym located on the 18th floor of the development. Finally, the building benefits from having a concierge on-site."
        }
    ];

    let [search, setSearch] = useState({});

    function setInput(e) {
        let newData = {...search};
        let newKey = e.target.name;
        newData[newKey] = e.target.value;
        setSearch(newData);
    }

    return (
        <div id="body">
            <h1 id="propertiesh1">Properties </h1>
            <p><Link to='/sellaproperty'><button>Add New Property</button></Link></p>
            <div onInput={e=>setInput(e)}>
                <strong>Filter by: </strong>
                <select name="status" id="status">
                    <option>status</option>
                    <option>For Sale</option>
                    <option>Sold</option>
                    <option>Withdrawn</option>
                </select>
                <select name="type">
                    <option>type</option>
                    <option>Detached</option>
                    <option>Semi-Detached</option>
                    <option>Terraced</option>
                    <option>Flat</option>
                    <option>Bungalow</option>
                    <option>Land</option>
                    <option>Park Home</option>
                    <option>Student Halls</option>
                </select>
                <select name="county">
                    <option>county</option>
                    <option>Cheshire</option>
                    <option>Cumbria</option>
                    <option>County Durham</option>
                    <option>Greater Manchester</option>
                    <option>Lancashire</option>
                    <option>Merseyside</option>
                    <option>Northumberland</option>
                    <option>Yorkshire</option>
                </select>
                <select name="price">
                    <option>price</option>
                    <option>&lt; £100,000</option>
                    <option>&lt; £200,000</option>
                    <option>&lt; £300,000</option>
                    <option>&lt; £400,000</option>
                    <option>&lt; £500,000</option>
                    <option>+ £500,000</option>
                </select>
                <select name="bedrooms">
                    <option>bedrooms</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6+</option>
                </select>
                <button id="edit" className="filter" onClick={e=>window.location.reload()}>Reset filters</button>
            </div>

            <br />

            <div id="propertyBody">
                {properties.map(property => {       
                    if((!search.status || search.status == property.status)
                    && (!search.type || search.type == property.type)
                    && (!search.county || search.county == property.county)
                    && (!search.price || (parseInt(search.price.split("£")[1])*1000) > property.price)
                    && (!search.bedrooms || search.bedrooms == property.bedrooms)){
                            return <PropertyListing property={property} />
                    } 
                } )
                }
            </div>
        </div>
    )
}