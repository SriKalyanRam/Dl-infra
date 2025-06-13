import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Home.css'
import logo from "./images/logo.jpg";
import wall from "./images/wall.jpg";
import water from "./images/water.jpg";
import hospital from "./images/hospital.jpeg";
import Footer from "./Footer";

function Home(){
const[user,setUser] = useState(null);
const navigate = useNavigate();

 useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/Login"); // Redirect if no token
      return;
    }

    axios
      .get("http://localhost:3001/Home", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data.user || res.data); // depending on backend structure
      })
      .catch((err) => {
        console.log("Token invalid or expired", err);
        navigate("/Login"); // Redirect if token invalid
      });
  }, [navigate]);

  const images = [wall , hospital , water];

  const [curr, setcurr]= useState(0);

  const prev = () =>{
      setcurr(((curr -1)+images.length )% images.length);
  }

  const next = () => {
     setcurr((curr + 1)%images.length);
  }

return (
<>
    
    <div className="navDiv">

       <img src={logo} className="logo"/>
            
   
<ul className="navigation">
  <li onClick={() => navigate("/home")}>
    Home
  </li>
  <li onClick={() => navigate("/gallery")}>
    Gallery
  </li>
  <li onClick={() => navigate("/about")}>
    About Us
  </li>
  <li onClick={() => navigate("/contact")}>
    Contact Us
  </li>
</ul>

    </div>

    <div className="corosel" >
       

       <div className="images"> <img src={images[curr]} /> </div>
       <div className="text"><h2>From India to the World – Infrastructure That Inspires.</h2></div>
       <div className="arrow prev"><a   onClick={prev}>&#10094;</a> </div>
     <div className="arrow next"><a  onClick={next}>&#10095;</a></div>
        
    </div><br/><br />
     <Footer/>
    </>
  );
}
export default Home;