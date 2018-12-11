import React from 'react';

class AddItemForm extends React.Component {
  
  state = {
        product: false, 
        quantity: false
  }
  
  _handleNumChange = (e) => {
    const {target} = e
    this.setState(() => {
      return{[target.name] : target.value}
    })
  }

  _handleChange = (e) => {
    const {target} = e
    this.setState(() => {
    return {[target.name] : JSON.parse(target.value)}
    })  
  } 
  
  _onSubmit = (e) => {
    e.preventDefault()
    if(this.state.product && this.state.quantity){
      this.props._handleSubmit(this.state)
    }
  }
  


  render() {
    const {products} = this.props
    let option = products.map((product) => <option key={product.id} value={JSON.stringify(product)} >{product.name}</option>)
    
    return (
  
      <div className="container my-3">
        <form onSubmit={this._onSubmit} className="list-group">
          <div className="form-group-item">
            <label htmlFor="quantity">Quantity</label>
            <div className="row">
              <input type="text" className="form-control" onChange={this._handleNumChange} name="quantity"/>
            </div>
          </div>
          <div className="form-group-item  my-2">
            <label htmlFor="product">Products</label>
            <div className="row">
              <select type="select" className="form-control" onChange={this._handleChange} name="product">
                <option>Select Product</option>
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