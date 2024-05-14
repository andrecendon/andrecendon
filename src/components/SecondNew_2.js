
import im from './Images/600x400.png';

import New_Lateral_Im from './New_Lateral_Im';
//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function SecondNew_2() {
    
  return (

   
<div class="container">

 

    
        <div class="  row " style={{fontWeight:'bold',textAlign:'left', marginBottom:'5px'}}> 
        Lorem ipsum dolor sit amet  
        </div> 
        
  
        <div class="row">
    
    <img className="container-fluid px-0" src={im}></img>
    </div>

       
       
    

       
                
                    <div class="font-size-10 nav_link black-2 row text-sm"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </div> 
                
                    <div class="date row">April 24</div>
                    
               
                
 
                    &nbsp;
     <New_Lateral_Im></New_Lateral_Im>
     &nbsp;
     <New_Lateral_Im></New_Lateral_Im>
     &nbsp;
     <New_Lateral_Im></New_Lateral_Im>
     &nbsp;
     <New_Lateral_Im></New_Lateral_Im>
     &nbsp;
     <New_Lateral_Im></New_Lateral_Im>
     

     &nbsp;
     <div className="btn d-block  mx-auto col-10 btn border " style={{border:'white',cursor:'pointer'}}>More ></div>

 

</div>

  );
}

export default SecondNew_2;