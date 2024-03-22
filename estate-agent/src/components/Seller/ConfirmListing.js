import React from "react";
import "../styles/SellerPropertyForm.css";
import { Link } from "react-router-dom";

export default ()=> {

    return (
        <div id="confirmProperty">
            <h1>Confirm Property</h1>
            <p>Please edit or confirm the following details:</p>
            <form>
                <table>
                    <tr>
                        <td>
                            <h3>Address <Link to="/sellaproperty"><button>Edit</button></Link></h3>
                            <p>{sessionStorage.getItem("address1")}</p>
                            <p>{sessionStorage.getItem("address2")}</p>
                            <p>{sessionStorage.getItem("city")}</p>
                            <p>{sessionStorage.getItem("county")}</p>
                            <p>{sessionStorage.getItem("postcode")}</p>
                        </td>
                        <td>
                            <h3>Property Type <Link to="/sellaproperty"><button>Edit</button></Link></h3>
                            <p>{sessionStorage.getItem("type")}</p>
                            <h3>Bedrooms <Link to="/sellaproperty"><button>Edit</button></Link></h3>
                            <p>{sessionStorage.getItem("bedrooms")}</p>
                        </td>
                        <td>
                            <h3>Price <Link to="/sellaproperty"><button>Edit</button></Link></h3>
                            <h3>£{sessionStorage.getItem("price")}</h3>
                        </td>
                        <td>
                            <h3>Features <Link to="/sellaproperty"><button>Edit</button></Link></h3>
                            <ul>
                                <li>Parking</li>
                                <li>Pet Friendly</li>
                                <li>Gym Included</li>
                            </ul>
                        </td>
                    </tr>
                </table>

                <h3 id="propertyDesc">Property Description <Link to="/sellaproperty"><button>Edit</button></Link></h3>
                <p>{sessionStorage.getItem("details")}</p>

                <div id="images">
                    <img class="images" src={sessionStorage.getItem("images0")} />
                    <img class="images" src={sessionStorage.getItem("images1")} />
                    <img class="images" src={sessionStorage.getItem("images2")} />
                    <img class="images" src={sessionStorage.getItem("images3")} />
                    <img class="images" src={sessionStorage.getItem("images4")} />
                    <img class="images" src={sessionStorage.getItem("images5")} />
                    <img class="images" src={sessionStorage.getItem("images6")} />
                    <img class="images" src={sessionStorage.getItem("images7")} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}