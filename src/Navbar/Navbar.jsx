
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });
  
      return () => {
        listen();
      };
    }, []);
  
    const userSignOut = () => {
      signOut(auth)
        .then(() => {
          console.log("sign out successful");
          navigate("/");
        })
        .catch((error) => console.log(error));
    };
  
  
    const regClick= ()=>{
       
        navigate("/register");
      
    }
    const logClick= ()=>{
       
      navigate("/login");
    
  }
    
 // console.log(authUser.email);
    
    return (
      <div className="navbar">
        <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
          <span className="logo">News App </span>
        </Link>     
          
          {authUser ? (
            <>
              <p className="userEmail"> {authUser.email }</p>
                <button onClick={userSignOut} className="navButton">Logout</button>
            </>
            
            ): (<div className="navItems">
            <button onClick={regClick} className="navButton">Register</button>
            <button onClick={logClick} className="navButton">Login</button>
          </div>)}
        </div>
       
      </div>
    )
  }
  
  export default Navbar;