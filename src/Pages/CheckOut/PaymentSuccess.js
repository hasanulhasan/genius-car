import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
  const [order , setOrder] = useState({});
  const location = useLocation();
  const query = new URLSearchParams(location.search)
  const transactionId = query.get('transactionId')
  const orderTime = order?.paidAt

  useEffect(() => {
    fetch(`https://genius-car-server-pi-one.vercel.app/orders/by-transaction-id/${transactionId}`)
    .then(res=> res.json())
    .then(data=> setOrder(data))
  }
  , [transactionId])
  

  return (
    <div>
      <h1 className='text-center text-2xl font-extrabold'>Congratulation your order is Successful!</h1>
      <h1 className='text-center text-xl my-3'>Order Summary</h1>

      <div className="overflow-x-auto">
  <table className="table my-3 mx-auto w-1/2">
    {/* head */}
    <thead>
      <tr>
        <th>Order</th>
        <th>Info</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-base-200">
        <td>Name</td>
        <td>{order?.customerName}</td>
      </tr>
      <tr className="bg-base-200">
        <td>Phone</td>
        <td>{order?.phone}</td>
      </tr>
      <tr className="bg-base-200">
        <td>Service Name</td>
        <td>{order?.serviceName}</td>
      </tr>
      <tr className="bg-base-200">
        <td>Service Price</td>
        <td>{order?.price}</td>
      </tr>
      <tr className="bg-base-200">
        <td>Address</td>
        <td>{order?.address}</td>
      </tr>
      <tr className="bg-base-200">
        <td>TransactionId</td>
        <td>{order?.transactionId}</td>
      </tr>
      <tr className="bg-base-200">
        <td>Order Status</td>
        <td>{order?.paid !== 'true'? 'Paid':'Unpaid'}</td>
      </tr>
      <tr className="bg-base-200">
        <td>Paid at </td>
        <td>{orderTime}</td>
      </tr>
    </tbody>
  </table>
  <div className='flex justify-center my-2'>
  <button onClick={()=> window.print()} className="btn btn-primary print:hidden">Print Summary</button>
  </div>
</div>
    </div>
  );
};

export default PaymentSuccess;