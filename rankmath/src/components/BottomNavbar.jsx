import React from 'react';
import {FaWallet,FaCompass,FaBell} from 'react-icons/fa'
import {IoMdSettings} from 'react-icons/io'
import '../styles/bottomnav.css'

const BottomNavbar = ({ activeBottomTab, setActiveBottomTab }) => {
  return (
    <div className='bottom-navbar'>
      <div
        className={`nav-icon ${activeBottomTab === 'wallet' ? 'active' : ''}`}
        onClick={() => setActiveBottomTab('wallet')}
      >
        <FaWallet/>
      </div>
      <div
        className={`nav-icon ${activeBottomTab === 'navigation' ? 'active' : ''}`}
        onClick={() => setActiveBottomTab('navigation')}
      >
        <FaCompass/>
      </div>
      <div
        className={`nav-icon ${activeBottomTab === 'notification' ? 'active' : ''}`}
        onClick={() => setActiveBottomTab('notification')}
      >
        <FaBell/>
      </div>
      <div
        className={`nav-icon ${activeBottomTab === 'settings' ? 'active' : ''}`}
        onClick={() => setActiveBottomTab('settings')}
      >
        <IoMdSettings/>
      </div>
    </div>
  );
};

export default BottomNavbar;
