import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppBar from '../AppBar/AppBar';
import Info from '../../assets/info.svg';
import TransactionGraph from '../Graph/TransactionGraph';
import './Hero.scss';

const Hero = () => {
  const [walletData, setWalletData] = useState(null);

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const response = await axios.get("https://fe-task-api.mainstack.io/wallet");
        setWalletData(response.data);
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      }
    };

    fetchWalletData();
  }, []);

  return (
    <div className='balance-info-container-main'>
      <div className='balance-info-container-left'>
        <div className='balance-info-container'>
          <div className='balance-info1'>
            <div className='balance-info-text'>Available Balance</div>
            <div className='balance-info-fig'>USD {walletData?.balance || 0}</div>
          </div>
          <div className='withdraw-button-container'>
            <button className='withdraw-button'>Withdraw</button>
          </div>
        </div>
        <div className='balance-info-graph'>
          <TransactionGraph />
        </div>
      </div>

      <div className='balance-info-container-right'>
        <div className='balance-info-container2'>
          <div className='balance-info1'>
            <div className='balance-info-text2'>Ledger Balance</div>
            <div className='balance-info-fig2'>USD {walletData?.ledger_balance || 0}</div>
          </div>
          <div className='balance-info-icon'>
            <img src={Info} alt='info' className='info-icon' />
          </div>
        </div>

        <div className='balance-info-container2'>
          <div className='balance-info1'>
            <div className='balance-info-text2'>Total Payout</div>
            <div className='balance-info-fig2'>USD {walletData?.total_payout || 0}</div>
          </div>
          <div className='balance-info-icon'>
            <img src={Info} alt='info' className='info-icon' />
          </div>
        </div>

        <div className='balance-info-container2'>
          <div className='balance-info1'>
            <div className='balance-info-text2'>Total Revenue</div>
            <div className='balance-info-fig2'>USD {walletData?.total_revenue || 0}</div>
          </div>
          <div className='balance-info-icon'>
            <img src={Info} alt='info' className='info-icon' />
          </div>
        </div>

        <div className='balance-info-container2'>
          <div className='balance-info1'>
            <div className='balance-info-text2'>Pending Payout</div>
            <div className='balance-info-fig2'>USD {walletData?.pending_payout || 0}</div>
          </div>
          <div className='balance-info-icon'>
            <img src={Info} alt='info' className='info-icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
