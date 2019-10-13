import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

import HeaderOne from '../layouts/headers/HeaderOne'
import SliderSix from './components/hero-sliders/SliderSix'
import FeatureIcon from './components/FeatureIcon'
import ProductGrid from './components/ProductGrid'
import FooterOne from '../layouts/footers/FooterOne'

class FurnitureTwo extends Component {
    closeOverlay(){
        let asideNavMenuOverlay = document.getElementById('header-aside-nav-menu');
        let bodyWrapper = document.getElementById('body-wrapper');
        let asideCart = document.getElementById('sidebar-cart-active');
        let mobileMenu  = document.getElementById('mobile-menu-overlay');
        
        asideCart.classList.remove('inside');
        asideNavMenuOverlay.classList.remove('inside');
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
                        <title>Negan | Furniture Store</title>
                        <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
                    </Helmet>

                    {/* header */}
                    <HeaderOne topBar = "hidden" logo="/img/logo/logo.png" />

                    {/* hero slider */}
                    <SliderSix />

                    {/* product grid area */}
                    <div className="product-area pt-60 pb-60 product-area-mrg-xs">
                        <div className="container-fluid">
                            <div className="product-area-wrap">
                                <div className="product-area-wrap">
                                    {/* product grid */}
                                    <ProductGrid category="furniture" count="15" column="five" />
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="product-btn text-center mt-5 load-more-btn toggle-btn">
                                                <Link className="btn btn-color-black btn-align-center btn-size-lg btn-style-outline loadMore" to={process.env.PUBLIC_URL + '/shop-sidebar'}>SEE MORE PRODUCTS</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* feature icon */}
                    <div className="feature-area pb-25 bg-gray-4 pt-60 border-top-1">
                        <div className="container-fluid">
                            <FeatureIcon />
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

export default FurnitureTwo