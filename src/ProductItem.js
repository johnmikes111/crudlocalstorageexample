import React, {Component} from 'react';

class ProductItem extends Component {
    componentWillMount(){
        const {name,price} = this.props;

        this.setState({
            isEdit:false,
            orginalName:name,
            name:name,
            price:price
        })
    }

    editItem = () => {
        this.setState({
            isEdit:true
        })
    }

    editFormSubmit = (event) =>{
        const {onEdit} = this.props;

        event.preventDefault();

        let editedItem = {
            name:this.state.name,
            price:this.state.price
        };
        
        onEdit(editedItem,this.state.orginalName);

        this.setState({
            isEdit:false
        })
    }

    render(){
        const {onDelete} = this.props;
        
        return(
           <div>
               {
                   this.state.isEdit 
                   ?
                   (
                    <div>
                        <form onSubmit={this.editFormSubmit}>
                            <input placeholder="Name" 
                            value={this.state.name} 
                            onChange={(event)=> this.setState({name:event.target.value})}/>
                            <input placeholder="Price" 
                            value={this.state.price}
                            onChange={(event) => this.setState({price:event.target.value})}/>
                            <button type="submit">Save change</button>
                        </form>
                    </div>
                   )
                   :
                   (
                    <div key={this.state.name}>
                        <span>{this.state.name}</span> | <span>{this.state.price}</span> 
                        | <button onClick={()=> onDelete(this.state.name)}>Delete item</button>
                        | <button onClick={()=> this.editItem()}>Edit item</button>
                    </div>
                   )
               }
           </div>
        )
    }
}

export default ProductItem;