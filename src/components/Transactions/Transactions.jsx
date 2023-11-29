import React, { useEffect, useState } from 'react';
import './Transactions.scss';
import axios from "axios";
import ExpandMore from '../../assets/expand_more.svg';
import Download from '../../assets/download.svg';
import CallReceived from '../../assets/call_received.svg';
import Close from '../../assets/close.svg';


import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';


const Transactions = () => {
    

    const menuItems = [
        { text: 'Today' },
        { text: 'Last 7 days' },
        { text: 'This month' },
        
      ];

    const [transactions, setTransactions] = useState([]);

    const [showFilterBox, setShowFilterBox] = useState(false);

    const handleFilterButtonClick = () => {
        setShowFilterBox(!showFilterBox);
      };

      const handleCloseFilterBox = () => {
        setShowFilterBox(false);
      };


  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("https://fe-task-api.mainstack.io/transactions");
        setTransactions(response.data);
        console.log(transactions)
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);


  useEffect(() => {
    console.log("showFilterBox:", showFilterBox);
  }, [showFilterBox]);



    // Function to format the date in "Month day, year" format
    const formatDate = (dateString) => {
        const options = { month: 'long', day: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
      };


     { /*useEffect(() => {
        // Handle scrolling behavior when the filter box is active
        const handleScroll = () => {
          if (showFilterBox) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = 'auto';
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          // Cleanup: remove the event listener when the component unmounts
          window.removeEventListener('scroll', handleScroll);
        };
      }, [showFilterBox]);*/}

      useEffect(() => {
        document.body.style.overflow = showFilterBox ? 'hidden' : 'auto';
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [showFilterBox]);


  return (
    <div className='transactions-conatainer-main'>
        <div className='transaction-top-container'>
            
            <div className='transaction-info-text'>
                <div className='transaction-text12'> {transactions.length} Transactions</div>
                <div className='info-text22'> Your transactions for All Time</div>

            </div>

            <div className='transaction-button'>
             
                <div className='filter-button' onClick={handleFilterButtonClick}>
                    <span className='button-text1'>Filter</span>
                    <span className='button-text2'>{transactions.length}</span>

                    <img src={ExpandMore} alt='expand-more'/>

                </div>

                <div className='export-button'>
                    <span className='export-text'>Export list</span>

                    <img src={Download} alt='download' />

                </div>

            </div>
           

        </div>

        <div>


        </div>


         {transactions.map((transaction, index) => (
            <div className='transaction-bottom-container' key={index}>
                <div className='transaction-left'> 

                <div className='call-received-container'>
                    <img src={CallReceived} alt='call-received' className='call-received'/>
                </div>
                    
                     
                   
                    <div className='transaction-left-container'>
                        <div className='transaction-left-text3'>{transaction.metadata?.product_name}</div>
                        <div className='transaction-left-text4'>{transaction.metadata?.name}</div>
                    </div>

                </div>

                <div className='transaction-right'>
                    <div className='transaction-amount'>USD {transaction.amount}</div>
                    <div className='transaction-date'>{formatDate(transaction.date)}</div>

                </div>

            </div>
          ))}

          
<div className={`overlay${showFilterBox ? ' visible' : ''}`} onClick={handleCloseFilterBox}></div>

   <div className={`filter-box-container${showFilterBox ? ' visible' : ''}`} >

   
                 
                <div className='top-container'>

                    <div className='top-text'>Filter</div>

                    <img src={Close} alt='close' className='close-icon' onClick={handleCloseFilterBox} />

                </div>

                 

                <div className='search-links-wrapper' >

                
                
        
            {menuItems.map((item, index) => (
        <ScrollMenu>
          <div className='group'>
            <span className='group-text'>{item.text}</span>
          </div>
          </ScrollMenu>    
      ))}                       

</div>

  <div className='date-filter-container'>

                 <span className='date-filter-header'>Date Range</span>

                    <div className='date-range-conatiner'>
                        
                        <div className='date-range'>
                            <span className='range-text'>17 Jul 2023</span>
                            <img src={ExpandMore} alt='expand-more' className='range-img'/>


                        </div>

                        <div className='date-range'>
                            <span className='range-text'>17 Jul 2023</span>
                            <img src={ExpandMore} alt='expand-more' className='range-img'/>


                        </div>

                        </div>

                    </div>



                    
                        <div className='transaction-type-status-container'>

                        <span className='type-header'>Transaction Type</span>


                        <div className='transaction-type-status'>

                            <span className='type-text'>Store Transaction</span>
                            <img src={ExpandMore} alt='expand-more' className='range-img'/>

                        </div>
                        </div>

                    
                        <div className='transaction-type-status-container'>
                        <span className='type-header'>Transaction Status</span>

                        <div className='transaction-type-status'>
                            <span className='type-text'>Successful</span>
                            <img src={ExpandMore} alt='expand-more' className='range-img'/>

                        </div>

                        </div>


                        <div className='modal-botton-conatiner'>

                            
                            <div className='clear-button-container'>Clear</div>

                            <div className='apply-button-container'>Apply</div>
                           
                            </div>

        </div>

    

  </div>

       
       
  )
}

export default Transactions