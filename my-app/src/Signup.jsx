import React from "react";
import './index.css'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup(){



       const [email,setEmail] = useState('');
        const [name,setName] = useState('');
        const [pass,setPass] = useState('');
        const navigate = useNavigate();

        const handleSubmit = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:3001/register', {email, name, pass})
            .then(result => {console.log(result);
             navigate('/Login');
        })
            .catch(err => console.log(err))
        }
    return(
        
       <div  className="signupdiv" >
                <h1>Sign UP </h1>
            <form onSubmit={handleSubmit}>

              
                <input type="eamil" onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your Email" required/> <br/>
                  <input type="text"  onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" required/> <br/>
                <input text="password"  onChange={(e) => setPass(e.target.value)}  placeholder="Enter your password" required/><br/>

                <button type="submit" >SignUp</button>
            </form>
         
            
                 <span>Already have an Account? <a href="/Login">Login</a></span>       

       </div>
        
    );
}

export default Signup;