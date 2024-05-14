import React, { useState } from 'react';
import im from './Images/50x50.png';
import New from './New'
//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function Vineta() {
    
    return (
        <div class="container">
         
            
         <button className="boton">
            <span className="text-left">Lorem ipsum dolor </span>
            <span className="linea-vertical"></span>
            <span className="text-right">Lorem ipsum dolor sit amet, consectetur adipiscing e</span>
         </button>
        
        </div>
        
          );
}

export default Vineta;