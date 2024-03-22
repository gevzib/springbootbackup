import React, { useState } from "react";
import '../styles/SellerForm.css';
import { Link } from 'react-router-dom';

import profile from '../../assets/profile.png';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';


const SellerForm = () => {   

    const [formData, setForm] = useState({});
    
    function submitForm(e){
        e.preventDefault();
                 
            fetch("http://localhost:8000/sellers", {
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
                <div className='title'>Register New Seller</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={profile} alt='silhouette icon image of a person' />
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" onInput={e=>setForm({...formData, firstName: e.target.value})} />
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
                    <input type="tel" id="phone" name="phone" placeholder="Telephone Number" onInput={e=>setForm({...formData, phone: e.target.value})} />
                </div>
            </div>
            <div className='submitContainer'>
                <buttonLink onClick={e=>submitForm(e)} ><Link className="link" to="/seller">REGISTER</Link></buttonLink>
            </div>
        </div>
    );
};

export default SellerForm;













































//import { useRef, useState } from 'react';



//let value ="123";//creating empty variable | virtual DOM doesnt know var
// function Test(){
//     const [value, setValue] = useState("123");

//     return(
//         <div>
//             {value}
//             <br/>
//             <input onChange={e=>setValue(e.target.value)} />
//         </div>
//     )
// }
//export default Test;





// function SaveSeller(){

// let [Seller, setSeller] = useState({});

   
// function submitSeller(){
//     console.log(Seller)
// }
//     return(
//         <div>
//             {Seller.firstName}
//             {Seller.Surname}
//             {Seller.Email}
//             {Seller.Phone}
//             <br/>

//             <form>
//             <h3>First Name</h3>
//             <input onInput={e=>setSeller({firstName:e.target.value})}/>
//             <h3>Surname</h3>
//             <input onInput={e=>setSeller({Surname:e.target.value})}/>
//             <h3>Email</h3>
//             <input onInput={e=>setSeller({Email:e.target.value})}/>
//             <h3>Telephone</h3>
//             <input onInput={e=>setSeller({Phone:e.target.value})}/>
//             </form>

//             <br/>

//             <button onClick ={e=> submitSeller()}>Submit</button>

//         </div>
//     )
// }

// export default SaveSeller;















































// const SellerForm = (props) => {


//     const sFirstNameRef = useRef();
//     const sSurnameRef = useRef();
//     const sEmailRef = useRef();
//     const sPhoneRef = useRef();
    


//     function saveSeller(){
//         let sFirstName  = sFirstNameRef.currentvalue;
//         sessionStorage.setItem("sFirstName", JSON.stringify(sFirstName));

//         let sSurname = sSurnameRef.currentvalue;
//         sessionStorage.setItem("sSurname", JSON.stringify(sSurname));

//         let sEmail=sEmailRef.current.value;
//         sessionStorage.setItem("sEmail", JSON.stringify(sEmail));

//         let sPhone=sPhoneRef.current.value;
//         sessionStorage.setItem("sPhone", JSON.stringify(sPhone));

        
//     }

//     return (
//         <div>
//             <h1>Seller Form</h1>
//             <form name="sellerForm">
//                 <label htmlFor="sFirstName">First Name:</label>
//                 <input id = "sFirstName" name="sFirstName"
//                 type="text" ref={sFirstNameRef} />

//                 <label htmlFor="sSurname">Surname: </label>
//                 <input id="sSurname" name="sSurname" type="text" ref={sSurnameRef}/>

//                 <label htmlFor="sEmail">Email: </label>
//                 <input id="sEmail" name="sEmail" type="email"ref={sEmailRef}/>

//                 <label htmlFor="sPhone">Telephone: </label>
//                 <input id="sPhone" name="sPhone" type="tel" ref={sPhoneRef} />

//                 <input type="button" onClick={saveSeller} value="Submit" />
//             </form>
//         </div>
//     );



// };

// export default SellerForm;