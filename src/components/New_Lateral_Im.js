import React, { useState } from 'react';
import im from './Images/50x50.png';
import New from './New'
//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function New_Lateral_Im() {
    
    return (
        <>
         
            
            
            <div class="row px-0">
                <div class="col-8">
                    <div class="font-size-10 nav_link black-2 row text-sm"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </div> 
                
                    <div class="date row">April 24</div>
                    
                </div>
                <div class="col-4 d-flex justify-content-end">
                    <img src={im} style={{alignContent:'right'}}></img>
                
                </div>
        
          </div>
        
          </>
        
          );
}

export default New_Lateral_Im;