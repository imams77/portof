import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Breadcrumb from '../common/Breadcrumb'
import { getCartTotalPrice, calculateDiscount } from '../../setup'
import { removeFromCart, removeAllFromCart, incrementQty, decrementQty } from '../../actions'

class Cart extends Component {
    render() {
        const { cartData, currencySymbol, removeFromCart, removeAllFromCart, cartTotalPrice, incrementQty, decrementQty } = this.props;
        // discounted price added to the array
        for(let i=0; i< cartData.length; i++){
            let discountedPrice = 0;
            discountedPrice = calculateDiscount(cartData[i].price, cartData[i].discount);
            cartData[i].discountedPrice = discountedPrice.toFixed(2);
        }

        let cartDataList = cartData.map((cartItem, index) => {
            return(
                <tr key={index}>
                    <td className="product-remove">
                        <button onClick={()=>removeFromCart(cartItem.id)}><i className="negan-icon-simple-close" /></button>
                    </td>
                    <td className="product-cart-img">
                        <Link to={process.env.PUBLIC_URL+'/product-simple-one/'+cartItem.id}><img src={process.env.PUBLIC_URL + cartItem.images[0]} alt="" className="img-fluid" /></Link>
                    </td>
                    <td className="product-cart-name"><Link to={process.env.PUBLIC_URL+'/product-simple-one/'+cartItem.id}>{cartItem.name}</Link></td>
                    <td className="product-price-cart"><span className="amount">{currencySymbol + cartItem.discountedPrice}</span></td>
                    <td className="product-quantity">
                        <div className="cart-plus-minus">
                            <button className="dec qtybutton" onClick={() => decrementQty(cartItem.id)}>-</button>
                            <input className="cart-plus-minus-box" type="text" name="qtybutton" value={cartItem.qty} readOnly />
                            <button className="inc qtybutton" onClick={() => incrementQty(cartItem, 1)}>+</button>
                        </div>
                    </td>
                    <td className="product-total"><span>{currencySymbol + cartItem.sum.toFixed(2)}</span></td>
                </tr>
            )
        });

        return (
            <div>
                {/* seo content */}
                <Helmet>
                    <title>Negan | Cart</title>
                    <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
                </Helmet>

                {/* breadcrumb */}
                <Breadcrumb title="Cart" />

                {
                    cartData.length
                    ?
                    <div className="cart-main-area pt-60 pb-60">
                        <div className="container">
                        
                            <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="table-content table-responsive cart-table-content">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="head-remove" />
                                                <th className="head-img" />
                                                <th className="product-name">Product</th>
                                                <th className="head-price">Price</th>
                                                <th className="head-quality">Quantity</th>
                                                <th className="head-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartDataList}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                    <div className="cart-shiping-update-wrapper">
                                        <div className="cart-shiping-update">
                                        <Link className="btn" to={process.env.PUBLIC_URL + '/shop-sidebar'}>Continue Shopping</Link>
                                        </div>
                                        <div className="cart-clear">
                                            <button onClick={()=>removeAllFromCart()}>Clear Cart</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="grand-totall">
                                    <div className="title-wrap">
                                        <h4 className="cart-bottom-title">Cart totals</h4>
                                    </div>
                                    <ul>
                                        <li>Subtotal <span>{currencySymbol + cartTotalPrice.toFixed(2)}</span></li>
                                        
                                        <li>Total <span>{currencySymbol + cartTotalPrice.toFixed(2)} </span></li>
                                    </ul>
                                        <Link to={process.env.PUBLIC_URL+'/checkout'}>Proceed to Checkout</Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    :

                    <div className="cart-main-area pt-60 pb-60">
                        <div className="container">
                            <div className="cart-empty-content text-center">
                                <i className="negan-icon-cart-modern" />
                                <p>Your cart is currently empty.</p>
                                <div className="empty-btn">
                                    <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>Return to shop</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cartData: state.cartData.cart,
        cartTotalPrice : getCartTotalPrice(state.cartData.cart),
        currencySymbol: state.productData.currencySymbol
    }
}

Cart.propTypes = {
    cartData : PropTypes.array,
    currencySymbol : PropTypes.string,
    removeFromCart : PropTypes.func,
    cartTotalPrice : PropTypes.number,
    incrementQty : PropTypes.func,
    decrementQty: PropTypes.func
}

export default connect(mapStateToProps, { removeFromCart, removeAllFromCart, incrementQty, decrementQty })(Cart)