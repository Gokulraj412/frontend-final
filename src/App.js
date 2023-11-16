import Sidebar from './Components/Sidebar';
import Offcanvas from "./Components/Offcanvas"
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Astrologers from './Pages/Astrologers';
import Users from './Pages/Users';
import Addastrologers from './Pages/Addastrologers';
import SingleAstrologer from './Pages/SingleAstrologer';
import { ToastContainer } from 'react-toastify';
import Login from "./Pages/Login"
import { useSelector } from "react-redux";
import React from 'react';
import Dashboard from './Pages/Dashboard';

function App() {
  // const authGuard = Boolean(useSelector((state) => state.isAuthendicated));
  const authGuard = true;
  return (
    <div>
      <BrowserRouter>
        <div id='fixedbar'>
          {authGuard && <Sidebar />}
        </div>
        <div id='offcanvas'>
          {authGuard && <Offcanvas />}
        </div>
        <Routes>
          <Route path="/" element={authGuard ? <Dashboard/> : <Login />} />
        </Routes>
        <Routes>
            <Route path="/dashboard" element={authGuard? <Dashboard/>: <Navigate to="/"/>}/>
            <Route path='/astrologers' element={authGuard ? <Astrologers /> : <Navigate to="/" />} />
            <Route path='/users' element={authGuard ? <Users /> : <Navigate to="/" />} />
            <Route path='/addastrologers' element={authGuard ? <Addastrologers /> : <Navigate to="/" />} />
            <Route path='/astrologer/:id' element={authGuard ? <SingleAstrologer /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

