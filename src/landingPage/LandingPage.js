import React from 'react'
import "./LandingPage.css"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate();
  return (
    <div className="container-landingPage">

<div >
  {/* remove card class then It will in simple design */}
      <div className= "row "> </div>
      <div className= "row"> </div>
 </div>

{/* Welcome and button starts from here */}
<div className="welcome-div">  
  <h1 className = "Welcome-text"> Welcome </h1>
  <div className = 'auth-button'>
    <button onClick = {()=>{navigate("/signIn")}}> SignIn </button>
    <button onClick={()=>{navigate("/signUp")}}> SignUp </button>
  </div>
 </div>
</div>
  )
}

export default LandingPage