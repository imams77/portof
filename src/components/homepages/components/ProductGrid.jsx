import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { getProducts } from '../../../setup'
import ProductBoxView from '../../common/ProductBoxView'

class ProductGrid extends Component {
    render() {
        
        const { productData, symbol, column} = this.props;
        
        let productDataList = productData.map((productData, index) => {
            return(
                <ProductBoxView
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

const mapSateToProps = (state, ownProps) => ({
    productData: getProducts(state.productData.products, ownProps.category, ownProps.count, ownProps.type),
    symbol: state.productData.currencySymbol
})

ProductGrid.propTypes = {
    category: PropTypes.string,
    symbol: PropTypes.string
}

export default connect(mapSateToProps)(ProductGrid)