import { useState } from "react";
import "./main.css";
import "./util.css";
import axios from "axios";
//import { Link, useNavigate } from "react-router-dom";
//import Signup from "./Signup";
//import React from "react";


function Signup() {

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

 
 const handelSubmit = (e:any)=>{
    e.preventDefault();
    const userData = {
       name: name,
       password: password,
 
    };
    axios.post("http://localhost:1431/loginUser/user/add",userData)
    .then((res)=>{
      if(res.data != null){
        setName("");
        setPassword("");
       

      }
       else{
        console.log("failure")
       }
    }
 )
}
  return (
   <div>
    <div className="container text-center bg-white h-75 w-75">
        <h2 className="text-dark">Sign Up </h2>
        <form id="signupForm"  onSubmit={handelSubmit} className='form-control '>
          <div className="input-group">
            <label htmlFor="email">Name:</label>
            <input
              type="text"
              id="email"
              name="name"
              placeholder="Enter your name"
              required 
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div><br/><br/>

          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Choose a password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div><br/>

          

          <button type="submit" className="btn btn-outline-success w-25 m-5" >
            Sign Up
          </button>
          
          <button  className="btn btn-outline-success w-25" >
          <a href="/loginUser" >login</a>
          </button>
    
        </form>
       
        
      </div>
   </div>
  );
}

export default Signup;
