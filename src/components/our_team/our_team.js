import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import './style_our_team.css'
const OurTeam = () => {
  const [ourteam, setourteam] = useState([]);
  useEffect(()=>{
 axios.get("data/data.json").then((res)=>{setourteam(res.data.our_team)})
  },[])
  return (
  <div className="our_team">
    <div className="container">
      <div className="cov_our_team">
        <div className="text">
          <h5>Our Team</h5>
          <h2>Our Certified dentists</h2>
        </div>
        <div className="team">

          
        { ourteam.map((ourteam , index)=>{
          return(
            <div className="Dr1" key={index}>
            <div className="image_text">
              <img src={ourteam.image} alt="" />
              <h6>{ourteam.h6_1}</h6>
              <h6>{ourteam.h6_2}</h6>              
            </div>
            <div className="icons">
            <a href={ourteam.link1}>
                <i className="fa fa-facebook"></i>
              </a>
              <a href={ourteam.link2}>
                <i className="fa fa-twitter"></i>
              </a>
              <a href={ourteam.link3}>
                <i className="fa fa-linkedin"></i>
              </a>
              <hr />
            </div>
          </div>
          )
        })
        }
        </div>
        <div className="contact">
          <p>Want to make appontment easily?</p>
          <button><a href="">Contact here</a></button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default OurTeam;
