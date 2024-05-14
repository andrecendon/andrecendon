
import './App.css';
//import './styles.css'; // Asegúrate de que la ruta sea correcta


import NavBarComponent from './components/NavBarComponent';


import MediaQuery from 'react-responsive';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
//Bootstrap tiene clases creadas, si se quiere añadir un 
//estilo concreto se modifica sobre App.css

import vid from './components/Images/pr.mp4'
import MainNew from './components/MainNew';
import LiveChannel from './components/LiveChannel';
import New from './components/New';
import SecondNew from './components/SecondNew';
import New_UP from './components/New_UP';
import New_Lateral from './components/New_Lateral';
import New_Lateral_Im from './components/New_Lateral_Im';
import Background_New from './components/Background_New';
import SingUp from './components/SingUp';
import Bottom from './components/Bottom';
import Video from './components/Video';
import Vineta from './components/Vineta';
import SecondNew_2 from './components/SecondNew_2';
import ThirdNew from './components/ThirdNew';


function App() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
 

  return (
    
    <>
   
    <hr></hr>
    
    <div className="container">

      <NavBarComponent/>
      
  
  </div><hr></hr> {/*to put separators in all width*/}<div className='container'>
  <div>
   

  <div className='row flex-sm-row text-align-left'>
  <div className='col' style={{ cursor: 'pointer' }}>
    <span style={{ fontWeight: 'bold' }}>U.S</span>
  </div>
  <div className="col" style={{ cursor: 'pointer' }}>
    <span style={{ fontWeight: 'bold' }}>World</span>
  </div>
  <div className="col" style={{ cursor: 'pointer' }}>
    <span style={{ fontWeight: 'bold' }}>Politics</span>
  </div>
  <div className="col" style={{ cursor: 'pointer' }}>
    <span style={{ fontWeight: 'bold' }}>HealthWatch</span>
  </div>
  <div className="col" style={{ cursor: 'pointer' }}>
    <span style={{ fontWeight: 'bold' }}>Entertainment</span>
  </div>
  <div className="col" style={{ cursor: 'pointer' }}>
    <span style={{ fontWeight: 'bold' }}>Crime</span>
  </div>
 
</div>




</div>

</div><hr></hr> {/*to put separators in all width*/}<div className='container'>

      
      
     
      
      <div class="row">
        <div class="col-md-8"> 
          <div class="row"><New></New></div>
          <p></p>
          <div class="row">
            <MediaQuery minWidth={769}>
            <div class="col-4"><New_UP></New_UP></div>
            <div class="col-4"><New_UP></New_UP></div>
            <div class="col-4"><New_UP></New_UP></div>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
            
            <video controls class="row img-fluid" src={vid} ></video>
            &nbsp;<p>&nbsp;</p> 
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
            </MediaQuery>
          </div>
        </div>
          
        <MediaQuery minWidth={769}>
        <div class="col-md-4">
        <video controls class="row img-fluid" src={vid} ></video>
          <div class="row"> 
          &nbsp;
              <New_Lateral></New_Lateral><p></p>
              &nbsp;
              <New_Lateral></New_Lateral><p></p>
              &nbsp;
              <New_Lateral></New_Lateral><p></p>
              &nbsp;
              <New_Lateral></New_Lateral><p></p>
              &nbsp;
              <New_Lateral></New_Lateral><p></p>
              &nbsp;
              <New_Lateral></New_Lateral><p></p>
          </div>

        </div>
        </MediaQuery>
      </div>
      
      
      </div><hr></hr> {/*to put separators in all width*/}<div className='container'>

      
     
      
      <div class="row">
        <div class="col-md-8"> 
          <div class="row"><New></New></div>
          <p></p>
          <div class="row">
            <MediaQuery minWidth={769}>
            <div class="col-4"><New_UP></New_UP></div>
            <div class="col-4"><New_UP></New_UP></div>
            <div class="col-4"><New_UP></New_UP></div>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
           
            &nbsp;<p></p>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
               <div className='row' style={{marginLeft:'12px', marginBottom:'12px'}}><New_Lateral_Im></New_Lateral_Im></div>
            </MediaQuery>
          </div>
        </div>
          
        <MediaQuery minWidth={769}>
        <div class="col" style={{marginLeft:'15px'}}>
          
          <div class="row" > 
          <New_Lateral_Im ></New_Lateral_Im> <p></p>
          <New_Lateral_Im></New_Lateral_Im> <p></p>
          <New_Lateral_Im></New_Lateral_Im> <p></p>
          <New_Lateral_Im></New_Lateral_Im> <p></p>
          <New_Lateral_Im></New_Lateral_Im> <p></p>
          <New_Lateral_Im></New_Lateral_Im> <p></p>
          </div>

        </div>
        </MediaQuery>
      </div>
          
      
      
  
    &nbsp;
      </div><hr></hr> {/*to put separators in all width*/}<div className='container'>

      <MainNew></MainNew>
      </div><hr></hr> {/*to put separators in all width*/}<div className='container'>

      <MainNew></MainNew>
      </div><hr></hr> {/*to put separators in all width*/}<div className='container'>

      <MainNew></MainNew>
      &nbsp;

      <p></p>
      

      
      </div> {/*We close the container to change the color, then open it, */ }
      <div style={{backgroundColor:'green', color:'white'}}>

      &nbsp;
      <div className='container'>

      <div className='row' style={{fontSize:'36px', color:'white', marginLeft:'12px'}}>
        <p >
        Lorem ipsum dolor <MediaQuery minWidth={768}> <span className='nav_link1'  style={{fontSize:'8px',cursor:'pointer' }}>More >  </span> </MediaQuery>
</p></div>
  

      <div className='row' style={{ margin: '6px' }} >
        <div className='col-sm' >
          <Background_New></Background_New>
        </div>
        <div className='col-sm'>
        <Background_New></Background_New>
        </div>
        <div className='col-sm' style={{ marginRight: '10px' }}>
        <Background_New></Background_New>
        </div>
      </div>

      <div className="btn d-block d-sm-none mx-auto col-10 btn border " style={{border:'white',cursor:'pointer', color:'white'}}>More ></div>
      

      </div>
      &nbsp;
    
    </div>
    
    &nbsp;
    <p></p>
   <div className='container'>
     
   <MediaQuery minWidth={750}>
      <ThirdNew></ThirdNew>
   </MediaQuery>
     
   </div><hr></hr> {/*to put separators in all width*/}<div className='container'>

    <MediaQuery maxWidth={749}>
      <SecondNew_2></SecondNew_2> &nbsp;
    </MediaQuery>
    </div><hr></hr> {/*to put separators in all width*/}<div className='container'>

    &nbsp;
    <p></p>

    </div> {/*We close the container to change the color, then open it, */ }

    
    <div style={{backgroundColor:'blue', color:'white'}}>

    &nbsp;
<div className='container'>

<div className='row' style={{fontSize:'36px', color:'white', marginLeft:'12px'}}>
  <p >
  Lorem ipsum dolor <MediaQuery minWidth={768}> <span className='nav_link1'  style={{fontSize:'8px',cursor:'pointer' }}>More >  </span> </MediaQuery>
</p></div>


<div className='row' style={{ margin: '6px' }} >
  <div className='col-sm' >
    <Background_New></Background_New>
  </div>
  <div className='col-sm'>
  <Background_New></Background_New>
  </div>
  <div className='col-sm' style={{ marginRight: '10px' }}>
  <Background_New></Background_New>
  </div>
</div> &nbsp;

<div className="btn d-block d-sm-none mx-auto col-10 btn border " style={{border:'white', cursor:'pointer', color:'white'}}>More ></div>


</div>
&nbsp;

</div>

<p></p>
<div class='container' style={{backgroundColor:'white'}}>
      
      <div className='row'>
   <div className='col-md-8 col-12 mx-auto'> <SingUp></SingUp> </div>
</div>
    
  </div> 
  &nbsp;
<p></p>
  
  <Video color="rgb(40,40,40)" />

  <div className='container'>
    
    
  &nbsp;

  <MediaQuery minWidth={'1000px'}>
<div className='row' style={{margin:'10px'}}>
      <button className="btn col-3" style={{fontSize:'10px', display: 'flex', alignItems: 'center', padding: '5px', border: '1px solid rgba(0, 0, 0, 0.2)'}}>
    <span style={{backgroundColor:'darksalmon', color:'white', padding: '5px 10px'}}>LIVE CHANNELS</span>
    <span className="linea-vertical" style={{width: '2px', height: '100%', backgroundColor: 'black', margin: '0 5px'}}></span>
    <span className="nav_link" style={{color:'black', fontSize:'8px'}}>Find your local channel ></span>
</button> 
<p></p>
     

      </div>
      <div className='row'>
      <div className='col'><Vineta></Vineta></div>
      <div className='col'><Vineta></Vineta></div>
      <div className='col'><Vineta></Vineta></div>
      <div className='col'><Vineta></Vineta></div>
    </div>
    </MediaQuery>

    <MediaQuery maxWidth={'999px'}>
      <h2 className='row' style={{marginLeft:'10px'}}>Live channels</h2>
      <div className='row'><LiveChannel></LiveChannel></div>
    </MediaQuery>
    
    </div> {/*We close the container to change the color, then open it, */ }

    &nbsp;<p></p>
       <Video color='orange' />
       &nbsp;<p></p>
       
       <div className='container'>
       <MediaQuery minWidth={750}>
      <ThirdNew></ThirdNew>
   </MediaQuery>
     
    
    <MediaQuery maxWidth={749}>
      <SecondNew_2></SecondNew_2>

    </MediaQuery>
    </div><hr></hr> {/*to put separators in all width*/}<div className='container'>

    &nbsp;
    <p></p>
    
    </div> {/*We close the container to change the color, then open it, */ }

    <Video color="blue" />
    &nbsp;<p></p>
    <div className='container'>
    <MediaQuery minWidth={750}>
      <ThirdNew></ThirdNew>
   </MediaQuery>
     
    
    <MediaQuery maxWidth={749}>
      <SecondNew_2></SecondNew_2>
    </MediaQuery>
    
    &nbsp;
    <p></p>
    </div><hr></hr> {/*to put separators in all width*/}<div className='container'>


    </div> {/*We close the container to change the color, then open it, */ }

    <Video color="blue" />
    &nbsp;<p></p>

    <div className='container'>
    
  <MediaQuery minWidth={750}>
    <div className='row'>
      <div className='col'><SecondNew></SecondNew></div>
      <div className='col'><SecondNew></SecondNew></div>
      <div className='col'><SecondNew></SecondNew></div>
      <div className='col'><SecondNew></SecondNew></div>
    </div>
    <div className='row'>
      <div className='col'><SecondNew></SecondNew></div>
      <div className='col'><SecondNew></SecondNew></div>
      <div className='col'><SecondNew></SecondNew></div>
      <div className='col'><SecondNew></SecondNew></div>
    </div>
    <div className='row'>
      <div className='col'><SecondNew></SecondNew></div>
      <div className='col'><SecondNew></SecondNew></div>
      <div className='col'><SecondNew></SecondNew></div>
      <div className='col'><SecondNew></SecondNew></div>
    </div>
    </MediaQuery>

    <MediaQuery maxWidth={749}>
    
      <SecondNew_2></SecondNew_2>
    </MediaQuery>

     
    </div><hr></hr> {/*to put separators in all width*/}<div className='container'>

    </div> {/*We close the container to change the color, then open it, */ }

    
    &nbsp;<p></p>
    <div class='row' style={{backgroundColor:'rgb(30, 30, 30)', color:'white'}}>
    <div class='container'>
      <Bottom></Bottom>
      
      </div>
    <p></p>

    
    
    </div> 
   
  
    </>
  );
  
}

export default App;
