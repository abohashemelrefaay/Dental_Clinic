import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import AboutUs from './components/about_us/about_us';
import OurService from './components/our_service/our_service';
import Emergency from './components/emergency/emergency';
import Work from './components/navbar/works/Works';
import Footer from './components/footer/footer';
import Testimonials from './components/testmonials/testimonials';
import OurTeam from './components/our_team/our_team';



const App = () => {
  return (
    <div  >
      <Navbar/>
      <Home/>
      <AboutUs/>
      <OurService/>
      <Emergency/>
      <Work/>
      <Testimonials/>
      <OurTeam/>
      <Footer/>
      
      
    </div>
  );
}

export default App;

