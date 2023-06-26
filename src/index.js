import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LandingPage from './landingPage/LandingPage';
import Dashboard from './Dashboard/Dashboard';

import Login from './auth/Login';
import SignUp from './auth/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/dashboard/:id' element={<Dashboard />} />

        <Route path='/' element={<App />} >  

              <Route path='/' element={<LandingPage />} />
              <Route path='signIn' element={<Login />} />
              <Route path='/signUp' element={<SignUp />} />

          </Route>

      </Routes>
    </Router>

  </React.StrictMode>
);


