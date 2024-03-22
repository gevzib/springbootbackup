import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import banner from '../../assets/banner.png'


import styles from "../styles/BuyerDisplay.module.css"

const Buyer = () => {

    function Button({to, children}){
        return <Link to={to}><button>{children}</button></Link>;
    }

    const [posts, setPosts] = useState([]);

    const [displayBuyers, setDisplayBuyers] = useState(false);

    const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8000/buyers", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);



  const toggleDisplay = () => {
    setDisplayBuyers(!displayBuyers);
};

  



     return (
        
        



        <div>

            
            <img className={styles.image} src={banner} alt="banner"/>
                  
            <Button className={styles.button} to ="/buyerform">REGISTER BUYER</Button>
            
            
        <div className="styles.container">

        <button className={styles.button} onClick={toggleDisplay}>{displayBuyers ? "HIDE BUYERS" : "DISPLAY BUYERS"}</button>
        <br></br>

        
        {displayBuyers && posts.map((post) => (

            <div className={styles.buyerBox} key={post.buyerID}>

            <p>{`Buyer ID: ${post.id}`}</p>
            <p>{`First Name: ${post.firstname}`}</p>
            <p>{`Surname: ${post.surname}`}</p>
            <p>{`Email: ${post.email}`}</p>
            <p>{`Telephone: ${post.telephone}`}</p>
            
            <br></br>
            </div>
        

        ))}
            </div>

        </div>
    );
};

export default Buyer;