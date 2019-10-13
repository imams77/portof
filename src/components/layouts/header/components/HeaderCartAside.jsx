import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { getCartTotalPrice, calculateDiscount } from '../../../../setup'
import { removeFromCart } from '../../../../actions'

class HeaderCartAside extends Component {

    closeAsideCart(){
        let asideCart = document.getElementById('sidebar-cart-active');
        let bodyWrapper = document.getElementById('body-wrapper');
        asideCart.classList.remove('inside');
        bodyWrapper.classList.remove('overlay-active');
    }

    render() {
        const { cartData, currencySymbol, removeFromCart, cartTotalPrice } = this.props;
        
        // discounted price added to the array
        for(let i=0; i< cartData.length; i++){
            let discountedPrice = 0;
            discountedPrice = calculateDiscount(cartData[i].price, cartData[i].discount);
            cartData[i].discountedPrice = discountedPrice.toFixed(2);
        }
        
        let cartDataList = cartData.map((cartItem, index) => {
            
            return(
                <li className="single-product-cart" key={index}>
                    <div className="cart-img">
                        <Link to={process.env.PUBLIC_URL+'/product-simple-one/'+cartItem.id} onClick={()=>this.closeAsideCart()}><img src={process.env.PUBLIC_URL + cartItem.images[0]} alt="" /></Link>
                    </div>
                    <div className="cart-title">
                        <h4><Link to={process.env.PUBLIC_URL + '/product-simple-one/' + cartItem.id} onClick={()=>this.closeAsideCart()}> {cartItem.name} </Link></h4>
                        <span>{cartItem.qty} × {currencySymbol +''+ cartItem.discountedPrice}</span>
                    </div>
                    <div className="cart-delete">
                        <button onClick={()=> {removeFromCart(cartItem.id)}}>×</button>
                    </div>
                </li>
            )
        });

        return (
            <div className="sidebar-cart-active" id="sidebar-cart-active">
                <div className="sidebar-cart-all">
                    <button className="cart-close" onClick={this.closeAsideCart}><i className="negan-icon-simple-close" /></button>
                    
                        {(cartData.length) ? 
                        <div className="cart-content">
                            <h3>Shopping Cart</h3>
                            <ul>
                                {cartDataList}
                            </ul>
                            <div className="cart-total">
                                <h4>Subtotal: <span>{currencySymbol +' '+ cartTotalPrice.toFixed(2)}</span></h4>
                            </div>
                            <div className="cart-checkout-btn">
                                <Link className="btn-hover cart-btn-style" to={process.env.PUBLIC_URL+'/cart'} onClick={()=>this.closeAsideCart()}>view cart</Link>
                                <Link className="no-mrg btn-hover cart-btn-style" to={process.env.PUBLIC_URL+'/checkout'} onClick={()=>this.closeAsideCart()}>checkout</Link>
                            </div>
                        </div>
                        :
                        <div className="cart-empty-content text-center pt-100">
                            <div className="cart-empty-content-wrapper">
                                <i className="negan-icon-cart-modern" />
                                <p>Your cart is currently empty.</p>
                            </div>
                        </div>
                    }
                </div>
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

HeaderCartAside.propTypes = {
    cartData : PropTypes.array,
    currencySymbol : PropTypes.string,
    removeFromCart: PropTypes.func,
    cartTotalPrice: PropTypes.number
}

export default connect(mapStateToProps, {removeFromCart})(HeaderCartAside)