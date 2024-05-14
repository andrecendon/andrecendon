import React, { useState } from 'react';
import im from './Images/100x100.png';
//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function SingUp() {
    
  return (

   
<div class="container">

<p></p>
 <h3>Sign up for Breaking News Alerts</h3> 
 <p className='d-none y d-sm-block'>Be in the know. Get the latest breaking news delivered straight to your inbox.</p>
 <div className='row'>
 <div className='col-2 '>  <img src={im} style={{ maxWidth: '100%', height: 'auto' }} />
</div>

    <div className='col'>
        <div className='row'>

        <input className='col-8' type="text" placeholder="Enter your email" />
        <button className='col-3' style={{marginLeft:'10px', backgroundColor: 'maroon', color: 'white' }}>Sing Up</button>
        </div>
        <p> </p>
        <div className='row' style={{fontSize:'8px', color:'grey'}}><p ><div>
        By signing up, you agree to the CBS <span className='nav_link1' style={{textDecorationLine:'underline' }}>Terms of Use</span> and acknowledge the data practices in our <span className='nav_link1' style={{textDecorationLine:'underline' }}>Privacy Policy.</span>
</div>
</p></div>
 
        <div className='row'></div>

        <div className='row' style={{fontSize:'8px', color:'grey'}}> 
        <input className='col-1' type="checkbox" style={{ transform: 'scale(.5)' }} /> 
        <div className='col'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nulla a metus ullamcorper porta. Phasellus rutrum dui id arcu pulvinar volutpat. Nullam. </div>
        </div>
        <p></p>
        <div className='row btn d-none d-sm-block' style={{width: '100%', textAlign:'center', cursor:'pointer', fontSize:'10px', fontWeight:'bold'}}>See all Newsletters  > </div>

    </div>
    

 </div>
        
    

  

</div>

  );
}

export default SingUp;