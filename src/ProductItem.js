import React, {Component} from 'react';

class ProductItem extends Component {
    render(){
        const {name,price} = this.props;
        
        return(
            <div key={name}>
                <span>{name}</span> | <span>{price}</span> | <button>Delete item</button>
            </div>
        )
    }
}

export default ProductItem;