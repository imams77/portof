import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import { calculateDiscount } from '../../setup'

class ProductBoxView extends Component {

    render() {
        const {productData, symbol} = this.props;

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
    
            <div className="single-pro-category-list">
                <div className="category-list-img">
                    <Link to={process.env.PUBLIC_URL+'/product-simple-one/'+productData.id}>
                        <img className="default-img" src={process.env.PUBLIC_URL + productData.images[0]} alt="" />
                        {
                            productData.images.length > 1 ?
                            <img className="hover-img" src={process.env.PUBLIC_URL + productData.images[1]} alt="" />
                            :
                            ''
                        }
                    </Link>
                </div>
                <div className="pro-category-content">
                    <h5><Link to={process.env.PUBLIC_URL+'/product-simple-one/'+productData.id}>{productData.name}</Link></h5>
                    <div className={`product-price ${productData.discount !== 0 ? 'product-price-3': ''}`}>
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
                            productData.rating ?
                            <div className="product-rating">
                                {RatingStars} 
                            </div>
                            :
                            ''
                        }
                </div>
            </div>
        )
    }
}

ProductBoxView.propTypes = {
    productData : PropTypes.object,
    symbol : PropTypes.string
}

export default ProductBoxView