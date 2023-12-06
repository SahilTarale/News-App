import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./detail.css";
import Navbar from "../Navbar/Navbar";

const DetailView =() =>{
    const location = useLocation();
    //const {title, img, url, desc, auth}= useParams();

    console.log(location, 7);

    return (
        <div>
            <Navbar />
            <h1 className="articleContent">{location.state.title}</h1>
            <img className="articleImage" src={location.state.img} />
            <h3  className="articleContent">{location.state.published}</h3>
            <h3 className="articleContent">Source name : {location.state.source}</h3>
            <p  className="articleContent">{location.state.desc}</p>
            <h3  className="articleContent">{location.state.auth}</h3>
            
            <p  className="articleContent">{location.state.content}</p>
            
            
        </div>
    );
}

export default DetailView;