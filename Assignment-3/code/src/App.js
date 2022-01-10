import React from 'react';
import logo from './logo.svg';
import './App.css';

var orderDetails = {
  "name": "Allan Ford",
  "employeid": 123456798,
  "appointmenton": "09:00AM (24-12-2021)",
  "email": "y@xyz.com",
  "phone":444646,
  "status": "Pending",
  "Door":"Mark",
  "Time": new Date(19348930200).toLocaleString(),
  "avatar": "https://www.w3schools.com/howto/img_avatar.png",
  "title": "Hey this is title text",
  "description": "LoremL;DKALNL ALDFALDFHHFKS OLSFHKLS FKOSHF OLFHJ pwdjaopd apfjapifjspg pvjsp; sp;jsp;v s;v;s v;s fvs p;s vp;owksjvp[sjvpojsvgpjsdv sp;vjksp["
}

var arrow = "<"
var arrow2 = ">"

const App = () => {
  return (
    <div className="site-container">
      <div className="order-details">
        <div className="nav">
          <div className="nav-container">
            <a href='#' className="nav-arrow arrow">{arrow}</a>
            <h1 className='nav-title'>{orderDetails.name}</h1>
            <span className='nav-text'>{orderDetails.employeid}</span>
            <button className="btn nav-btn">Print</button>

          </div>

        </div>

        <div className='container'>
          <div className='customer-info block'>
            <p className='text'>
              <span>Appointment On: </span>
              {orderDetails.appointmenton}
            </p>
            <p className='text'>
              <span>Email: </span>
              {orderDetails.email}
            </p>
            <p className='text'>
              <span>Phone: </span>
              {orderDetails.phone}
            </p>


          </div>
          <div className='order-info grid block'>
            <div className='unit one-third'>
              <p className='text text-label'>Status </p>
              <p className='text order-staus'>{orderDetails.status}</p>
            </div>

            <div className='unit one-third'>
              <p className='text text-label'>Door </p>
              <p className='text order-staus'>{orderDetails.Door}</p>
            </div>

            <div className='unit one-third'>
              <p className='text text-label'>Time </p>
              <p className='text order-staus'>{orderDetails.Time}</p>
            </div>

          </div>
          <ul className='product-list block'>
            <li className='product'>
              <label className='img custom-checkbox'>
                <input type="checkbox" className='product-input' value='on'></input>
                <span className='custom-checkbox-indicator'></span>
                <img src={orderDetails.avatar} width= "100" height= "100"></img>
              </label>
              <a href='#' className='product-description'>
              <span className='product-arrow arrow'>{arrow2}</span>
              <div className='product-info'>
                <h3 className='product-title text'>{orderDetails.title}</h3>
                <p className='text-help text'>{orderDetails.description}</p>
              </div>
              </a>
            </li>
          </ul>

        </div>

      </div>

    </div>
  )
}

export default App;
