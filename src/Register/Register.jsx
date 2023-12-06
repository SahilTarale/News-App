import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";




const Register = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const registerUser=(e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });

    };

    return (
      
      <div className="register" >
          <div className="container">        
              <h2>Sign Up</h2>
              <form  onSubmit={registerUser}>
           
              <input type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
              <input type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}/>
              <button type="submit" className="signUp" value="Sign Up" >Sign Up</button>
              
              </form>
              <p>Already have an account? <Link id="signIn"  to={'/login'}>Sign in</Link></p>
          
          </div>
      </div>
    );
  }
  
  
  
  export default Register;