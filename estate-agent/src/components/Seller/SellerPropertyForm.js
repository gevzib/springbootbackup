import React, { useState } from "react";
import "../styles/SellerPropertyForm.css";
import { Link } from "react-router-dom";

export default ()=> {

    let [data, setData] = useState({});

    const elements = Array.from(document.querySelectorAll('input[type="checkbox"]'))

    function submitData() {
        for(let key in data) {
            sessionStorage.setItem(key, data[key])
        }
    }

    const [file, setFile] = useState();

    let images = [];

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
        for(let i = 0; i < e.target.files.length; i++) {
            console.log(e.target.files[i])
            let toPush = URL.createObjectURL(e.target.files[i]);
            images.push(toPush)
            sessionStorage.setItem(`images${i}`, images[i])
        }
        
    }

    return (
        <div id="sellPropertyBody">
            <h1>Sell a Property</h1>
            <div id="sellPropertyForm">
                <table className="section1">
                    <tr>
                        <td><h3>Property Type</h3>
                        <select onInput={e=>setData({...data, "type": e.target.value})} >
                            <option>Detached</option>
                            <option>Semi-Detached</option>
                            <option>Terraced</option>
                            <option>Flat</option>
                            <option>Bungalow</option>
                            <option>Land</option>
                            <option>Park Home</option>
                            <option>Student Halls</option>
                        </select></td>
                        <td><h3>Number of Bedrooms</h3>
                        <select onInput={e=>setData({...data, "bedrooms": e.target.value})} value={sessionStorage.getItem("bedrooms")}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6+</option>
                        </select></td>
                        <td><h3>Price: </h3>
                        <input onInput={e=>setData({...data, "price": e.target.value})} value={sessionStorage.getItem("price")} /></td>
                    </tr>
                </table>
                <table className="section2"><tr>
                    <td><h3 id="address">Address: </h3>
                    <table><tbody>
                        <tr>
                            <td><span className="ad">Address Line 1: </span>
                            </td><input onInput={e=>setData({...data, "address1": e.target.value})} value={sessionStorage.getItem("address1")}/><br/>
                        </tr>
                        <tr>
                            <td><span className="ad">Address Line 2: </span>
                            </td><input onInput={e=>setData({...data, "address2": e.target.value})} value={sessionStorage.getItem("address2")}/><br/>
                        </tr>
                        <tr>
                            <td><span className="ad">City: </span>
                            </td><input onInput={e=>setData({...data, "city": e.target.value})} value={sessionStorage.getItem("city")}/><br/>
                        </tr>
                        <tr>
                            <td><span className="ad">County: </span>
                            </td><input onInput={e=>setData({...data, "county": e.target.value})} value={sessionStorage.getItem("county")}/><br/>
                        </tr>
                        <tr>
                            <td><span className="ad">Postcode: </span>
                            </td><input onInput={e=>setData({...data, "postcode": e.target.value})} value={sessionStorage.getItem("postcode")}/><br/>
                        </tr>
                    </tbody></table></td>
                    <td><h3 id="desc">Property Description: </h3>
                    <textarea onInput={e=>setData({...data, "details": e.target.value})} value={sessionStorage.getItem("details")}/></td>
                    </tr></table>
                
                <h3>Property Features</h3>
                <table className="section3">
                    <tr>
                        <td><label><input type="checkbox" onInput={e=>setData({...data, "cb1": e.target.value})}/>Garden</label></td>
                        <td><label><input type="checkbox" />Parking</label></td>
                        <td><label><input type="checkbox" />Retirement Home</label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" />Student Accomodation</label></td>
                        <td><label><input type="checkbox" />Pet Friendly</label></td>
                        <td><label><input type="checkbox" />Furnished</label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" />Shared Ownership</label></td>
                        <td><label><input type="checkbox" />Gym Included</label></td>
                    </tr>
                </table>
                <div id="addPhotos">
                    <h3>Photos: </h3>
                    <img className="imageInput" src={sessionStorage.getItem("images0")} />
                    <img className="imageInput" src={sessionStorage.getItem("images1")} />
                    <img className="imageInput" src={sessionStorage.getItem("images2")} />
                    <img className="imageInput" src={sessionStorage.getItem("images3")} />
                    <img className="imageInput" src={sessionStorage.getItem("images4")} />
                    <img className="imageInput" src={sessionStorage.getItem("images5")} />
                    <img className="imageInput" src={sessionStorage.getItem("images6")} />
                    <img className="imageInput" src={sessionStorage.getItem("images7")} /><br />
                    <input id="img" multiple type="file" onChange={e=>handleChange(e)}/>
                </div>
            </div>
            <Link to="/sellaproperty/confirm"><button id="sellPropertyButton" onClick={e=>submitData()}>Submit</button></Link>
        </div>
    )
}