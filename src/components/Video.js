import MediaQuery from 'react-responsive';
import vid from './Images/pr.mp4'
import vid2 from './Images/pr2.mp4'
//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function Video({color}) {
    
  return (

<div>
<MediaQuery minWidth={980}>
<div style={{backgroundColor:color, color:'white'}}>


<div className='container'>

<div className='row' style={{fontSize:'36px', color:'white'}}>
  <p ><p></p>
  Lorem ipsum dolor 
</p></div>

<div className='row'>
  <div className='col-2' style={{marginLeft:'12px'}}>
    <div className='row'>CBS NEWS </div><p></p>
    <div className='row' style={{fontSize:'12px'}}>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum faucibus est, ut tincidunt nisl condimentum sit amet. Aenean consequat sapien mauris, eu porta neque. </div>
  </div>
  <div className='col' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
  <video src={vid} controls style={{ width: '100%', maxWidth: '100%', height: 'auto', marginRight:'28px' }}></video>
    
  </div>
</div>
<div className='row' style={{ margin: '6px' }} >
  <div className='col-sm' >
  <div class="container">

<div class="row">

<video className="container-fluid px-0" controls src={vid2} style={{marginRight:'2px'}}></video>
</div>


    <div class="nav_link row" style={{marginTop:'10px',marginBottom:'10px', fontWeight:'bold',cursor: 'pointer', lineHeight: '1',fontSize:'14px'}}> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    </div> 

    <div class="date row">April 24</div>
</div>
  </div>
  <div className='col-sm'>
  <div class="container">

<div class="row">

<video className="container-fluid px-0" controls src={vid2} style={{marginRight:'2px'}}></video>
</div>


    <div class="nav_link row" style={{marginTop:'10px',marginBottom:'10px', fontWeight:'bold',cursor: 'pointer', lineHeight: '1',fontSize:'14px'}}> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    </div> 

    <div class="date row">April 24</div>
</div>  </div>
  <div className='col-sm' style={{ marginRight: '10px' }}>
  <div class="container">

<div class="row">

<video className="container-fluid px-0" controls src={vid2} style={{marginRight:'2px'}}></video>
</div>


    <div class="nav_link row" style={{marginTop:'10px',marginBottom:'10px', fontWeight:'bold',cursor: 'pointer', lineHeight: '1',fontSize:'14px'}}> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    </div> 

    <div class="date row">April 24</div>
</div>  </div>
  <div className='col-sm' style={{ marginRight: '10px' }}>
  <div class="container">

<div class="row">

<video className="container-fluid px-0" controls src={vid2} style={{marginRight:'2px'}}></video>
</div>


    <div class="nav_link row" style={{marginTop:'10px',marginBottom:'10px', fontWeight:'bold',cursor: 'pointer', lineHeight: '1',fontSize:'14px'}}> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    </div> 

    <div class="date row">April 24</div>
</div>  </div>
</div>

<div className="btn d-block d-sm-none mx-auto col-10 btn border " style={{border:'white', pointerEvents: 'none', color:'white'}}>More</div>


</div>
&nbsp;

</div>
</MediaQuery>

<MediaQuery maxWidth={979}>
<div className="container" style={{color:'white'}}>
      <div className="background-image" >
      <div className='row' style={{margin:'10px', alignContent:'left'}}>
      <p></p>
      <video controls src={vid} ></video>        
      </div>
      <div className="nav_link" style={{fontSize:'32px', color:'white', marginLeft:'16px'}}  >Lorem ipsum dolor Lorem</div>
        <div style={{fontSize:'8px', color:'white', marginLeft:'16px'}}>April 24</div> &nbsp;

        <div className='row' style={{margin:'10px'}}>
          <div className='col' >
                <div class="container">

                <div class="row">

              
                <video className="container-fluid px-0" controls src={vid2} ></video>  
                </div>

                <div class="row px-0">
                    <div class=" nav_link row" style={{fontSize:'8px'}}> 
                    Lorem ipsum dolor sit amet  consectetur 
                    </div> 
                    <p class="row d-none d-sm-block"></p>
                  
                    <div class="date row">April 24</div>


                </div>

                </div>
          </div>
          <div className='col'>
          <div class="container">

<div class="row">

<video className="container-fluid px-0" controls src={vid2} ></video>  
</div>

<div class="row px-0">
    <div class=" nav_link row" style={{fontSize:'8px'}}> 
    Lorem ipsum dolor sit amet  consectetur 
    </div> 
    <p class="row d-none d-sm-block"></p>
  
    <div class="date row">April 24</div>


</div>

</div>
          </div>
          <div className='col'>
          <div class="container">

<div class="row">

<video className="container-fluid px-0" controls src={vid2} ></video>  
</div>

<div class="row px-0">
    <div class=" nav_link row" style={{fontSize:'8px'}}> 
    Lorem ipsum dolor sit amet  consectetur 
    </div> 
    <p class="row d-none d-sm-block"></p>
  
    <div class="date row">April 24</div>


</div>

</div>
          </div>
          <div className='col'>
          <div class="container">

<div class="row">

<video className="container-fluid px-0" controls src={vid2} ></video>  
</div>

<div class="row px-0">
    <div class=" nav_link row" style={{fontSize:'8px'}}> 
    Lorem ipsum dolor sit amet  consectetur 
    </div> 
    <p class="row d-none d-sm-block"></p>
  
    <div class="date row">April 24</div>


</div>

</div>
          </div>
          <p></p>
          <div className="btn mx-auto col-10 btn border " style={{border:'white', pointerEvents: 'none', color:'white', marginBottom:'20px', cursor:'pointer'}}>More</div> 
        </div>
        


      </div>
    </div>

</MediaQuery>
</div>

  );
}

export default Video;

