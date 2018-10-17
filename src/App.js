import React, { Component } from 'react';
import './App.css';
import './components/Product';
import Product from "./components/Product";

class App extends Component {
    render() {
        var products = [
            {
                id : 1,
                name : 'IphoneX',
                image : 'https://cdn.tgdd.vn/Products/Images/42/172404/iphone-x-256gb-silver-400x460.png',
                price : 1000,
                status : true
            },
            {
                id: 2,
                name: 'Samsum Galaxy S7',
                image: 'https://www.att.com/catalog/en/skus/Samsung/Galaxy%20S7/overview/302281-PDP-Overview-SSGS7-img1@2x.jpg',
                price: 1000,
                status: false
            },
            {
                id: 3,
                name: 'Bphone',
                image: 'https://cdn.tgdd.vn/Products/Images/42/75001/bkav-bphone-2-thumb-300x300.jpg',
                price: 300,
                status: true
            }
        ];
        let elements = products.map((product, index) => {
            let result = '';
            if(product.status){
                result = <Product
                    key={product.id}
                    price={product.price}
                    image={product.image}
                >
                    {product.name}
                </Product>
            }
            return result;
        });

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand">Props</a>
                    <ul className="nav navbar-nav">
                        <li>
                            <a>Product</a>
                        </li>
                        <li className="active">
                            <a>Service</a>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                                {elements}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
