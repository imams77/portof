import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Countdown from 'react-countdown-now'


// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds }) => {
    return (
      <div className="timer timer-style">
          <div>
              <span className="cdown day">{days} <p>Days</p></span> 
              <span className="cdown hour">{hours} <p>Hrs</p></span> 
              <span className="cdown minutes">{minutes} <p>Mins</p></span> 
              <span>{seconds} <p>Secs</p></span>
          </div>
      </div>
    );
};

class ProductContentDefault extends Component {

    
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
        const { productData, symbol, addToCart, addToWishlist, addToCompare, productPrice, discountedPrice, ratingStars, navLargeImage} = this.props;

   
        let colorslider = {
            slidesToShow: productData.colorVariations ? (productData.colorVariations.length > 4 ? 4 : productData.colorVariations.length) : 1,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        }
      
        return (
            <div className="product-details-content quickview-content">
                <h2>{productData.name}</h2>
                
                <div className="product-rating-stock">
                        {
                            productData.rating ?
                                <div className="product-dec-rating-reviews">
                                    <div className="product-dec-rating">
                                        {ratingStars} 
                                    </div>
                                    <div className="product-dec-reviews">
                                        ({productData.rating} customer reviews)
                                    </div>
                                </div>
                            :
                            ''
                        }
                    
                    <div className="pro-stock">
                        <span><i className="negan-icon-check-circle" /> {productData.stock > 0 ? productData.stock + ' in stock' : 'Not Available' } </span>
                    </div>
                </div>
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

                {
                    productData.sizes && !productData.affiliateLink ?
                    <div className="pro-details-size">
                        <span>Size</span>
                        <ul>
                            {
                                productData.sizes.map((singleItem, index) => {
                                    return(
                                        <li key={index}><button>{singleItem}</button></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    :
                    ''
                }

                {
                    productData.colorVariations && !productData.affiliateLink ?
                    
                    <div className="pro-details-color">
                        <span>Color</span>
                        <Slider {... colorslider} asNavFor={navLargeImage} ref={slider => (this.slider1 = slider)}>
                            {
                            productData.colorVariations.map((singleItem, index) => {
                                return(
                                    <div className={`color ${singleItem.color}`}  title={singleItem.color} key={index} />
                                )
                            })
                            }
                            
                        </Slider>
                    </div>
                    :
                    ''
                }
                
                <p>{productData.shortDescription}</p>
                
                {
                    productData.affiliateLink 
                    ? 
                    <div className="affiliate-btn-wrapper">
                        <a className="affiliate-btn" href={productData.affiliateLink} target="_blank" rel="noopener noreferrer">Buy Now</a>
                    </div>
                     :
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
                }

                {
                    productData.dealTime
                    ?
                    <div className="product-details-timer">
                        <div className="timer timer-style-3">
                            <Countdown date={new Date(productData.dealTime)} renderer={renderer} />  
                        </div>
                    </div>
                    :
                    ''
                }


                {
                    productData.category ?
                    <div className="pro-details-meta">
                        <span>Categories : </span>
                        <ul>
                            {
                            productData.category.map((singleItem, index)=>{
                                return(
                                    <li key={index}><Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>{singleItem}</Link></li>
                                )
                            })
                            }
                        </ul>
                    </div>
                    :
                    ''
                }

                {
                    productData.tags ?
                    <div className="pro-details-meta">
                        <span>Tags : </span>
                        <ul>
                            {
                            productData.tags.map((singleItem, index)=>{
                                return(
                                    <li key={index}><Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>{singleItem}</Link></li>
                                )
                            })
                            }
                        </ul>
                    </div>
                    :
                    ''
                }
                
                
                <div className="pro-details-social">
                    <ul>
                        <li><a href="//facebook.com"><i className="fa fa-facebook" /></a></li>
                        <li><a href="//twitter.com"><i className="fa fa-twitter" /></a></li>
                        <li><a href="//pinterest.com"><i className="fa fa-pinterest-p" /></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProductContentDefault
