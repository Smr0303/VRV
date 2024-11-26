import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {startSecurity, stopSecurity} from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const SecureAndCreateButtons = () => {
  const secureStatus = useSelector((state) => state.auth.secureStatus);

  const userData = useSelector((state) => state.auth.userData);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSecureButton = ()=>{

    alert("Security is implemented at both frontend and backend. This button is to disable the security at frontend, so as to test the backend security. Please dont think of its significance !!");
    dispatch(secureStatus ? stopSecurity() : startSecurity());
  }

  const handleCreateTransaction = () => {

    if (!secureStatus || userData.user_role > 3) navigate('/create-transaction');

    else alert('You do not have the required privileges to access this resource');

  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
      <button
        onClick={handleSecureButton}
        className={`inline-block px-4 py-2 duration-200 hover:bg-gray-600 rounded-md shadow-md ${!secureStatus ? 'bg-[rgb(25,118,210)] text-white' : 'bg-red-500 text-white'}`}
      >
        {secureStatus ? "Reduce Security" : "Enhance Security"}
      </button>
      <button
        onClick={handleCreateTransaction}
        className={`inline-block px-4 py-2 duration-200 hover:bg-gray-600 rounded-md shadow-md bg-[rgb(25,118,210)] text-white`}
      >
        <span className="mr-2">+</span> Create Transaction
      </button>
    </div>
  );
};

export default SecureAndCreateButtons;