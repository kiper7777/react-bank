// import React, { useState } from "react";
import BackButton from "./BackButton";
import "./TransactionPage.css";
// import { click } from "@testing-library/user-event/dist/click";

const TransactionPage = () => {
  const handleBackButtonClick = () => {
    // Handle back button click logic here
    console.log("Back button clicked!");
  };

  return (
    <div className="page__transaction">
      <div className="header">
        <BackButton onClick={handleBackButtonClick} />
        <h1 className="header__transaction-title">Transaction</h1>
      </div>

      <span className="transaction__amount">+$100.20</span>

      <form className="form__transaction">
            
          
            <div className="card__transaction">
              <div className="card__transaction__content">
                <span className="card__transaction__content-name">Date</span>
                <p className="card__transaction__content-info">25 May, 15:20</p>
              </div>

              <hr className="transaction__divider" />

              <div className="card__transaction__content">
                <span className="card__transaction__content-name">Address</span>
                <p className="card__transaction__content-info">user123@mail.com</p>
              </div>

              <hr className="transaction__divider" />

              <div className="card__transaction__content">
                <span className="card__transaction__content-name">Type</span>
                <p className="card__transaction__content-info">Receive</p>
              </div>
            </div>
          
        
      </form>
    </div>
  );
};

export default TransactionPage;
