import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PaypalExpressButton from 'react-paypal-express-checkout';
import StripeCheckout from 'react-stripe-checkout';
import SimpleReactValidator from 'simple-react-validator';

import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartTotalPrice } from '../../setup'
import Breadcrumb from '../common/Breadcrumb'

class Checkout extends Component {

    constructor (props) {
        super (props)

        this.state = {
            payment:'',
            firstName:'',
            lastName:'',
            companyName: '',
            countryName:'',
            address:'',
            city:'',
            state:'',
            postcode:'',
            phone:'',
            email:'',
            createAccount:'',
            orderMessage:''
        }
        this.validator = new SimpleReactValidator({locale: 'en'});
    }

    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);

    }

    setStateFromCheckbox = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.checked;
        this.setState(obj);

        if(!this.validator.fieldValid(event.target.name))
        {
            this.validator.showMessages();
        }
    }

    setStateFromRadio(value) {
        this.setState({
            payment: value
        })

        if(value === 'paypal'){
            document.getElementById('checkout-message').classList.add('d-block');
            document.getElementById('checkout-message').classList.remove('d-none');
        }else{
            document.getElementById('checkout-message').classList.add('d-none');
            document.getElementById('checkout-message').classList.remove('d-block');
        }
    }

    otherPayment = () => {
        if (this.validator.allValid()) {
            alert('All information are correct!');
        } else {
          this.validator.showMessages();
          this.forceUpdate();
        }
    }

    render() {
        const { cartData, currencySymbol, cartTotalPrice} = this.props;

        // Paypal Integration
        const onSuccess = (payment) => {
            console.log("The payment is successful!", payment);
        }

        const onCancel = (data) => {
            console.log('The payment is cancelled!', data);
        }

        const onError = (err) => {
            console.log("Error!", err);
        }

        const key = {
            sandbox:    'GiveYourOwnKeyHere'
        }

        let checkoutdataList = cartData.map((checkoutItem, index)=>{
            return(
                <li key={index}>{checkoutItem.name}  X  {checkoutItem.qty} <span>{currencySymbol + checkoutItem.sum} </span></li>
            )
        });
        return (
            <div>
                {/* seo content */}
                <Helmet>
                    <title>Portof | Checkout</title>
                    <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
                </Helmet>

                {/* breadcrumb area */}
                <Breadcrumb title="Checkout" />

                {
                    cartData.length ?
                    <div className="checkout-main-area pt-60 pb-60">
                        <div className="container">
                            <div className="checkout-wrap">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="billing-info-wrap mr-130">
                                        <h3>Billing Details</h3>
                                        <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>First Name <abbr className="required" title="required">*</abbr></label>
                                                <input type="text" name="firstName" value={this.state.firstName} onChange={this.setStateFromInput} />
                                                {this.validator.message('firstName', this.state.firstName, 'required|alpha')}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Last Name <abbr className="required" title="required">*</abbr></label>
                                                <input type="text" name="lastName"  value={this.state.lastName} onChange={this.setStateFromInput} />
                                                {this.validator.message('lastName', this.state.lastName, 'required|alpha')}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Company Name</label>
                                                <input type="text" name="companyName" value={this.state.companyName} onChange={this.setStateFromInput} />
                                                {this.validator.message('companyName', this.state.companyName, 'alpha')}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-select mb-20">
                                                <label>Country <abbr className="required" title="required">*</abbr></label>
                                                <select name="countryName" value={this.state.countryName} onChange={this.setStateFromInput} >
                                                    <option>Select a country</option>
                                                    <option>Azerbaijan</option>
                                                    <option>Bahamas</option>
                                                    <option>Bahrain</option>
                                                    <option>Bangladesh</option>
                                                    <option>Barbados</option>
                                                </select>
                                                {this.validator.message('countryName', this.state.countryName, 'required')}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Street Address <abbr className="required" title="required">*</abbr></label>
                                                <input className="billing-address" placeholder="House number and street name" type="text" name="address" value={this.state.address} onChange={this.setStateFromInput}  />
                                                {this.validator.message('address', this.state.address, 'required|min:10|max:100')}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                            <label>Town / City <abbr className="required" title="required">*</abbr></label>
                                            <input type="text" name="city" value={this.state.city} onChange={this.setStateFromInput} />
                                            {this.validator.message('city', this.state.city, 'required|alpha')}
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="billing-info mb-20">
                                            <label>State <abbr className="required" title="required">*</abbr></label>
                                            <input type="text" name="state" value={this.state.state} onChange={this.setStateFromInput} />
                                            {this.validator.message('state', this.state.state, 'required|alpha')}
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="billing-info mb-20">
                                            <label>Postcode / ZIP <abbr className="required" title="required">*</abbr></label>
                                            <input type="text" name="postcode"  value={this.state.postcode} onChange={this.setStateFromInput}  />
                                            {this.validator.message('postcode', this.state.postcode, 'required|integer')}
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="billing-info mb-20">
                                            <label>Phone <abbr className="required" title="required">*</abbr></label>
                                            <input type="text" name="phone"  value={this.state.phone} onChange={this.setStateFromInput}  />
                                            {this.validator.message('phone', this.state.phone, 'required|phone')}
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="billing-info mb-20">
                                            <label>Email Address <abbr className="required" title="required">*</abbr></label>
                                            <input type="text" name="email"  value={this.state.email} onChange={this.setStateFromInput}  />
                                            {this.validator.message('email', this.state.email, 'required|email')}
                                            </div>
                                        </div>
                                        </div>
                                        <div className="checkout-account mb-25">
                                            <input className="checkout-toggle2" type="checkbox" checked={this.state.createAccount} onChange={this.setStateFromCheckbox} />
                                            <span>Create an account?</span>
                                        </div>
                                        
                                        <div className="additional-info-wrap">
                                            <label>Order notes</label>
                                            <textarea placeholder="Notes about your order, e.g. special notes for delivery. " name="orderMessage" defaultValue={""} />
                                            {this.validator.message('orderMessage', this.state.orderMessage, 'alpha')}
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="your-order-area">
                                            <h3>Your order</h3>
                                            <div className="your-order-wrap gray-bg-4">
                                                <div className="your-order-info-wrap">
                                                    <div className="your-order-info">
                                                        <ul>
                                                            <li>Product <span>Total</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="your-order-middle">
                                                        <ul>
                                                            { checkoutdataList }
                                                        </ul>
                                                    </div>
                                                    <div className="your-order-info order-subtotal">
                                                        <ul>
                                                            <li>Subtotal <span>{currencySymbol+cartTotalPrice} </span></li>
                                                        </ul>
                                                    </div>
                                                
                                                    <div className="your-order-info order-total">
                                                        <ul>
                                                            <li>Total <span>{currencySymbol+cartTotalPrice} </span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="payment-method">
                                                    <div className="pay-top sin-payment">
                                                        <input id="payment_method_1" className="input-radio" type="radio" defaultValue="bank" defaultChecked="checked" name="payment_method" onClick={() => this.setStateFromRadio('')} />
                                                        <label htmlFor="payment_method_1"> Direct Bank Transfer </label>
                                                    
                                                    </div>
                                                    <div className="pay-top sin-payment">
                                                        <input id="payment-method-2" className="input-radio" type="radio" defaultValue="cheque" name="payment_method" onClick={() => this.setStateFromRadio('')} />
                                                        <label htmlFor="payment-method-2">Check payments</label>
                                                    
                                                    </div>
                                                    <div className="pay-top sin-payment">
                                                        <input id="payment-method-3" className="input-radio" type="radio" defaultValue="cod" name="payment_method" onClick={() => this.setStateFromRadio('')} />
                                                        <label htmlFor="payment-method-3">Cash on delivery </label>
                                                    </div>
                                                    <div className="pay-top sin-payment">
                                                        <input id="payment-method-4" className="input-radio" type="radio" defaultValue="stripe" name="payment_method" onClick={() => this.setStateFromRadio('stripe')} />
                                                        <label htmlFor="payment-method-4">Credit Card </label>
                                                    </div>
                                                    <div className="pay-top sin-payment sin-payment-3">
                                                        <input id="payment-method-5" className="input-radio" type="radio" defaultValue="paypal" name="payment_method" onClick={() => this.setStateFromRadio('paypal')} />
                                                        <label htmlFor="payment-method-5">PayPal <img src={process.env.PUBLIC_URL+'/img/icon-img/payment.png'} alt="" /><a href="/#">What is PayPal?</a></label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {(cartTotalPrice !== 0)?
                                            <div className="text-right">
                                                {
                                                    (this.state.payment === '')
                                                    ? 
                                                    <div className="place-order mt-25">
                                                        <button onClick={() => this.otherPayment()}>Place Order</button>
                                                    </div>
                                                    :
                                                    (
                                                        (this.state.payment === 'stripe')
                                                        ? 
                                                        <div className="place-order mt-25">
                                                            <StripeCheckout
                                                                stripeKey="pk_test_TYooMQauvdEDq54NiTphI7jx"
                                                                token={token => console.log(token)}
                                                                amount={cartTotalPrice * 100}
                                                                name="Negan Store"
                                                                description="Fashion Store React Template"
                                                            />
                                                        </div>
                                                        :
                                                        <PaypalExpressButton env={'sandbox'} client={key} currency={'USD'} total={cartTotalPrice} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                                                    )
                                                }
                                            </div>
                                            : ''}
                                        </div>
                                        <div className="checkout-message mt-25 d-none" id="checkout-message">
                                           <span>Note:</span> PayPal will not work in this demo. But it will work when you'll add your own API key.
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
                                <p>Your cart is currently empty. Add some product to see checkout page.</p>
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

Checkout.propTypes = {
    cartData: PropTypes.array,
    currencySymbol: PropTypes.string,
    cartTotalPrice: PropTypes.number
}

export default connect(mapStateToProps)(Checkout)