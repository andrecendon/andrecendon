import React, { useState } from 'react';

//To underline text if the mouse is on it
//in the function we have two events(enter and leave)
function CustomText() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ textDecoration: hovered ? 'underline' : 'none', display: 'inline-block' }}
    >
     
    </div>
  );
}

export default CustomText;

