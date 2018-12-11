import React from 'react';

const Total = ({cartItemList}) => {
  console.log(cartItemList)
  let price = cartItemList.reduce((acc, item ) => {return acc + item.product.priceInCents}, 0) / 100
  let quantity = cartItemList.reduce ((acc, item) => {return acc + Number(item.quantity)}, 0)

  console.log(price)

  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">Total</div>
        <div className="col-md-2">{'$' + price}</div>
        <div className="col-md-2">{quantity}</div>
      </div>
    </div>

  )
}

export default Total