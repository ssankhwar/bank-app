import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import { depositMoney, withdrawMoney } from '../state/action-creators/actions';


const Bank = () => {

  const amount = useSelector(state => state.amount);
   const dispatch = useDispatch();

  const handleClickDeposit = (e)=>{
    e.preventDefault();
    dispatch(depositMoney(100))
  }

  const handleClickWithdraw = (e)=>{
     e.preventDefault();
    dispatch(withdrawMoney(100))
  }
 

  return (
    <h1>
  <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="card shadow-lg p-4 text-center" style={{ width: "350px", borderRadius: "15px" }}>
    
    <h3 className="fw-bold text-primary mb-3">
      State Bank of Shubham
    </h3>

    <p className="text-muted mb-1">Available Balance</p>

    <h2 className={`fw-bold text-${amount > 0 ?  "success" : "danger"} mb-4`}>
      ₹ {amount.toLocaleString()}
    </h2>

    <div className="d-flex justify-content-between">
      <button className="btn btn-success px-4" onClick={handleClickDeposit}>
        Deposit
      </button>

      <button className="btn btn-danger px-4" onClick={handleClickWithdraw}>
        Withdraw
      </button>
    </div>

  </div>
</div>
</h1>
  )
}

export default Bank
