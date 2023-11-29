import React from 'react'
import Hero from '../Hero/Hero';
import Transactions from '../Transactions/Transactions';
import './Home.scss';


const Home = () => {
  return (
    <div className='transaction-container-main'>
        <Hero />

        <Transactions />

        
    </div>
  )
}

export default Home