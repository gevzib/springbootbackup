import React from "react";
import { Route, Routes } from "react-router-dom";
import './components/styles/App.css';

// Feature: Register Seller
import Seller from "./components/Seller/Seller";
import SellerList from "./components/Seller/SellerList";
import SellerForm from "./components/Seller/SellerForm";

// Feature: Manage Properties
import Property from "./components/Property/Property";
import PropertyList from "./components/Property/PropertyList";
import SellerPropertyFrom from "./components/Seller/SellerPropertyForm";
import ConfirmListing from "./components/Seller/ConfirmListing";

// Feature: Register Buyer
import Buyer from "./components/Buyer/Buyer";
import BuyerForm from "./components/Buyer/BuyerForm";
import BuyerList from "./components/Buyer/BuyerList";

// Feature: Import Nav
import { Nav } from "./components/Nav/Nav";

//Upload and confirm a property
import SellerPropertyForm from "./components/Seller/SellerPropertyForm";

import LoginSignup from "./components/LoginSignup/LoginSignup";

import banner from "../src/assets/banner.png"





function App() {
  return (
    
    <div className="App">

      <Nav />

      



      <Routes>
        <Route path="/" element={<LoginSignup />} />       
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/sellaproperty" element={<SellerPropertyForm />} />
        <Route path="/sellaproperty/confirm" element={<ConfirmListing />} />
        <Route path="/property" element={<Property />} />
        <Route path="/Buyer" element={<Buyer />} />
        <Route path="/Seller" element={<Seller />} />
        <Route path="/SellerForm" element={<SellerForm />} />
        <Route path="sellproperty" element={<SellerPropertyFrom />} />
        <Route path="sellproperty/confirm" element={<ConfirmListing />} />
        <Route path="/property" element={<Property />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/buyerForm" element={<BuyerForm />} />
        <Route path="/buyerList" element={<BuyerList />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/sellerList" element={<SellerList />} />
  
        </Routes>

        
    </div>
  );
}
export default App;