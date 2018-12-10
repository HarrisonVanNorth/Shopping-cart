import React from 'react';

const OneCartItem = ({item}) => {
  const {id, product, quantity } = item
  console.log( id,product,quantity)

  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">{product.name}</div>
        <div className="col-md-2">{product.priceInCents}</div>
        <div className="col-md-2">{quantity}</div>
      </div>
    </div>
  );
}

export default OneCartItem;