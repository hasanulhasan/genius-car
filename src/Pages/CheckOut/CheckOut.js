import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
  const service = useLoaderData();
  const { title } = service;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default CheckOut;