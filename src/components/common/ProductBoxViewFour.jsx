import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { calculateDiscount } from '../../setup'
import { addToCart, addToWishlist, addToCompare } from '../../actions'

class ProductBoxView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            quantity: 1,
            stock: true,
            image: ''
        };
    }

    onClickHandle(image) {
        this.setState({ image } );
    }
    
    handleClose = () => {
        this.setState({ show: false, quantity: 1 });
    }
    
    handleShow = () => {
        this.setState({ show: true, quantity: 1 });
    }

    decQty = () => {
        if(this.state.quantity > 1) {
            this.setState({stock: true})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    incQty = () => {
        if(this.props.productData.stock > this.state.quantity) {
            this.setState({quantity: this.state.quantity+1})
        }else{
            this.setState({stock: false});

        }
    }

    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render() {

        const {productData, symbol, addToCart, addToWishlist, addToCompare} = this.props;

        //discount calculation
        let discountedPrice = calculateDiscount(productData.price, productData.discount);
        discountedPrice = discountedPrice.toFixed(2);
        let productPrice = Number(productData.price).toFixed(2);

        //rating
       let RatingStars = [];
        for(var i = 0; i < productData.rating; i++) {
            RatingStars.push(<i className="negan-icon-star" key={i}></i>)
        }
      
        return (
            <div className="col">
                <div className="product-wrap product-wrap--style2 mb-30">
                    <div className="product-img default-overlay item-overlay-1">
                        <Link to={process.env.PUBLIC_URL+'/product-simple-one/'+productData.id}>
                            <img src={process.env.PUBLIC_URL + productData.images[0]} alt="" />
                        </Link>
                        <div className="product-action">
                            <div className="pro-same-action pro-wishlist-icon">
                                <button onClick={() => addToWishlist(productData)}><i className="fa fa-heart-o" /></button>
                            </div>
                            <div className="pro-same-action pro-switch-icon">
                                <button title="Add To Compare" onClick={() => addToCompare(productData)}><i className="negan-icon-switch" /></button>
                            </div>
                        </div>
                        <div className="product-action-2">
                            <h2><Link to={process.env.PUBLIC_URL+'/product-simple-one/'+productData.id}>{productData.name}</Link></h2>
                            <div className={`product-price`}>
                                { 
                                    productData.discount !== 0 
                                    ? 
                                    <div>
                                        <span className="old">{symbol + productPrice}</span>
                                        <span>{symbol + discountedPrice}</span>
                                    </div>
                                    :
                                    (<span>{symbol + discountedPrice}</span>)
                                }
                            </div>
                            
                            <div className="product-cart-2">
                                {
                                productData.stock > 0 ? 
                                    <button title="Add To Cart" onClick={() => addToCart(productData, this.state.quantity)}>Add to cart</button>
                                : 
                                    <button title="Out of Stock">Out of Stock</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ProductBoxView.propTypes = {
    productData : PropTypes.object,
    symbol : PropTypes.string,
    addToCart : PropTypes.func,
    addToWishlist : PropTypes.func,
    addToCompare : PropTypes.func
}

export default connect(null,{addToCart, addToWishlist, addToCompare})(ProductBoxView)