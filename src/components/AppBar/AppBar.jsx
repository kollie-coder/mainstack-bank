import React from 'react';
import ProductIcon from '../../assets/Product Icons.svg';
import Vector from '../../assets/vector.svg';
import Vector2 from '../../assets/vector2.svg';
import ProductIcon2 from '../../assets/Product Icons2.svg';

import "./AppBar.scss";



const AppBar = () => {
  return (
    <div className='main-container'>
    <div className='group'>
      <div className='wrapper'>
        <img src={ProductIcon} alt='product-icon' className='img'/>
      </div>
      <div className='box'>
        <div className='wrapper-2'>
        <img src={Vector} alt='product-icon' className='img-2'/>
        </div>
      </div>
      <div className='section'>
        <div className='section-2'>
        <img src={Vector2} alt='product-icon' className='img-3'/>
        </div>
      </div>
      <div className='wrapper-3'>
      <img src={ProductIcon2} alt='product-icon' className='img-4'/>
      </div>
    </div>
  </div>
  )
}

export default AppBar