
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from "react"
import Login from './auth/Login';
import { Route, Routes, Outlet } from 'react-router-dom';
import SignUp from './auth/SignUp';
import LandingPage from './landingPage/LandingPage';
import {NavBar, BottomNavBar} from './navBar/NavBar';

function App() {


  return (
  
      
      
    <div className='Holder'>
    <NavBar/>
      <div className= "landing">
       
      <div className="card" >
 {/* do something here  */}
      </div> 

     {/* landing page, signIn, SignUP everything will come here  */}
      <Outlet />
      </div>
      <BottomNavBar/>
    </div>
    
  );
}



export default App;
