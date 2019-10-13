import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import { PropTypes } from 'prop-types'

import { getProducts } from '../../../setup'
import ProductBoxViewThree from '../../common/ProductBoxViewThree'

class ProductGrid extends Component {
    render() {
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
        const productSliderThreeSettings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 6000,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
            responsive: [{
                breakpoint: 1499,
                settings: {
                    slidesToShow: 3,
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
                    slidesToShow: 2,
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

        
        const { productData, symbol} = this.props;
        
        let productDataList = productData.map((productData, index) => {
            return(
                <ProductBoxViewThree
                productData={productData}
                symbol={symbol}
                key={index}
                />
                )
        });

        return (
            <Slider {...productSliderThreeSettings}>
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