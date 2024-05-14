import React, { useState } from 'react';
import im from './Images/600x400.png';
//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function Background_New() {
    
  return (

   
<div class="container">

    <div class="row">
    
    <img className="container-fluid px-0" src={im} style={{marginRight:'2px'}}></img>
</div>

    
        <div class="nav_link row" style={{marginTop:'10px',marginBottom:'10px', fontWeight:'bold',fontSize:'10px',cursor: 'pointer', lineHeight: '1',fontSize:'14px'}}> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </div> 

        <div class="row d-none d-sm-block" style={{marginTop:'10px',marginBottom:'10px',cursor: 'pointer', lineHeight: '1',fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius, arcu vitae malesuada dictum, nisi dui gravida augue, a placerat. </div>
        <div class="date row">April 24</div>

        <div class=" nav_link row" style={{marginTop:'10px', marginBottom:'px', fontWeight:'bold',fontSize:'10px',cursor: 'pointer', lineHeight: '1',fontSize:'10px'}}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum. </div>

        <div class=" nav_link row" style={{marginTop:'6px', marginBottom:'10px', fontWeight:'bold',fontSize:'10px',cursor: 'pointer', lineHeight: '1',fontSize:'10px'}}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum. </div>
       
        
    

  

</div>

  );
}

export default Background_New;