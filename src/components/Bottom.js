import React, { useState } from 'react';
import im from './Images/100x100.png';
import title from './Images/TITLE.png';
import { Container, Row, Col } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function Bottom() {
  const elements = [
    "Privacy Policy",
    "Gestionar Cookies",
    "Terms of Use",
    "About",
    "Advertise",
    "Closed Captioning",
    "CBS News Store",
    "Site Map",
    "Contact Us",
    "Help"
  ];
  const middleIndex = Math.ceil(elements.length / 2);
  const firstHalf = elements.slice(0, middleIndex);
  const secondHalf = elements.slice(middleIndex);
  const isSmallScreen = window.innerWidth < 768;
  return (

   
<div class="container">
   <p></p> 
    <div className="row">
    
    <div className='text-center '><img src={title}/></div>

    </div>

    <div className='row' style={{ textAlign:'center', fontSize:'8px' }}>
      <p></p>
      <div className='col'>Copyright ©2024 CBS Interactive Inc. All rights reserved.</div>
    </div>
    <p></p>
    <div className='row'>
    
      <MediaQuery minWidth={980}>
        {/* Renderizar contenido para pantallas pequeñas (hasta 768px de ancho) */}
        <p style={{ fontSize: '12px', textAlign: 'center' }}>
        <span style={{ marginRight: '15px' }}>Privacy Policy</span>
        <span style={{ marginRight: '15px' }}>Gestionar Cookies</span>
        <span style={{ marginRight: '15px' }}>Terms of Use</span>
        <span style={{ marginRight: '15px' }}>About</span>
        <span style={{ marginRight: '15px' }}>Advertise</span>
        <span style={{ marginRight: '15px' }}>Closed Captioning</span>
        <span style={{ marginRight: '15px' }}>CBS News Store</span>
        <span style={{ marginRight: '15px' }}>Site Map</span>
        <span style={{ marginRight: '15px' }}>Contact Us</span>
        <span>Help</span>
        </p>


      </MediaQuery>
      <MediaQuery maxWidth={979}>
        {/* Renderizar contenido para pantallas grandes (a partir de 769px de ancho) */}
        
        <div className='col'>
        <ul style={{ listStyleType: 'none', fontSize:'12px', textAlign:'center'}}>
          <li>Privacy Policy</li>
          <li>Gestionar Cookies</li>
          <li>Terms of Use</li>
          <li>About</li>
          <li>Advertise</li>
        </ul>
        </div>
        <div className='col'>
        <ul style={{ listStyleType: 'none' , fontSize:'12px', textAlign:'center'}}>
          <li>Closed Captioning</li>
          <li>CBS News Store</li>
          <li>Site Map</li>
          <li>Contact Us</li>
          <li>Help</li>
        </ul>
        </div>
        
      </MediaQuery>
   
    </div>
      
     

    <div className='row justify-content-center'>
    <img className="col-1 container px-0 rounded-circle" src={im} style={{ width: '30px', margin: '5px' }} />
    <img className="col-1 container px-0 rounded-circle" src={im} style={{ width: '30px', margin: '5px' }} />
    <img className="col-1 container px-0 rounded-circle" src={im} style={{ width: '30px', margin: '5px' }} />
    <img className="col-1 container px-0 rounded-circle" src={im} style={{ width: '30px', margin: '5px',}} />
    </div>
   <p></p> 
        
    

  

</div>

  );
}

export default Bottom;