import React, { useState } from 'react';
import im from './Images/600x400.png';
import MediaQuery from 'react-responsive';
import New from './New'
import New_Lateral_Im from './New_Lateral_Im';
import Background_Title from './Background_Title';
//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function ThirdNew() {
    
  return (

   

<>
     
<div className='row' style={{fontSize:'36px', fontWeight:'bold', marginTop:'30'}}>
  <p >
  Lorem ipsum dolor <span className='nav_link1' style={{fontSize:'8px',cursor:'pointer' }}>More > </span> 
</p></div>

   

     
    <div className='row'>
    <div className='col-9'>
    <div className='row ' style={{marginLeft:'4px'}}>
    
    
    <div class="col">
        <div class=" nav_link black-1 row" style={{textAlign:'left', fontSize:'22px', padding:'0px'}}> 
        Lorem ipsum dolor sit amet, consectetur adipi<p class="row d-none d-sm-block"></p>
        </div> <p class="row d-none d-sm-block"></p>
        <div class="row info d-none d-sm-block" style={{textAlign:'left'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut ultricies sapien, in semper metus. Sed.  </div>
        <p class="row d-none d-sm-block"> </p>
        <div class="date row">April 24</div>
    </div>

    <div class="col-8">
    <img class="img-fluid" src={im}></img>
    
    </div>
    

    </div>
    <div className='row' style={{marginTop:'30px'}}>
      <div className='col'><Background_Title></Background_Title></div> 
      <div className='col'><Background_Title></Background_Title></div>
      <div className='col'><Background_Title></Background_Title> </div>
    </div>
    </div>
    <div className='col-3 '>
        <div className='row' ><Background_Title></Background_Title> </div>
        <div className='row' style={{marginTop:'10px'}}><Background_Title></Background_Title> </div>

    </div>
    
    </div>
   
     
 </>



  );
}

export default ThirdNew;





