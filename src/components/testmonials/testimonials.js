import React, {useState,useEffect} from "react";

import './style_testimonials.css';
import axios from 'axios';

const Testimonials = () => {

  const [testimonials,settestimonials] = useState([]);
  const [active,setactive] = useState("");

useEffect(()=>{
axios.get("data/data.json").then((res)=>{settestimonials(res.data.tesimonials)})
},[])
  return (
    <div className="testimonials">
      <div className="container">
        <div className="cov_testimonials"> 

          <div className="text">
            <h6>Testimonial</h6>
            <h2>Let's See Our Patients Feedback</h2>
          </div>
           
          <div className={active==="active1"?"testimonials_elements  moveacion1":active==="active2"?"testimonials_elements  moveacion2":active==="active3"?"testimonials_elements  moveacion3":"testimonials_elements"} >
        { testimonials.map((test ,index)=>{
          return(
            <div className="test" key={index}>
            <i className={test.icon}></i>
            <h5>{test.h5}</h5>
            <p>{test.p}</p>
            <div className="image_text">
              <img src={test.image} alt="" />
              <h4>{test.h4}</h4>
              <h6>{test.h6}</h6>
            </div>
          </div>
          )
        })
        }
          </div>
          <div className="move">
            <span className={active==="active1"?"active1":""} onClick={()=>{setactive("active1")}}></span>
            <span className={active==="active2"?"active2":""} onClick={()=>{setactive("active2")}}></span>
            <span className={active==="active3"?"active3":""} onClick={()=>{setactive("active3")}}></span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
