import React, { useState } from 'react';
import i from './Images/MainNew.png';
import im from './Images/400x400.png';
import MediaQuery from 'react-responsive';
//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function MainNew() {
    
  return (
<div class="container">
 
    
    
<MediaQuery minWidth={1151}>
    <div class="row">
    
    <div class="col col-sm-6">
        <div class=" nav_link black-1 row" style={{textAlign:'left', fontSize:'25px', padding:'0px'}}> 
        Lorem ipsum dolor sit amet, consectetur adipi<p class="row d-none d-sm-block"></p>
        </div> <p class="row d-none d-sm-block"></p>
        <div class="row info d-none d-sm-block" style={{textAlign:'left'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut ultricies sapien, in semper metus. Sed.  </div>
        <p class="row d-none d-sm-block"> </p>
        <div class="date row">April 24</div>
    </div>

    <div class="col-2 col-sm-6">
    <img class="img-fluid" src={im}></img>
    

    </div>
    </div>
    
    </MediaQuery>
     
     <MediaQuery maxWidth={1150}>
<div className='container'>
     <div class="row">
    
    <img className="container-fluid px-0" style={{ float: 'left', marginLeft:'0px',marginRight: '20px' }} src={im}></img>
    </div>

    <div class="row">
        <div class=" nav_link black row btn"style={{textAlign:'left', fontSize:'25px'}}> 
        Lorem ipsum dolor sit amet, consectetur adip 
        </div> 
        
        <div class="row info d-none d-sm-block"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut ultricies sapien, in semper metus. Sed.  </div>
       
        <div class="date row">April 24</div>
        </div>

  </div>

     </MediaQuery>
    

  

</div>

  );
}

export default MainNew;