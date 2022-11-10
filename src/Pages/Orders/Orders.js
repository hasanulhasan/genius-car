import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import OrderRow from './OrderRow';

const Orders = () => {
  useTitle('Orders')
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [user?.email])

  const handleDelete = id => {
    const proceed = window.confirm('are you sure to delete this item');
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount > 0) {
            alert('Data deleted successfully')
            const remaining = orders.filter(odr => odr._id !== id);
            setOrders(remaining);
          }
        })
    }
  }

  const handleEdit = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application.json'
      },
      body: JSON.stringify({ status: 'Approved' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter(odr => odr._id !== id)
          const approving = orders.find(odr => odr._id === id)
          approving.status = 'Approved'
          const newOrders = [...remaining, approving];
          setOrders(newOrders);
        }
      })
  }

  return (
    <div>
      <h1 className='text-5xl my-6 text-center'>you have {orders.length} order</h1>
      <div className="overflow-x-auto w-full my-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Delete</th>
              <th>Name</th>
              <th>Service Info</th>
              <th>Edit</th>
              <th>Your Comment</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(order => <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              ></OrderRow>)
            }
          </tbody>
          <tfoot>
            <tr>
              <th>Delete</th>
              <th>Name</th>
              <th>Service Info</th>
              <th>Edit</th>
              <th>Your Comment</th>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  );
};

export default Orders;