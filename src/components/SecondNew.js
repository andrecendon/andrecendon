import React, { useState } from 'react';
import im from './Images/600x400.png';
import MediaQuery from 'react-responsive';
import New_Lateral_Im from './New_Lateral_Im';
//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function SecondNew() {
    
  return (

   
<div class="container">

 
    <div className='row' style={{fontSize:'14px', fontWeight:'bold', marginTop:'10px'}}>Title</div>

    <div class="row">
    
    <img className="container-fluid px-0" src={im}></img>
    </div>

    <div class="row px-0">
        <div class=" nav_link black-2 row btn"> 
        Lorem ipsum dolor sit amet consectetur adipiscing elit. 
        </div> 
        <div class=" nav_link black-2 row btn"> 
        Lorem ipsum dolor sit amet adipiscing elit. 
        </div> 
        <div class=" nav_link black-2 row btn"> 
        Lorem ipsum dolor sit amet  a elit. 
        </div> 
        <div class=" nav_link black-2 row btn"> 
        Lorem ipsum dolor sit  consectetur adipiscing elit. 
        </div> 
        <div class=" nav_link black-2 row btn"> 
        Consectetur adipiscing elit. 
        </div> 
        <p class="row d-none d-sm-block"></p>
       
        <hr></hr>
        
        <div class="black-2 row btn"> 
        More in Title 
        </div> 
 
        <p class="row d-none d-sm-block"></p>
    

  </div>
  

 

</div>

  );
}

export default SecondNew;