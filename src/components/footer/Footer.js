import React, { useContext } from 'react';
import { countContext } from './../../context/countContext';

const Footer = () => {
const [count]=useContext(countContext)
    return (
        <div>
            <h3>footer section is ready: {count}</h3>
        </div>
    );
};

export default Footer;