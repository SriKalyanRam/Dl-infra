import React from "react";
import './Login.css'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login(){
const [email,setEmail]= useState('');
const[pass,setPass]= useState('');
const navigate= useNavigate();
const [errmsg,seterrmsg] = useState('');
const handleLogin= (e) =>{
    e.preventDefault()
    axios.post("http://localhost:3001/Login",{email,pass})
    .then((result) => {
        if(result.data.message === "success"){
              localStorage.setItem("token", result.data.token);
              navigate('/Home');
        }else {
          seterrmsg(result.data.message);
      }})
    .catch(err => console.log(err));
}

     
    return(
       <div  className="Logindiv" >
                <h1>Log in</h1>
            <form>

                <input onChange={(e) => setEmail(e.target.value)}   placeholder="Enter your Email"/> <br/>
                <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Enter your password" /><br/>

                <button onClick={handleLogin}>Login</button>
            </form>
                 {errmsg ? <p  style={{ color: 'red' }}>{errmsg}</p> : null}
            
                 <span>Forgot Your Password?</span>       

       </div>
        
    );
}

export default Login;