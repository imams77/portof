import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import { getProducts } from '../../../setup'
import { PropTypes } from 'prop-types'
import ProductBoxView from '../../common/ProductBoxView'

class ProductGrid extends Component {
    render() {
        
        const { productData, symbol} = this.props;
        
        let productDataList = productData.map((productData, index) => {
            return(
                <ProductBoxView
                productData={productData}
                symbol={symbol}
                key={index}
                />
                )
        });

        function NextArrow(props) {
            const {onClick} = props;
        
            return (
                <div onClick={onClick}>
                    <button type="button" className="slick-arrow slick-next"><i className='negan-icon-arrows-minimal-right' /></button>
                </div>
            );
        }

        function PrevArrow(props) {
            const {onClick} = props;
        
            return (
                <div onClick={onClick}>
                    <button type="button" className="slick-arrow slick-prev"><i className='negan-icon-arrows-minimal-left'/></button>
                </div>
            );
        }

        // product grid slider
        const productSliderTwoSettings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 6000,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
            responsive: [{
                breakpoint: 1499,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
            ]
        };


        return (
            <Slider {...productSliderTwoSettings}>
                { productDataList }
            </Slider>
        )
    }
}

const mapSateToProps = (state, ownProps) => ({
    productData: getProducts(state.productData.products, ownProps.category, ownProps.count, ownProps.type),
    symbol: state.productData.currencySymbol
})

ProductGrid.propTypes = {
    category: PropTypes.string,
    symbol: PropTypes.string
}

export default connect(mapSateToProps)(ProductGrid)