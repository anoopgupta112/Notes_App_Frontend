import React from 'react'
import './NavBar.css'
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className= "nav-container"> </div>
  )
}
 const BottomNavBar =()=>{
    return(
        <div className= "Bottom-navBar">

            </div>
    )
}
const DashboardNav = () => {
  const navigate = useNavigate()

  return (
    <div className= "nav-container Dashboard-nav">
      
      <div>
        <h2>
        Welcome, User
        </h2>
        </div>
        <div>
          <button className = "dashboard-btn" onClick={()=>{
            sessionStorage.removeItem("x-access-token")
        navigate("/")
        }}> 
            LogOut
            </button>
          </div>

       </div>
  )
}

export {NavBar, BottomNavBar, DashboardNav}