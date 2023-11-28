import React from 'react'
import './Navbar.scss'
import MainStack from '../../assets/mainstack-logo.svg';
import Home from '../../assets/home.svg';
import InsertChart from '../../assets/insert_chart.svg';
import Payment from '../../assets/payments1.svg';
import Group from '../../assets/group.svg';
import Widgets from '../../assets/widgets.svg';
import Notification from '../../assets/notifications.svg';
import Chat from '../../assets/chat.svg';
import Menu from '../../assets/menu.svg';



const Navbar = () => {
  return (
    <div className='nav-container'>

    <div className='logo-container'>
        <img src={MainStack} alt='main-stack' className='nav-logo' />
    </div>


    <div className='nav-links-container'>
        <div className='nav-links'>
            
            <img src={Home} alt='home' className='nav-links-icons'/>
            <span className='nav-links-text'>Home</span>

        </div>

        <div className='nav-links'>

        <img src={InsertChart} alt='insert-chart' className='nav-links-icons'/>
            <span className='nav-links-text'>Analytics</span>

        </div>

        <div className='nav-links'>

        <img src={InsertChart} alt='payment' className='nav-links-icons'/>
            <span className='nav-links-text'>Revenue</span>

        </div>

        <div className='nav-links'>

        <img src={Group} alt='group' className='nav-links-icons'/>
            <span className='nav-links-text'>CRM</span>

        </div>

        <div className='nav-links'>

        <img src={Widgets} alt='widget' className='nav-links-icons'/>
            <span className='nav-links-text'>Apps</span>

        </div>

    </div>


    <div className='nav-links-container2'>

        <div className='nav-links-icons-container'>
            <img src={Notification} alt='notification' className='nav-links-icons2'/>

        </div>

        <div className='nav-links-icons-container'>

        <img src={Chat} alt='chat' className='nav-links-icons2'/>

       </div>

       <div className='nav-link-menu-container'>

        <div className='menu-dark-text-wrapper'>

        <div className='menu-dark-text'>OJ</div>
        
        </div>

       

       <div className='menu-icon-container'>

         <img src={Menu} alt='menu' className='menu-icon' />
      
       </div>

      



       </div>

    </div>

    </div>
  )
}

export default Navbar