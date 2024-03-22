import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



import styles from "../styles/SellerDisplay.module.css"

const Seller = () => {

        function ButtonLink({to, children}){
            return <Link to={to}><button>{children}</button></Link>;
        }

        const [posts, setPosts] = useState([]);

        const [displaySellers, setDisplaySellers] = useState(false);
      
        const getData = () => {
          var requestOptions = {
            method: "GET",
            redirect: "follow",
          };
      
          fetch("http://localhost:8000/sellers", requestOptions)
            .then((response) => response.json())
            .then((result) => setPosts(result))
            .catch((error) => console.log("error", error));
        };
      
        useEffect(() => {
          getData();
        }, []);


        
        
        const toggleDisplay = () => {
            setDisplaySellers(!displaySellers);
        };


    return (
       <div>
           

        <ButtonLink class={ButtonLink} to ="/sellerForm">REGISTER SELLER</ButtonLink>    
        
           


            <div className ="styles.container">

            <button className={styles.button} onClick={toggleDisplay}>{displaySellers ? "HIDE SELLERS" : "DISPLAY SELLERS"}</button>
            <br></br>


            
            {displaySellers && posts.map((post) => (

                <div className={styles.sellerBox} key={post.sellerID}>
                <p>{`Seller ID: ${post.sellerID}`}</p>
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

export default Seller;