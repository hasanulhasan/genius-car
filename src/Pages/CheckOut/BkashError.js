import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BkashError = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search)
  const message = query.get('message')
  console.log(message);
  let showMessage = null;

  if(message === 'cancel'){
    showMessage = 'You have cancel this order, Try it for next time'
  }
  if(message === 'failure'){
    showMessage = 'Payment failure problem, try again latter'
  }
  if(message === 'Insufficient Balance'){
    showMessage = 'Payment failure for Insufficient Balance, try again latter'
  }

  return (
    <div className='h-80'>
      <h1 className='text-4xl text-center my-4'> Something went wrong. <br/>{showMessage}. </h1>
      <div className='flex justify-center'>
      <Link to='/'>
      <button className="btn btn-wide btn-primary">Go Home</button>
      </Link>
      </div>
    </div>
  );
};

export default BkashError;