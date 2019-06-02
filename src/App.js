import React, {Component} from 'react';
import './App.css';
import ProductItem from './ProductItem';
import AddItem from './AddItem';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      products:[] 
    }
  }

  componentWillMount(){
    const products = JSON.parse(localStorage.getItem('products'));

    this.setState({
      products:products
    });

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onDelete(name){
    const products = JSON.parse(localStorage.getItem('products'));

    const filteredProducts = products.filter(product => {
        return product.name !== name;
    });

    this.setState({
      products:filteredProducts
    },
    ()=> localStorage.setItem('products',JSON.stringify(this.state.products)))
  }

  onAdd(formData) {
    const newProducts = [...this.state.products,formData];

    this.setState({products:newProducts},
      ()=> localStorage.setItem('products',JSON.stringify(newProducts)));
  }
   
  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>

        <AddItem 
          onAdd={this.onAdd}
        />

        {
          this.state.products.map(product =>{
            return (
              <ProductItem
                key={product.name}
                name={product.name}
                price={product.price}
                onDelete={this.onDelete}
                />
            )
          })
        }
      </div>
    );
  }
}

export default App;
