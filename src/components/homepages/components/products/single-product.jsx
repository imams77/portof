import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import { connect } from 'react-redux'
import ProductModal from './product-modal'
import { calculateDiscount } from '../../../../setup'
import { addToCart, addToWishlist, addToCompare } from '../../../../actions'

class SingleProduct extends Component {

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
        this.setState({ show: false });
    }
    
    handleShow = () => {
        this.setState({ show: true });
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
            <div className="col mb-45">
                <div className="product-wrap" id={'product-'+productData._id}>
                    <div className="product-img default-overlay item-overlay-1">
                        <Link to={process.env.PUBLIC_URL+'/product/'+productData._id}>
                            <img className="default-img" src={`${process.env.PUBLIC_URL}${productData.image}`} alt="" />

                 
                        </Link>
                        {/* <div className="badge-container">
                            {productData.new ? (<span className="new">New</span>) : ('')}
                            {productData.discount > 0 ? (<span className="discount">{'-'+productData.discount + '%'}</span>) : ('')}
                        </div> */}
                        <div className="product-action">
                            <div className="pro-same-action pro-wishlist-icon">
                                <button onClick={() => addToWishlist(productData)}><i className="fa fa-heart-o" /></button>
                            </div>
                            {/* <div className="pro-same-action pro-switch-icon">
                                <button title="Add To Compare" onClick={() => addToCompare(productData)}><i className="negan-icon-switch" /></button>
                            </div> */}
                        </div>
                        <div className="product-quickview">
                            <button title="Quick Shop" onClick={this.handleShow}>View</button>
                            <button className="addtocart-hm2" title="Buy" onClick={() => addToCart(productData, this.state.quantity)}>Buy</button>
                            {/* {
                                productData.stock > 0 ? 
                                <button className="addtocart-hm2" title="Buy" onClick={() => addToCart(productData, this.state.quantity)}>Buy</button>
                                : 
                                <button className="addtocart-hm2 disabled" title="Out of Stock">Out of Stock</button>
                            } */}
                        </div>
                    </div>
                    <div className="product-content-2">
                        <h3><Link to={process.env.PUBLIC_URL+'/product/'+productData.id}>{productData.title}</Link></h3>
                        <span className="product-author">by: <Link to="/">{productData.author.name}</Link></span>
                        <div className="pro-price-rating-wrap">
                            
                            <div className='product-price product-price--show pro-price-3'>
                                <span className="new">{ symbol + productPrice}</span>
                                {/* { 
                                    productData.discount !== 0 
                                    ? 
                                    <div>
                                        <span className="old">{symbol + productPrice}</span>
                                        <span className="new">{symbol + discountedPrice}</span>
                                    </div>
                                    :
                                    (<span>{symbol + discountedPrice}</span>)
                                } */}
                            </div>

                            {/* {
                                productData.rating ?
                                <div className="product-rating-2">
                                    {RatingStars} 
                                </div>
                                :
                                ''
                            } */}

                        </div>
                        {productData.tags && productData.tags.length > 0 &&
                            <div className="product-tags">
                                {
                                    productData.tags.map((tag, i) => {
                                        return(<span key={i}>{tag}</span>)
                                    })
                                }
                            </div>
                        }
                        {/* {
                            productData.colorVariations ?
                            
                            <div className="product-colo-wrap product-colo-wrap--no-movement">
                                <ul>
                                {
                                    productData.colorVariations.map((singleColor, index) => {
                                    return (
                                        <li className={singleColor.color} key={index} title={singleColor.color} onClick={() => this.onClickHandle(singleColor.image)}></li>)
                                    })
                                }
                                </ul>
                            </div>
                            :
                            ''
                        } */}
                     
                    </div>

                </div>
                <ProductModal
                  productData={productData}
                  symbol={symbol}
                  productPrice={productPrice}
                  discountedPrice={discountedPrice}
                  show={this.state.show}
                  onClose={this.handleClose}
                ></ProductModal>
            </div>
        )
    }
}

SingleProduct.propTypes = {
    productData : PropTypes.object,
    symbol : PropTypes.string,
    addToCart : PropTypes.func,
    addToWishlist : PropTypes.func,
    addToCompare : PropTypes.func
}

export default connect(null,{addToCart, addToWishlist, addToCompare})(SingleProduct)