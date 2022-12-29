import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './style_our_service.css'
const OurService = () => {
const [services,setsercices]= useState([])

useEffect(()=>{
axios.get("data/data.json").then((res)=>setsercices(res.data.services))
},[])
  return (
<div className="services">
  <div className="container">
      <h4>Our Service</h4>
      <h1>We Have Best Quality ServiceFor You!</h1>
    <div className="cov_service">
      {services.map((service , i)=>{
          return(
    <div className="service" key={i}>
        <img src={service.image} alt="" />
        <h3>{service.h3}</h3>
        <p>{service.p}</p>
        <h6>{service.h6}</h6>
      </div>
      )
    })
    }
    </div>
  </div>
</div>
  );
}

export default OurService;
