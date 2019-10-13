import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import { connect } from 'react-redux'

import Breadcrumb from '../common/Breadcrumb'
import { calculateDiscount } from '../../setup'
import { addToCart, addToWishlist, addToCompare } from '../../actions'
import ProductContentDefault from './components/ProductContentDefault'
import DescriptionReviewTab from './components/DescriptionReviewTab'
import RelatedProductSlider from './components/RelatedProductSlider'

class ProductSimpleOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            backgroundPosition: '0% 0%'
        };
    }
    
    componentDidMount() {
        this.setState({
          nav1: this.productLargeImageSliderSettings,
          nav2: this.productSmallImageSliderSettings
        });
    }


    handleMouseMove = (e, image) => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 70
        const y = (e.pageY - top) / height * 70
        this.setState({ backgroundPosition: `${x}% ${y}%`, backgroundImage: `url(${process.env.PUBLIC_URL+ image})` })
    }

    render() {
        const { productData, symbol, addToCart, addToWishlist, addToCompare} = this.props;

        function NextArrow(props) {
            const {onClick} = props;
        
            return (
                <div onClick={onClick}>
                    <button type="button" className="product-dec-icon product-dec-next"><i className='negan-icon-arrows-minimal-right' /></button>
                </div>
            );
        }

        function PrevArrow(props) {
            const {onClick} = props;
        
            return (
                <div onClick={onClick}>
                    <button type="button" className="product-dec-icon product-dec-prev"><i className='negan-icon-arrows-minimal-left'/></button>
                </div>
            );
        }
   
        // product grid slider
        const productSmallImageSliderSettings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: productData.images.length > 4 ? 4 : productData.images.length,
            slidesToScroll: 1,
            vertical: true,
            autoplay: false,
            focusOnSelect: true,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: productData.images.length > 2 ? 2 : productData.images.length
                    }
                }
            ]
        };

        
        // product large image slider

        const productLargeImageSliderSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            draggable: true,
            focusOnSelect: true,
            fade: false,
            swipeToSlide: true,
            autoplay: false
        }

        
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
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                {/* product details image slider */}
                                <div>
                                    <Slider className="product-dec-slider product-dec-left" 
                                    {...productSmallImageSliderSettings}
                                    asNavFor={this.state.nav2}
                                    ref={productSmallImageSliderSettings => (this.productLargeImageSliderSettings = productSmallImageSliderSettings)}
                                    >

                                        {
                                            productData.images.map((image, index)=>{
                                                return(
                                                    <div className="single-small-img" key={index}>
                                                        <img src={process.env.PUBLIC_URL + image} alt="" />
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                    </Slider>

                                    <Slider 
                                    className="product-dec-right pro-dec-big-img-slider"  
                                    {...productLargeImageSliderSettings}
                                    asNavFor={this.state.nav2}
                                    ref={productLargeImageSliderSettings => (this.productSmallImageSliderSettings = productLargeImageSliderSettings)}
                                    >
                                        {
                                            productData.images.map((image, index)=>{
                                                return(
                                                    <div className="single-big-img easyzoom-style" key={index}>
                                                        <figure onMouseMove={(e)=>this.handleMouseMove(e, image)}  style={this.state}>
                                                            <img src={process.env.PUBLIC_URL + image} alt="" />
                                                        </figure>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                    
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                {/* product content */}
                                <ProductContentDefault productData = {productData} symbol={symbol} addToCart={addToCart} addToWishlist={addToWishlist} addToCompare={addToCompare} productPrice={productPrice} discountedPrice={discountedPrice} ratingStars={RatingStars} navLargeImage = {this.state.nav1} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="description-review-area pb-70">
                    <div className="container">
                        {/* description review tab */}
                        <DescriptionReviewTab productData={productData} />
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