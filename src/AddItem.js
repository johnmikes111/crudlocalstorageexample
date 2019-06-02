import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props){
        super(props);

        this.state ={
            name:'',
            price:0        
        };
    }

    onFormSubmit = (event) => {
        const {onAdd} = this.props;
        event.preventDefault();

        this.setState({name:'',price:0});

        onAdd(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h3>Add product</h3>
                <input placeholder="Name" 
                       value={this.state.name} 
                       onChange={(event)=> this.setState({name:event.target.value})}/>
                <input placeholder="Price" 
                       value={this.state.price}
                       onChange={(event) => this.setState({price:event.target.value})}/>
                <button type="submit">Add</button>

                <hr/>
            </form>
        );
    }
}

export default AddItem;