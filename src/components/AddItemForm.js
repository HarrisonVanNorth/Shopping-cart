import React from 'react';

class AddItemForm extends React.Component {
  
  state= {
        item: { id: null , product: null, quantity: null}
  }
  
  _handleChange = (e) => {
    const {target} = e
      console.log(target.value)
    this.setState((currentState) => {
      currentState.item.id = Math.floor(Math.random(10))
      currentState.item[target.name] = JSON.parse(target.value)
    })  
  } 
  
  _onSubmit = (e) => {
    e.preventDefault()
    this.props._handleSubmit(this.state.item)
  }
  
  render(){
    const {products} = this.props
    let option = products.map((product) => <option key={product.id} value={JSON.stringify(product)} >{product.name}</option>)
    
    return (
  
      <div className="container">
        <form onSubmit={this._onSubmit} className="list-group">
          <div className="form-group-item">
            <label htmlFor="quantity">Quantity</label>
            <div className="row">
              <input type="text" className="form-control" onChange={this._handleChange} name="quantity"/>
            </div>
          </div>
          <div className="form-group-item">
            <label htmlFor="product">Products</label>
            <div className="row">
              <select type="select" className="form-control" onChange={this._handleChange } name="product">
                {option}
              </select>
            </div>
          </div>
          <div className="form-group-item">
            <br/>
            <div className="row">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
      
    )
  }
}

export default AddItemForm