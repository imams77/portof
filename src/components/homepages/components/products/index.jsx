import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { getProducts } from '../../../../setup'
import SingleProduct from './single-product'

class products extends Component {
    render() {
        
        const { productData, symbol, column} = this.props;
        
        let productDataList = productData.map((productData, index) => {
            return(
                <SingleProduct
                productData={productData}
                symbol={symbol}
                key={index}
                />
                )
        });

        return (
            <div className={`row ${ column === 'five' ? 'product-five-column' : ( column === 'four' ? 'product-four-column' : 'product-three-column') }`}>
                { productDataList }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    productData: getProducts(state.productData.products, ownProps.category, ownProps.count, ownProps.type),
    symbol: 'IDR'
})

products.propTypes = {
    category: PropTypes.string,
    symbol: PropTypes.string
}

export default connect(mapStateToProps)(products)