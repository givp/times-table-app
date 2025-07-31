// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Timestable.fun | GNU GENERAL PUBLIC LICENSE | 
        <a href="https://github.com/givp/times-table-app" target="_blank" rel="noreferrer"> Github</a> | 
        <Link to="/privacy"> Privacy Policy</Link> | 
        <Link to="/support"> Support</Link>
      </p>
    </footer>
  );
}

export default Footer; 