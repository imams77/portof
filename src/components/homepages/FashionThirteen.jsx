import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'

import HeaderThree from '../layouts/headers/HeaderThree'
import ProductFourGridInfinite from './components/ProductFourGridInfinite'
import MobileHeader from '../layouts/headers/MobileHeader'
import FooterOne from '../layouts/footers/FooterOne'

class FashionThirteen extends Component {

    closeOverlay(){
        let bodyWrapper = document.getElementById('body-wrapper');
        let asideCart = document.getElementById('sidebar-cart-active');
        let mobileMenu  = document.getElementById('mobile-menu-overlay');
        
        asideCart.classList.remove('inside');
        bodyWrapper.classList.remove('overlay-active');
        mobileMenu.classList.remove('active');
    }
    
    render() {
        return (
            <div>
                {/* header */}
                <HeaderThree logo="/img/logo/logo-2.png" theme="dark" />

                <div className="wrapper-3">
                    {/* mobile header */}
                    <MobileHeader logo="/img/logo/logo.png" />
                </div>

                <div className="home-sidebar-right-2">
                    <div className="wrapper wrapper-2 wrapper-3" id="body-wrapper">
                        <div className="body-overlay-3"></div>
                        <div className="body-overlay-2"></div>
                        <div className="body-overlay" id="body-overlay" onClick={this.closeOverlay}></div>
                        
                        {/* seo content */}
                        <Helmet>
                            <title>Negan | Fashion Store</title>
                            <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
                        </Helmet>

                        <div className="product-area pb-30">
                            <div className="container-fluid">
                                <ProductFourGridInfinite column="four" category="fashion" />
                            </div>
                        </div>

                        {/* footer */}
                        <FooterOne logo="/img/logo/logo.png" borderTop="true" />
                    </div>
                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default FashionThirteen