import React, { useState } from "react";
import "./Balance.css";
import settings from "./svg/settings.svg";
import notifications from "./svg/notifications.svg"; 
import { click } from "@testing-library/user-event/dist/click";
import receive from "./svg/receive.svg";
import send from "./svg/send.svg";
import stripe from "./svg/stripe.svg";
import coinbase from "./svg/coinbase.svg";
import person from "./svg/person.svg";


const Balance = () => {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);

  const handleReceiveMoney = () => {
    // Simulate receiving money
    const receivedAmount = Math.floor(Math.random() * 100) + 1;
    setBalance(balance + receivedAmount);
    setTransactions([...transactions, {type: 'receive', amount: receivedAmount}]);
  };

  const handleSendMoney = () => {
    // Simulate sending money
    const sentAmount = Math.floor(Math.random() * 100) + 1;
    setTransactions([...transactions, {type: 'send', amount: sentAmount}]);
  };

  const handleSettingsClick = () => {
    // Handle back button click logic here
    console.log("Settings button clicked!");
  };

  const handleNotificationsClick = () => {
    // Handle back button click logic here
    console.log("Notifications button clicked!");
  };

   
  return (
    <div className="page__balance">
        <div className='page__balance__background-image'></div>
        <div className="header__content">

            <div className="header__balance">
                <img src={settings} alt="Settings Icon" className="header__balance-image" onClick={handleSettingsClick} />
                <h6 className="header__balance-title">Main wallet</h6>
                <img src={notifications} alt="Notifications Icon" className="header__balance-image" onClick={handleNotificationsClick}/>
            </div>
            
            <span className="balance__amount">$ 100.20</span>
            
        </div>

        <div className="balance__operations">

          <div className="balance__operation">
            <img src={receive} alt="Receive Icon" className='balance__operations-image' onClick={handleReceiveMoney}/> 
            <span className="balance__operations-text">Receive</span>
          </div>

          <div className="balance__operation">
            <img src={send} alt="Send Icon" className='balance__operation-image' onClick={handleSendMoney}/>
            <span className="balance__operations-text">Send</span>
          </div>
        </div>

        <form className="form__balance">
    
            <div className="card__balance">

                <div className="card__balance-transaction">
                  <div className="card__balance-transaction__block">
                    <img
                      src={stripe}
                      alt="Stripe Icon"
                      className="card__balance-transaction__image"
                      onClick={click}
                    />
                    <div className="card__balance-transaction__text">
                      <span className="card__balance-transaction__text-title">Stripe</span>
                      <p className="card__balance-transaction__text-description">12:25 - Receipt</p>
                    </div>
                  </div>
                  <div className="card__balance-transaction__amount">+$125.00</div>
                </div>

                <div className="card__balance-transaction">
                  <div className="card__balance-transaction__block">
                    <img
                      src={person}
                      alt="Person Icon"
                      className="card__balance-transaction__image"
                      onClick={click}
                    />
                    <div className="card__balance-transaction__text">
                      <span className="card__balance-transaction__text-title">Oleg V.</span>
                      <p className="card__balance-transaction__text-description">12:25 - Sending</p>
                    </div>
                  </div>
                  <div className="card__balance-transaction__amount">-$200.50</div>
                </div>

                <div className="card__balance-transaction">
                  <div className="card__balance-transaction__block">
                    <img
                      src={coinbase}
                      alt="Coinbase Icon"
                      className="card__balance-transaction__image"
                      onClick={click}
                    />
                    <div className="card__balance-transaction__text">
                      <span className="card__balance-transaction__text-title">Coinbase</span>
                      <p className="card__balance-transaction__text-description">10:20 - Receipt</p>
                    </div>
                  </div>
                  <div className="card__balance-transaction__amount">+$1250.00</div>
                </div>

                <div className="card__balance-transaction">
                  <div className="card__balance-transaction__block">
                    <img
                      src={stripe}
                      alt="Stripe Icon"
                      className="card__balance-transaction__image"
                      onClick={click}
                    />
                    <div className="card__balance-transaction__text">
                      <span className="card__balance-transaction__text-title">Stripe</span>
                      <p className="card__balance-transaction__text-description">12:25 - Receipt</p>
                    </div>
                  </div>
                  <div className="card__balance-transaction__amount">+$125.00</div>
                </div>

                <div className="card__balance-transaction">
                  <div className="card__balance-transaction__block">
                    <img
                      src={person}
                      alt="Person Icon"
                      className="card__balance-transaction__image"
                      onClick={click}
                    />
                    <div className="card__balance-transaction__text">
                      <span className="card__balance-transaction__text-title">Diana K.</span>
                      <p className="card__balance-transaction__text-description">12:25 - Sending</p>
                    </div>
                  </div>
                  <div className="card__balance-transaction__amount">-$125.00</div>
                </div>

                <div className="card__balance-transaction">
                  <div className="card__balance-transaction__block">
                    <img
                      src={stripe}
                      alt="Stripe Icon"
                      className="card__balance-transaction__image"
                      onClick={click}
                    />
                    <div className="card__balance-transaction__text">
                      <span className="card__balance-transaction__text-title">Stripe</span>
                      <p className="card__balance-transaction__text-description">12:25 - Receipt</p>
                    </div>
                  </div>
                  <div className="card__balance-transaction__amount">+$125.00</div>
                </div>

                <div className="card__balance-transaction">
                  <div className="card__balance-transaction__block">
                    <img
                      src={stripe}
                      alt="Stripe Icon"
                      className="card__balance-transaction__image"
                      onClick={click}
                    />
                    <div className="card__balance-transaction__text">
                      <span className="card__balance-transaction__text-title">Stripe</span>
                      <p className="card__balance-transaction__text-description">12:25 - Receipt</p>
                    </div>
                  </div>
                  <div className="card__balance-transaction__amount">+$125.00</div>
                </div>

            </div>
        </form>
    </div>
  );
};

export default Balance;
