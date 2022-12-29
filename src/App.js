import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import AboutUs from './components/about_us/about_us';
import OurService from './components/our_service/our_service';


const App = () => {
  return (
    <div  >
      <Navbar/>
      <Home/>
      <AboutUs/>
      <OurService/>
      
    </div>
  );
}

export default App;

