import React from 'react';
import './LowerNav.css';
import { Link } from 'react-router-dom';

function LowerNav() {
  return (
    <div className='LowerNavContainer'>
      <ul className='pages'>
         <Link className='link' to='/'>
          <li className='item'>
            Home
          </li>
        </Link>
         <Link className='link' to='/products'>
          <li className='item'>
            Products
          </li>
        </Link>
         <Link className='link' to='/about'>
          <li className='item'>
            About
          </li>
        </Link>
        <Link className='link' to='/users'>
          <li className='item'>
            Users
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default LowerNav