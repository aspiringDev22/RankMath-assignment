import React, { useEffect, useState } from 'react';
import '../styles/tabs.css';
import CoinChart from './CoinChart';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('year');
  const [tabData, setTabData] = useState({
    day: [],
    week: [],
    month: [],
    year: [],
  });

  const getBTCData = async (timeframe, interval) => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${timeframe}&interval=${interval}&precision=3`);
      const response = await res.json();
      console.log(response.prices);
      const pricess = response.prices;
      const formattedData = pricess.map((item) => ({
        date: new Date(item[0]),
        price: item[1],
      }));
      return formattedData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const dayData = await getBTCData(1, 'hourly');
      const weekData = await getBTCData(7, 'daily');
      const monthData = await getBTCData(30, 'daily');
      const yearData = await getBTCData(365, 'daily');

      setTabData({
        day: dayData,
        week: weekData,
        month: monthData,
        year: yearData,
      });
    };

    fetchData();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='tabs-container'>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'day' ? 'active' : ''}`}
          onClick={() => handleTabClick('day')}
        >
          Day
        </button>
        <button
          className={`tab-button ${activeTab === 'week' ? 'active' : ''}`}
          onClick={() => handleTabClick('week')}
        >
          Week
        </button>
        <button
          className={`tab-button ${activeTab === 'month' ? 'active' : ''}`}
          onClick={() => handleTabClick('month')}
        >
          Month
        </button>
        <button
          className={`tab-button ${activeTab === 'year' ? 'active' : ''}`}
          onClick={() => handleTabClick('year')}
        >
          Year
        </button>
      </div>
      <div>
        <CoinChart data={tabData[activeTab]} />
      </div>
    </div>
  );
};

export default Tabs;
