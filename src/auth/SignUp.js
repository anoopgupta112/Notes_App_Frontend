import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios';
export default function SignUp() {

    const [UserName, SetUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate()
    const data = {
        userdata: {
            Full_Name: UserName,
            Email: Email,
            Password: Password,

        }
    }
    const url = "http://localhost:2000/SignUp";
    function submitHandler(e) {
        e.preventDefault();
        try {
            axios.post(url, data).then((val) => {
                console.log(val.data.token)
                if (val.data.rc !== -1) {

                    sessionStorage.setItem("x-access-token", val.data.token)
                    navigate(`/dashboard/${val.data.user._id}`)
                }
                else {
                    alert("please enter unique email value")

                }
            }).catch((e) => {

                alert(e)
            })
        }
        catch (e) {
            alert(e)
            console.log(e)
        }

    }



    return (
       
           
            <form className= "authform" onSubmit={submitHandler}>
                   <div className="auth-input">
                <input required
                    type="text"
                    className="form-control"
                    placeholder="Enter User Name"
                    value={UserName}
                    onChange={(e) => SetUserName(e.target.value)}
                />
            </div>
            <div className="auth-input">
                <input required
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="auth-input">
                <input required
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
         

            <div className="auth-button-div">
                <button className= "signIn-button" type="submit">
                    Sign Up
                </button>
            </div>
            
        </form>

           
    )
}
