import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/SignIn', {
        email,
        password,
      });

      const { data } = response;
      if (data.rc === 0) {
        console.log('You are logged in');
        console.log(data.user._id);

        sessionStorage.setItem('x-access-token', data.token);
        navigate(`/dashboard/${data.user._id}`);
      } else {
        console.log(data.rc);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  return (
    <form className="authform" onSubmit={handleSubmit}>
      <div className="auth-input">
        <input
          required
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="auth-input">
        <input
          required
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="SignIn-div">
        <button className="signIn-button" type="submit">
          Sign In
        </button>
      </div>
    </form>
  );
}
