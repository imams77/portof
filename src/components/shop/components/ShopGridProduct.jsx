import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { getShopProjects } from '../../../setup'
import ProductBoxListView from './ProductBoxListView'
import Pagination from '../../common/Pagination'

class ShopGridProduct extends Component {

    constructor() {
        super();
        this.state = {
            pageOfItems: []
        };
    }
    
    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    componentDidUpdate(){
        this.props.dynamicProductLength(this.props.productData.length);
    }

    render() {
        
        const { productData, symbol, column} = this.props;
        var initialProductLength = productData.length;

        return (
            <div>
                {
                initialProductLength > 0 ?
                    <div>
                        <div className={`row ${ column === 'five' ? 'product-five-column' : ( column === 'four' ? 'product-four-column' : 'product-three-column') }`} id="shop-product-row">
                            { 
                                this.state.pageOfItems.map((productData, index) =>{
                                return(
                                    <ProductBoxListView
                                    productData={productData}
                                    symbol={symbol}
                                    key={index}
                                    />
                                        )
                                    }
                                )
                            }
                        </div>
                        <Pagination items={productData} onChangePage={this.onChangePage} />
                    </div>
                    :
                    'No products found'
                    }
            </div>
        )
    }
}

const mapSateToProps = (state) => ({
    productData: getShopProjects(state.productData.products, state.filterData),
    symbol: state.productData.currencySymbol
})

ShopGridProduct.propTypes = {
    category: PropTypes.string,
    symbol: PropTypes.string
}

export default connect(mapSateToProps)(ShopGridProduct)