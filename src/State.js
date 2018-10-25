import React, { Component } from 'react';
import './App.css';

class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [
                {
                    id: 1,
                    name: 'IphoneX',
                    price: 1000,
                    status: true

                },
                {
                    id: 2,
                    name: 'Samsum Galaxy S7',
                    price: 500,
                    status: false
                },
                {
                    id: 3,
                    name: 'Bphone',
                    price: 300,
                    status: true
                },
            ],
            isActive : true,
        };
        this.onSetState = this.onSetState.bind(this);
    }
    onSetState(){
        this.setState({
            isActive: !this.state.isActive
        });
    }
    render() {
        let elements = this.state.products.map((product, index)=>{
            let result = '';
            if(product.status){
                if(this.state.isActive===true){
                    result = <tr key={product.id}>
                        <td>{index}</td>
                        <td>{product.name}</td>
                        <td><span className="label label-success">{product.price}$</span></td>
                    </tr> ;
                }
            }
            return result;
        });
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand">State</a>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Number</th>
                                        <th>Product name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {elements}
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-warning" onClick={this.onSetState}>
                                Active: { this.state.isActive === true ? "true" : "false"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default State;
