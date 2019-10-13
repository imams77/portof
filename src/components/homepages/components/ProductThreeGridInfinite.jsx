import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

import { getProducts } from '../../../setup'
import ProductBoxViewThree from '../../common/ProductBoxViewThree'

class ProductThreeGridInfinite extends Component {

    constructor (props) {
        super (props)
        this.state = { limit: 3, hasMore: true };
    }

    componentWillMount(){
        this.fetchMore();
    }

    fetchMore = () => {
        if (this.state.limit >= this.props.productData.length){
            this.setState({ hasMore: false });
            return;
        }
        
        setTimeout(() => {
            this.setState({
                limit: this.state.limit + 3
            });
        }, 2000);
    }

    render() {
        
        const { productData, symbol, column} = this.props;

        return (
            <InfiniteScroll
            dataLength={this.state.limit}
            next={this.fetchMore}
            hasMore={this.state.hasMore}
            loader={<div className="loading"><img src={process.env.PUBLIC_URL+'/img/loading.gif'} alt=""/></div>}
            endMessage={
                <p className="inf-product-end-message">
                    <b>You've seen all of our products!</b>
                </p>
            }
            >
                <div className={`row ${ column === 'five' ? 'product-five-column' : ( column === 'four' ? 'product-four-column' : 'product-three-column') }`}>
                    { productData.slice(0, this.state.limit).map((product, index) =>
                            <ProductBoxViewThree
                            productData={product}
                            symbol={symbol}
                            key={index}
                            />
                        )
                    }
                </div>
            </InfiniteScroll>
        )
    }
}

const mapSateToProps = (state, ownProps) => ({
    productData: getProducts(state.productData.products, ownProps.category, ownProps.count, ownProps.type),
    symbol: state.productData.currencySymbol
})

ProductThreeGridInfinite.propTypes = {
    category: PropTypes.string,
    symbol: PropTypes.string
}

export default connect(mapSateToProps)(ProductThreeGridInfinite)