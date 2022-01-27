import React, { useContext } from 'react';
import { countContext } from './../../context/countContext';
 

const Navbar = () => {
  const [count]=useContext(countContext)  
    return (
        <div>
          <h2>we will show context items in Navbar: {count}</h2>  
        </div>
    );
};

export default Navbar;