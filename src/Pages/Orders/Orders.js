import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState({});
  // console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [user?.email])

  return (
    <div>
      <h1 className='text-5xl my-6 text-center'>you have {orders.length} order</h1>
      <div className="overflow-x-auto w-full my-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Service Info</th>
              <th>Favorite Color</th>
              <th>Your Comment</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(order => <OrderRow
                key={order._id}
                order={order}
              ></OrderRow>)
            }
          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Service Info</th>
              <th>Favorite Color</th>
              <th>Your Comment</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Orders;