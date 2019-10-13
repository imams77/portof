import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { quickviewLargeImageSliderSettings } from '../../../../setup/slider';
import { connect } from 'react-redux';
import { addToCart, addToWishlist, addToCompare } from '../../../../actions'

class productModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,

    }
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

  render () {
    {/* product modal */}
    const {
      productData,
      symbol,
      productPrice,
      discountedPrice,
      show,
      onClose
    } = this.props;

    return (
      <Modal show={show} onHide={onClose} centered className="product-quickview-modal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Dialog>
        <div className="modal-content">
            <div className="modal-body">
                <div className="row">
                    <div className="col-12 ">
                        <div className="quickview-img-wrap">
                            <Slider className="quickview-big-img-slider text-center" {...quickviewLargeImageSliderSettings}>
                                <div className="single-big-img" key='1'>
                                    <img src={process.env.PUBLIC_URL + productData.image} alt="" />
                                </div>
                                {/* {
                                    productData.images.map((image, index)=>{
                                        return(
                                            <div className="single-big-img" key={index}>
                                                <img src={process.env.PUBLIC_URL + image} alt="" />
                                            </div>
                                        )
                                    })
                                } */}
                            </Slider>
                        </div>
                    </div>
                    <div className="row pr-5 pl-5">
                        <div className="product-details-content quickview-content col-7">
                            
                            <p>{productData.description}</p>
                    
                        </div>
                        <div className="col-5">
                            <div className="product-details-content quickview-content">
                                <div className="author-detail">
                                    <div className="profile-picture">
                                        <img src="https://placehold.it/30x30" alt=""/>
                                    </div>
                                    <div className="author">
                                        <h2>{productData.name}</h2>
                                        <span>By <Link to="/">John Doe</Link></span>
                                    </div>
                                </div>
                                <div className={`product-details-price`}>
                                    <div>
                                        <span >{symbol + productPrice}</span>
                                    </div>
                                </div>
                                <div className="pro-details-quality">
                                    {/* <div className="cart-plus-minus">
                                        <button className="dec qtybutton" onClick={this.decQty}>-</button>
                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" value={this.state.quantity} onChange={this.changeQty} readOnly/>
                                        <button className="inc qtybutton" onClick={this.incQty}>+</button>
                                    </div> */}
                                    <div className="pro-details-cart btn-hover">
                                        <button  onClick={() => addToCart(productData, this.state.quantity)}>Buy</button>
                                        {/* {
                                            productData.stock > 0 ? 
                                            <button  onClick={() => addToCart(productData, this.state.quantity)}>Buy</button>
                                            : 
                                            <button className="disabled">Out of Stock</button>
                                        } */}
                                    </div>
                                    <div className="pro-details-wishlist">
                                        <button onClick={() => addToWishlist(productData)}><i className="fa fa-heart-o" /><span>Add To Wishlist</span></button>
                                    </div>
                                    {/* <div className="pro-details-compare">
                                        <button onClick={() => addToCompare(productData)} ><i className="negan-icon-switch" /> <span>Add To Compare</span></button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Modal.Dialog>
    </Modal>
    )
  }
}

productModal.propTypes = {
  productData : PropTypes.object,
  productPrice : PropTypes.string,
  discountedPrice : PropTypes.string,
  symbol : PropTypes.string,
  addToCart : PropTypes.func,
  addToWishlist : PropTypes.func
}

export default connect()(productModal)