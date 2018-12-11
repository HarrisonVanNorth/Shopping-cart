import React from 'react';
import OneCartItem from './OneCartItem';
import Total from './Total';

const CartItems = ({cartItemsList}) => {
      let cartItem = cartItemsList.map(item => <OneCartItem key={item.id} item={item} />)

  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {cartItem}
        <Total cartItemList={cartItemsList}/>
      </div>
    </div>
  );
}

export default CartItems;