import React, { useState } from 'react';
import './Postview.css';
import Card from './Card';
import data from './mock-data/data.json';
import instagram from "./instagram.png"

import { TiCameraOutline } from "react-icons/ti";

const Postview = () => {

  return (
    <div className="site-container">
      <div className="container">

        <div className="nav">
          <div className="nav-container">
            <img src={instagram} alt="first" className='logo' />
            <TiCameraOutline className='camera' />
          </div>
        </div>
        {data.user.map((ele) => (
          <Card details={ele} />

        ))}
      </div>



    </div>
  );
}

export default Postview;
