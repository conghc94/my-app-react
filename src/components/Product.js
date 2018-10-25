import React, { Component } from 'react';

class Product extends Component {
    constructor(props){
        super(props);
        this.onAddToCard = this.onAddToCard.bind(this);
    }

    onAddToCard(){
        console.log(this.props.children);
        alert(this.props.children + '-' + this.props.price);
    }
    onAddToCard2 = () =>{
        console.log(this.props.children);
        alert(this.props.children + '-' + this.props.price);
    }
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                    <img alt={this.props.children} src={this.props.image} />
                    <div className="caption">
                        <h3>{this.props.children}</h3>
                        <p>
                            {this.props.price}$
                        </p>
                        <p>
                            <a className="btn btn-primary" onClick={this.onAddToCard}>Buy</a>
                            <a className="btn btn-primary" onClick={this.onAddToCard2}>Buy</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
