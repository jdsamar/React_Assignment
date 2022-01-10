import React from 'react';
import './App.css';
import LandingPage from "./LandingPage/landing_page";
import Postview from './PostView/post_view';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/postViewPage" element={<Postview />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App