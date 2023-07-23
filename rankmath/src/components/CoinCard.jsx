import React, { useState } from 'react'
import {FaBtc} from 'react-icons/fa'
import {MdExpandMore,MdExpandLess} from 'react-icons/md'
import CustomButton from './CustomButton'

const CoinCard = () => {
    const[isCardExpaned,setIsCardExpanded] = useState(false);
    const handleCardExpand =()=>{
        setIsCardExpanded(!isCardExpaned);
    }
  return (
    <div className={`${isCardExpaned ? "coin-card expanded":"coin-card"}`}>
        <section className="coin-name">
            <h3 className="coin"><FaBtc className='btcIcon' color='white' size="42"/>  Bitcoin</h3>
            <h3 className="symbol">BTC</h3>
        </section>
        <section className="values">
            <h2 className="wallet-money">3.529020 BTC</h2>
            <div className="usd-rate">
                <h3 className="usd-price">$19.153 USD</h3>
                <h3 className="rate">-2.32%</h3>
            </div>
        </section>
        {
            isCardExpaned && (
                <section className="buy-and-sell">
            <CustomButton color="#1a84f0" text="Buy BTC"/>
            <CustomButton color="#fc4b8a" text="Sell BTC" />
            </section>
            )
        }
        <section className="card-dropdown">
            <button onClick={handleCardExpand}>
                {isCardExpaned ? <MdExpandLess size="42"/> : <MdExpandMore size="42"/>}
                </button>
        </section>
    </div>
  )
}

export default CoinCard