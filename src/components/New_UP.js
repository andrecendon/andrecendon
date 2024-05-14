import React, { useState } from 'react';
import im from './Images/600x400.png';
//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function MainNew() {
    
  return (

   
<div class="container">

    <div class="row">
    
    <img className="container px-0" src={im}></img>
    </div>

    <div class="row">
        <div class=" nav_link black row "> 
        Lorem ipsum dolor sit amet j j s, consectetur adipiscing elit. 
        </div> 
        <p class="row d-none d-sm-block"></p>
       
        <div class="date row">April 24</div>
    

  </div>

</div>

  );
}

export default MainNew;