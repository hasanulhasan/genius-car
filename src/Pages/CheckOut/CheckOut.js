import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, _id } = service;
  const user = useContext(AuthContext);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      customerName: name,
    }


  }

  return (
    <div className='my-10'>
      <form onSubmit={handlePlaceOrder}>
        <div className='text-center my-6'>
          <h2 className='text-4xl'>Your are about to buy: {title}</h2>
          <h2 className='text-2xl mt-3'>Price : {price}</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
          <input type="text" name="firstName" placeholder="First Name" className="input input-ghost w-full input-bordered" />
          <input type="text" name="lastName" placeholder="Last Name" className="input input-ghost w-full input-bordered" />
          <input type="text" name="phone" placeholder="Your Phone" className="input input-ghost w-full input-bordered" />
          <input type="text" name="email" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" />
        </div>
        <textarea name="message" className="textarea textarea-bordered h-24 w-full my-5" placeholder="Bio"></textarea>
        <div className='flex justify-center'>
          <button className="btn btn-wide btn-secondary">Place your Order</button>
        </div>

      </form>
    </div>
  );
};

export default CheckOut;