import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard';
import './App.css';
import BottomNavbar from './components/BottomNavbar';

const App = () => {
  const [activeBottomTab, setActiveBottomTab] = useState('wallet');

  const renderTabContent = () => {
    switch (activeBottomTab) {
      case 'wallet':
        return <Dashboard />;
      case 'navigation':
        return <div>Navigation Tab Content</div>;
      case 'notification':
        return <div>Notification Tab Content</div>;
      case 'settings':
        return <div>Settings Tab Content</div>;
      default:
        return null;
    }
  };
  return (
    <div className='App'>
      <Navbar/>
      {renderTabContent()}
      <BottomNavbar activeBottomTab={activeBottomTab} setActiveBottomTab={setActiveBottomTab} />
    </div>
  )
}

export default App