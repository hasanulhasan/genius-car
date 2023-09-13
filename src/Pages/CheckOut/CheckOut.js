import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, _id } = service;
  const { user } = useContext(AuthContext);
  // console.log(user)

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const address = form.address.value;
    const postCode = form.postCode.value;
    const currency = form.currency.value;

    const order = {
      service: _id,
      serviceName: title,
      customerName: name,
      email,
      phone,
      price,
      address,
      postCode,
      currency
    }
    console.log(order)
    //validation
    // if(phone.length < 11){
    //   alert('phone number should be 11 or more character')
    // }
    // fetch('https://genius-car-server-pi-one.vercel.app/orders', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(order)
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     // console.log(data)
    //     // if (data.acknowledged) {
    //     //   alert('order placed successfully')
    //     //   form.reset();
    //     // }
    //     window.location.replace(data.url)

    //   })
    //   .catch(e => console.error(e));

    fetch('https://genius-car-server-pi-one.vercel.app/api/bkash/payment/create', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        window.location.replace(data.bkashURL)

      })
      .catch(e => console.error(e));
  }

  return (
    <div className='my-10'>
      <form onSubmit={handlePlaceOrder}>
        <div className='text-center my-6'>
          <h2 className='text-4xl font-semibold'>Your are about to buy: {title}</h2>
          <h2 className='text-2xl mt-3'>Price : {price}</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
          <input type="text" name="firstName" placeholder="First Name" className="input input-ghost w-full input-bordered" required/>
          <input type="text" name="lastName" placeholder="Last Name" className="input input-ghost w-full input-bordered" required/>
          <input type="text" name="phone" placeholder="Your Phone" className="input input-ghost w-full input-bordered" required />
          <input type="text" name="postCode" placeholder="Post Code" className="input input-ghost w-full input-bordered" required />
          <select name='currency' className="select select-bordered w-full" required>
            <option>BDT</option>
            <option>USD</option>
          </select>
          <input type="text" name="email" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" required/>
        </div>
        <textarea name="address" className="textarea textarea-bordered h-24 w-full my-5" placeholder="Address"></textarea>
        <div className='flex justify-evenly'>
          {/* <button className="btn btn-wide btn-secondary">Place your Order</button> */}
          <button className="btn btn-wide btn-primary">Pay with BKash</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;