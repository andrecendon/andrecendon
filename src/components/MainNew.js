import React, { useState } from 'react';
import im from './Images/MainNew.png';
import MediaQuery from 'react-responsive';
import New from './New'
//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function MainNew() {
    
  return (
<>
    
    <div class="row">
        <div class="col-auto">
        <h3 class="it">Title </h3>
        </div>

        <div class="col-auto align-self-center">
        <MediaQuery minWidth={768}><p class="small mb-0 btn">More ></p></MediaQuery>
        </div>
    </div>

  <p></p>
  <div class="row">
    
    

   <div class="class=col-12 col-sm btn" style={{marginRight:'15px', marginLeft:'15px'}}>
   
    <div className='row'>
                <div class="col-6">
                    <div class="nav_link black row"> 
                    Lorem ipsum dolor sit amet, consectetur 
                    </div> <p></p>
                    <MediaQuery minWidth={992}>
                   <div className='row' style={{textAlign:'left', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit hendrerit massa a fermentum. Aliquam pretium. </div>
                   </MediaQuery>
                    <p></p><div class="date row">April 24</div>
                    
                </div>
                <div class="col">
                <img src={im} className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }}></img>
                
                </div>
                </div>
        
        
   </div>
   <div class="col-12 col-sm btn" style={{marginRight:'15px', marginLeft:'15px'}}> 
   <div className='row'>
                <div class="col-6">
                    <div class="nav_link black row"> 
                    Lorem ipsum dolor sit amet, consectetur 
                    </div> <p></p>
                    <MediaQuery minWidth={992}>
                   <div className='row' style={{textAlign:'left', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit hendrerit massa a fermentum. Aliquam pretium. </div>
                   </MediaQuery>
                    <p></p><div class="date row">April 24</div>
                    
                </div>
                <div class="col">
                <img src={im} className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }}></img>
                
                </div>
                </div>
        
        
   </div>
   <div class="col-12 col-sm btn " style={{marginRight:'15px', marginLeft:'15px'}}>
   <div className='row'>
                <div class="col-6">
                    <div class="nav_link black row"> 
                    Lorem ipsum dolor sit amet, consectetur 
                    </div> <p></p>
                    <MediaQuery minWidth={992}>
                   <div className='row' style={{textAlign:'left', fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit hendrerit massa a fermentum. Aliquam pretium. </div>
                   </MediaQuery>
                    <p></p><div class="date row">April 24</div>
                    
                </div>
                <div class="col">
                <img src={im} className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }}></img>
                
                </div>
                </div>
        
        
   </div>
    

  </div>
  &nbsp;
  <div className="btn d-block d-sm-none mx-auto col-10 btn border " style={{border:'white', color:'black'}}>More ></div>

  </>

  );
}

export default MainNew;