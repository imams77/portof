import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'

import HeaderOne from '../layouts/headers/HeaderOne'
import ProductThreeGridInfinite from './components/ProductThreeGridInfinite'
import FooterOne from '../layouts/footers/FooterOne'

class FashionEleven extends Component {

    closeOverlay(){
        let asideMenuOverlay = document.getElementById('header-aside-menu');
        let bodyWrapper = document.getElementById('body-wrapper');
        let asideCart = document.getElementById('sidebar-cart-active');
        let mobileMenu  = document.getElementById('mobile-menu-overlay');
        
        asideCart.classList.remove('inside');
        asideMenuOverlay.classList.remove('inside');
        bodyWrapper.classList.remove('overlay-active');
        mobileMenu.classList.remove('active');
    }

    render() {
        return (
            <div>
                <div className="wrapper wrapper-2 wrapper-3" id="body-wrapper">
                    <div className="body-overlay-3"></div>
                    <div className="body-overlay-2"></div>
                    <div className="body-overlay" id="body-overlay" onClick={this.closeOverlay}></div>

                    {/* seo content */}
                    <Helmet>
                        <title>Negan | Fashion Store</title>
                        <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
                    </Helmet>

                    {/* header */}
                    <HeaderOne topBar = "hidden" logo="/img/logo/logo.png" />

                    {/* product grid */}
                    <div className="product-area pb-30">
                        <div className="container-fluid">
                            <div className="product-area-wrap text-center">
                                <ProductThreeGridInfinite category="fashion" />
                            </div>
                        </div>
                    </div>

                    {/* footer */}
                    <FooterOne logo="/img/logo/logo.png" borderTop = "true" />
                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default FashionEleven