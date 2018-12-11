import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartItems from './components/CartItems';
import AddItemForm from './components/AddItemForm';
class App extends Component {
  
  state = {
  
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
  }
  
  _handleSubmit = (item) => {
    this.setState(({cartItemsList}) => {
      item.id = this.state.cartItemsList.length + 1
      let newList = [...cartItemsList, item]

      return item.product && item.quantity ? {cartItemsList : newList} : cartItemsList
      
    })
  }

  render() {
    let copyright = '2016'

    return (
      <div>
        <Header/>
        <CartItems cartItemsList={this.state.cartItemsList} />
        <AddItemForm products={this.state.products} _handleSubmit={this._handleSubmit}/>
        <Footer copy={copyright}/>
      </div>
    );
  }
}

export default App;
