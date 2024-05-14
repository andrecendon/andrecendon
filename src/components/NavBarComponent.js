import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import x from './Images/x.png';
import boton from './Images/boton.png';
import title from './Images/TITLE.png';
import p from './Images/threePoints.png';
import len from './Images/len.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import MediaQuery from 'react-responsive';
const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const [word, setWord] = useState(0); // Inicializa word como un número, no como una cadena
  const [imageSrc, setImageSrc] = useState(boton);
  const handleMouseEnter = (number) => { // Recibe un número como argumento
    setOpen(true);
    setWord(number);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };
   
  const handleMouseClick = () => {
    setOpen(!open); 
    setImageSrc(open ? boton : x); 
  };
  
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div className='row'>
      <div className='col-4 d-flex align-items-center'>
      <MediaQuery minWidth={1200}> 
          <div className='row'style={{fontWeight:'bold', fontSize:'16px'}}>
        <span className='nav_link' style={{ position: 'absolute', left: '-10px' }} onMouseEnter={() => handleMouseEnter(0.006*window.innerWidth+-5)} onMouseLeave={handleMouseLeave}>
          Latest
        </span>
        <span className='nav_link' style={{ position: 'absolute', left: '90px' }} onMouseEnter={() => handleMouseEnter(0.006*window.innerWidth+90)} onMouseLeave={handleMouseLeave}>
          Shows
        </span>
        <span className='nav_link' style={{ position: 'absolute', left: '190px' }} onMouseEnter={() => handleMouseEnter(0.006*window.innerWidth+190)} onMouseLeave={handleMouseLeave}>
          Live
        </span>
        <span className='nav_link' style={{ position: 'absolute', left: '290px' }} onMouseEnter={() => handleMouseEnter(0.006*window.innerWidth+290)} onMouseLeave={handleMouseLeave}>
          Local News
        </span>
        <span className='nav_link' style={{ position: 'absolute', left: '390px' }} >
          <img src={p} onMouseEnter={() => handleMouseEnter(0.006*window.innerWidth+390)} onMouseLeave={handleMouseLeave}></img>
        </span>
      </div>
       </MediaQuery>

      <MediaQuery maxWidth={1199}>
    <img src={imageSrc} style={{ width: '25px', height: 'auto' }}  onClick={() => handleMouseClick()}></img>
      
    
      </MediaQuery>

      &nbsp;
      {open && (
        <MediaQuery minWidth={1200}> 
        <div className='col-2' style={{ position: 'absolute', top: '45px', left: word, backgroundColor: 'white', border: '1px solid #ccc', padding: '8px' }}  onMouseEnter={() => handleMouseEnter(word)} onMouseLeave={handleMouseLeave}>
          <div className='container'>
            <div className="row">
              <div className="col">
                <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                  <li className='nav_link2'>Item 1</li>
                  <li className='nav_link2' >Item 2</li>
                  <li className='nav_link2' >Item 3</li>
                  <li className='nav_link2' >Item 4</li>
                </ul>
              </div>
              <div className="col">
                <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                  <li className='nav_link2'  >Item A</li>
                  <li className='nav_link2' >Item B</li>
                  <li className='nav_link2' >Item C</li>
                  <li className='nav_link2' >Item D</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </MediaQuery>
         
        

      )}
      {open && (
        <MediaQuery maxWidth={1199}> 
        <div className='col-4' style={{ position: 'absolute', top: '35px', backgroundColor: 'white', border: '1px solid #ccc', padding: '8px' }}>
          <div className='container'>
            <div className="row">
             <div className='row' style={{marginLeft:'35px', fontWeight:'bold', cursor:'pointer'}}  >Latest</div>
              <div className="col">
                <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                  <li className='nav_link2' >Item 1</li>
                  <li className='nav_link2' >Item 2</li>
                  <li className='nav_link2' >Item 3</li>
                  <li className='nav_link2' >Item 4</li>
                </ul>
              </div>
              <div className="col">
                <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                  <li className='nav_link2' >Item A</li>
                  <li className='nav_link2' >Item B</li>
                  <li className='nav_link2' >Item C</li>
                  <li className='nav_link2' >Item D</li>
                </ul>
              </div>
            </div>
            <div className="row">
            <div className='row' style={{marginLeft:'35px', fontWeight:'bold',cursor:'pointer'}}  >Local News</div>
              <div className="col">
                <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                  <li className='nav_link2' >Item 1</li>
                  <li className='nav_link2' >Item 2</li>
                  <li className='nav_link2' >Item 3</li>
                  <li className='nav_link2' >Item 4</li>
                </ul>
              </div>
              <div className="col">
                <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                  <li className='nav_link2' >Item A</li>
                  <li className='nav_link2' >Item B</li>
                  <li className='nav_link2' >Item C</li>
                  <li className='nav_link2' >Item D</li>
                </ul>
              </div>
            </div>

            <div className="row">
            <div className='row' style={{marginLeft:'35px', fontWeight:'bold', cursor:'pointer'}}  >Live</div>
              <div className="col">
                <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                  <li className='nav_link2' >Item 1</li>
                  <li className='nav_link2'>  Item 2</li>
                  <li className='nav_link2' >Item 3</li>
                  <li className='nav_link2' >Item 4</li>
                </ul>
              </div>
              <div className="col">
                <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                  <li className='nav_link2' >Item A</li>
                  <li className='nav_link2' >Item B</li>
                  <li className='nav_link2' > Item C</li>
                  <li className='nav_link2' >Item D</li>
                </ul>
              </div>
            </div>

            <div className="row">
            <div className='row' style={{marginLeft:'35px', fontWeight:'bold',cursor:'pointer'}}  >Shows</div>
              <div className="col">
                <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                  <li className='nav_link2'>  Item 1</li>
                  <li className='nav_link2' >Item 2</li>
                  <li className='nav_link2' >Item 3</li>
                  <li className='nav_link2' >Item 4</li>
                </ul>
              </div>
              <div className="col">
                <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                  <li className='nav_link2' >Item A</li>
                  <li className='nav_link2' >Item B</li>
                  <li className='nav_link2' >Item C</li>
                  <li className='nav_link2' >Item D</li>
                </ul>
              </div>
            </div>


          </div>
        </div>

        </MediaQuery>
      )}
      </div>

      <div className='col-4 d-flex justify-content-center align-items-center'>
  <img src={title} style={{ width: '180px', marginTop:'10px'}}/>
</div>

      <div className='col-4 d-flex justify-content-end align-items-center'>
        <img src={len} style={{ width: '25px' }} />
      </div>

      </div>
    </div>
  );
}

export default NavbarComponent;
