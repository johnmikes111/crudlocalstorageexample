import React, {Component} from 'react';
import './App.css';
import ProductItem from './ProductItem';

const products =[
  {
    name:'Ipad',
    price:200
  },
  {
    name:'iPhone',
    price:650
  }
];

localStorage.setItem('products',JSON.stringify(products));

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
  }

  onDelete(name){
    console.log(name);
  }
   
  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>

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
