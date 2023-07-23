import React from 'react'
import CoinCard from './CoinCard'
import Tabs from './Tabs'
import '../styles/dashboard.css'
import CustomButton from './CustomButton'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
            <CoinCard/>
            <Tabs/>
            <section className="buysellBtns">
            <CustomButton color="#1a84f0" text="Buy BTC"/>
            <CustomButton color="#fc4b8a" text="Sell BTC" />
            </section>
    </div>
  )
}

export default Dashboard