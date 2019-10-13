import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import CategoryBanner from './components/CategoryBanner'
import HeaderOne from '../layouts/headers/HeaderOne'
import FooterThree from '../layouts/footers/FooterThree'

class FashionEight extends Component {

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

                    <div className="product-banner-area">
                        <CategoryBanner />
                    </div>

                    {/* footer */}
                    <FooterThree />
                </div>
            </div>
        )
    }
}

export default FashionEight