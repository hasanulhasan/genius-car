import React from 'react';

const ServiceCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text-orange-400 text-2xl font-semibold'>Price : {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info btn-outline btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;