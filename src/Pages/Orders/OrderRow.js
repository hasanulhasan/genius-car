import React, { useState } from 'react';
import { useEffect } from 'react';

const OrderRow = ({ order, handleDelete, handleEdit }) => {
  const { customerName, serviceName, price, email, phone, message, service, _id, status } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`https://genius-car-server-pi-one.vercel.app/services/${service}`)
      .then(res => res.json())
      .then(data => setOrderService(data))
  }, [service])

  return (
    <tr>
      <td>
        <button className="btn btn-square btn-outline" onClick={() => handleDelete(_id)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              {
                orderService?.img &&
                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
              }
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">{price}</span>
      </td>
      <td><button className="btn btn-square btn-outline" onClick={() => handleEdit(_id)}>
        {status ? status : 'pending'}
      </button></td>
      <th>
        <button className="btn btn-ghost btn-xs">{message}</button>
      </th>
    </tr>
  );
};

export default OrderRow;