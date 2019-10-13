import React, { Component } from 'react'
import Helmet from 'react-helmet'

import BreadcrumbTwo from '../common/BreadcrumbTwo'
import ShopGridProduct from './components/ShopGridProduct'
import ShopTopFilter from './components/ShopTopFilter'
import ShopSidebarFilter from './components/ShopSidebarFilter'

class ShopSidebar extends Component {

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
               <BreadcrumbTwo title="Shop Sidebar" image="/img/bg/breadcrumb-bg.jpg" />

                <div className="shop-page-area pt-80 pb-80">
                    <div className="container">
                        {/* shop top filter */}
                        <ShopTopFilter dynamicProductLength={this.state.dynamicProductLength}/>

                        <div className="row flex-row-reverse">
                            <div className="col-lg-9">
                                <div className="product-area-wrap grid-view-row" id="product-area-wrap">
                                    <ShopGridProduct category={this.state.category} size={this.state.size} column="three" dynamicProductLength={this.dynamicProductLength} />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                {/* shop sidebar filter */}
                                <ShopSidebarFilter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopSidebar