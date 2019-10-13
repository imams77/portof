import React, { Component } from 'react'
import Helmet from 'react-helmet'

import BreadcrumbTwo from '../common/BreadcrumbTwo'
import ShopGridProduct from './components/ShopGridProduct'
import ShopTopFilter from './components/ShopTopFilter'

class ShopFourColumn extends Component {

    state = {
        dynamicProductLength: ''
    }

    dynamicProductLength = (dynamicProductLength) => {
        this.setState({dynamicProductLength})
    }

    render() {
        return (
            <div>
                {/* seo content */}
                <Helmet>
                    <title>Negan | Shop</title>
                    <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
                </Helmet>
               {/* breadcrumb */}
               <BreadcrumbTwo title="Shop Four Column" image="/img/bg/breadcrumb-bg.jpg" />

                <div className="shop-page-area pt-80 pb-80">
                    <div className="container">
                        {/* shop top filter */}
                        <ShopTopFilter dynamicProductLength={this.state.dynamicProductLength}/>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product-area-wrap grid-view-row" id="product-area-wrap">
                                    <ShopGridProduct category={this.state.category} size={this.state.size} column="four" dynamicProductLength={this.dynamicProductLength} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopFourColumn