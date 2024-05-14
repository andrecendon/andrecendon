import React, { useState } from 'react';
import i from './Images/MainNew.png';
import im from './Images/400x400.png';
import MediaQuery from 'react-responsive';
//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function MainNew() {
    
  return (
<div class="container">
 
    
    
<div className='container'>
     <div class="row">
    
    <img className="container-fluid px-0" style={{ float: 'left', marginLeft:'0px',marginRight: '20px' }} src={im}></img>
    </div>

    <div class="row">
        <div class=" nav_link black row btn"style={{textAlign:'left', fontSize:'15px'}}> 
        Lorem ipsum dolor sit amet, consectetur adip 
        </div> 
        
+       
        
        </div>

  </div>

     
    

  

</div>

  );
}

export default MainNew;