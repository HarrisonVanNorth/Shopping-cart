import React from 'react';

const OneCartItem = ({item}) => {
  const {product, quantity } = item
  let dollars = product.priceInCents / Math.pow(10,2)
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">{product.name}</div>
        <div className="col-md-2">{'$' + dollars}</div>
        <div className="col-md-2">{quantity}</div>
      </div>
    </div>
  );
}

export default OneCartItem;