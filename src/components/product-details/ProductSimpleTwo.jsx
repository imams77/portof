import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import StickyBox from "react-sticky-box"

import Breadcrumb from '../common/Breadcrumb'
import { calculateDiscount } from '../../setup'
import { addToCart, addToWishlist, addToCompare } from '../../actions'
import ProductContentTwo from './components/ProductContentTwo'
import DescriptionReviewTabTwo from './components/DescriptionReviewTabTwo'
import RelatedProductSlider from './components/RelatedProductSlider'
import ProductDetailsStickyImages from './components/ProductDetailsStickyImages'

class ProductSimpleOne extends Component {


    render() {
        const { productData, symbol, addToCart, addToWishlist, addToCompare} = this.props;
        
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
            <div>
                {/* seo content */}
                <Helmet>
                    <title>Negan | Product Details</title>
                    <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
                </Helmet>

                {/* breadcrumb */}
                <Breadcrumb parent="Shop" parentUrl="/shop-sidebar" title="Product Details" />

                <div className="product-details-area pt-70 pb-65">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                {/* product details image gallery */}
                                <ProductDetailsStickyImages productData={productData} />
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <StickyBox offsetTop={100} offsetBottom={20}>
                                    {/* product content */}
                                    <ProductContentTwo productData = {productData} symbol={symbol} addToCart={addToCart} addToWishlist={addToWishlist} addToCompare={addToCompare} productPrice={productPrice} discountedPrice={discountedPrice} ratingStars={RatingStars} />
                                
                                    <div className="description-review-area">
                                            {/* description review tab */}
                                            <DescriptionReviewTabTwo productData={productData} />
                                    </div>
                                </StickyBox>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className="related-product-wrap pb-35">
                    <div className="container">
                        <div className="section-title text-center mb-50">
                            <h2>Related Products</h2>
                            <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                        </div>
                            <div className="related-product-slider-wrapper">
                                {/* related product slider */}
                                <RelatedProductSlider category={productData.category[0]} />
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    let productId = ownProps.match.params.id;
    return {
        productData: state.productData.products.find(product => product.id === parseInt(productId)),
        symbol: state.productData.currencySymbol
    }
}

export default connect(mapStateToProps, {addToCart, addToCompare, addToWishlist}) (ProductSimpleOne)