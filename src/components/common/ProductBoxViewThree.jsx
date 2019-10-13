import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { Modal } from 'react-bootstrap'
import Slider from 'react-slick'
import { connect } from 'react-redux'

import { calculateDiscount } from '../../setup'
import { quickviewLargeImageSliderSettings } from '../../setup/slider'
import { addToCart, addToWishlist, addToCompare } from '../../actions'

class ProductBoxViewThree extends Component {

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
            <div className="col mb-45">
                <div className="product-wrap">
                    <div className="product-img default-overlay item-overlay-1">
                        <Link to={process.env.PUBLIC_URL+'/product-simple-one/'+productData.id}>
                            {
                               
                                <div>
                                    <img className="default-img" src={process.env.PUBLIC_URL + productData.images[0]} alt="" />
                                    {
                                        productData.images.length > 1 ?
                                        <img className="hover-img" src={process.env.PUBLIC_URL + productData.images[1]} alt="" />
                                        :
                                        ''
                                    }
                                </div>
                            }
                 
                        </Link>
                        <div className="badge-container">
                            {productData.new ? (<span className="coral">New</span>) : ('')}
                            {productData.discount > 0 ? (<span className="green">{'-'+productData.discount + '%'}</span>) : ('')}
                        </div>
                        <div className="product-action">
                            <div className="pro-same-action pro-wishlist-icon">
                                <button onClick={() => addToWishlist(productData)}><i className="fa fa-heart-o" /></button>
                            </div>
                            <div className="pro-same-action pro-switch-icon">
                                <button title="Add To Compare" onClick={() => addToCompare(productData)}><i className="negan-icon-switch" /></button>
                            </div>
                        </div>
                        <div className="product-quickview">
                            <button title="Quick Shop" onClick={this.handleShow}>Quick Shop</button>
                            {
                                productData.stock > 0 ? 
                                <button className="addtocart-hm2" title="Add To Cart" onClick={() => addToCart(productData, this.state.quantity)}>Add to cart</button>
                                : 
                                <button className="addtocart-hm2 disabled" title="Out of Stock">Out of Stock</button>
                            }
                        </div>
                    </div>
                    <div className="product-content-3">
                        <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>
                            {
                                productData.category.map((singleCategory)=>{
                                    return(
                                        singleCategory + ' '
                                    )
                                })
                            }
                        </Link>
                        <h3><Link to={process.env.PUBLIC_URL+'/product-simple-one/'+productData.id}>{productData.name}</Link></h3>
                    </div>

                </div>

                {/* product modal */}
                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Dialog>
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-xl-5 col-md-6 col-sm-12 col-xs-12">
                                        <div className="quickview-img-wrap">
                                            <Slider className="quickview-big-img-slider text-center" {...quickviewLargeImageSliderSettings}>
                                                {
                                                    productData.images.map((image, index)=>{
                                                        return(
                                                            <div className="single-big-img" key={index}>
                                                                <img src={process.env.PUBLIC_URL + image} alt="" />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </Slider>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-md-6 col-sm-12 col-xs-12">
                                        <div className="product-details-content quickview-content">
                                            <h2>{productData.name}</h2>
                                        
                                            <div className={`product-details-price ${productData.discount !== 0 ? 'product-details-price-2': ''}`}>
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
                                            
                                            <p>{productData.shortDescription}</p>
                                            <div className="pro-details-quality">
                                                <div className="cart-plus-minus">
                                                    <button className="dec qtybutton" onClick={this.decQty}>-</button>
                                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" value={this.state.quantity} onChange={this.changeQty} readOnly/>
                                                    <button className="inc qtybutton" onClick={this.incQty}>+</button>
                                                </div>
                                                <div className="pro-details-cart btn-hover">
                                                    {
                                                        productData.stock > 0 ? 
                                                        <button  onClick={() => addToCart(productData, this.state.quantity)}>Add To Cart</button>
                                                        : 
                                                        <button className="disabled">Out of Stock</button>
                                                    }
                                                </div>
                                                <div className="pro-details-wishlist">
                                                    <button onClick={() => addToWishlist(productData)}><i className="fa fa-heart-o" /><span>Add To Wilhlist</span></button>
                                                </div>
                                                <div className="pro-details-compare">
                                                    <button onClick={() => addToCompare(productData)} ><i className="negan-icon-switch" /> <span>Add To Compare</span></button>
                                                </div>
                                            </div>
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Dialog>
                </Modal>
            </div>
        )
    }
}

ProductBoxViewThree.propTypes = {
    productData : PropTypes.object,
    symbol : PropTypes.string,
    addToCart : PropTypes.func,
    addToWishlist : PropTypes.func,
    addToCompare : PropTypes.func
}

export default connect(null,{addToCart, addToWishlist, addToCompare})(ProductBoxViewThree)