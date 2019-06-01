import React, {Component} from 'react';

class ProductItem extends Component {
    render(){
        const {name,price,onDelete} = this.props;
        
        return(
            <div key={name}>
                <span>{name}</span> | <span>{price}</span> | <button onClick={()=> onDelete(name)}>Delete item</button>
            </div>
        )
    }
}

export default ProductItem;