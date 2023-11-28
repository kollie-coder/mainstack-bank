import React from 'react'
import { Navbar, AppBar, Home } from './components';

import './App.scss';

const App = () => {
  return (
    <div>
        <Navbar />

<div className='appBar-container'>
  <AppBar />

  <div className='hero-content'>

    <Home/>
  
</div>



</div>

        

     
    </div>
  )
}

export default App