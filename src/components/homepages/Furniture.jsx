import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'

import HeaderTwo from '../layouts/headers/HeaderTwo'
import SliderThree from './components/hero-sliders/SliderThree'
import FeatureIcon from './components/FeatureIcon'
import ProductTwoGrid from './components/ProductTwoGrid';
import LocationMap from '../common/LocationMap'
import BannerGridThree from './components/BannerGridThree'
import GridCategoryTwo from './components/GridCategoryTwo'
import FooterOne from '../layouts/footers/FooterOne'

class Furniture extends Component {
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
                    <HeaderTwo logo="/img/logo/logo-3.png" />

                    {/* hero slider */}
                    <SliderThree />
                    
                    {/* grid category */}
                    <div className="banner-area pt-35">
                        <div className="container">
                            <GridCategoryTwo />
                        </div>
                    </div>
                    
                    {/* product grid */}
                    <div className="product-area pt-70 pb-30">
                        <div className="container">
                            {/* section title */}
                            <div className="section-title text-center mb-50 section-title-border">
                                <h2>New Products</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>

                            <div className="product-area-wrap">
                                {/* product grid */}
                                <ProductTwoGrid category="furniture" count="8" type="new" column="four" />
                            </div>
                        </div>
                    </div>

                    {/* banner grid */}
                    <div className="banner-area">
                        <BannerGridThree />
                    </div>

                    {/* product grid */}
                    <div className="product-area pt-70 pb-30">
                        <div className="container">
                            {/* section title */}
                            <div className="section-title text-center mb-55 section-title-border">
                                <h2>Sale Products</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>

                            <div className="product-area-wrap">
                                {/* product grid */}
                                <ProductTwoGrid category="furniture" count="8" type="sale" column="four" />
                            </div>
                        </div>
                    </div>

                    {/* feature icon */}
                    <div className="feature-area pb-25 bg-gray-4 pt-60">
                        <div className="container">
                            <FeatureIcon />
                        </div>
                    </div>

                    {/* fullwidth map */}
                    <div className="map-area">
                        <LocationMap latitude="47.444" longitude="-122.176" />
                    </div>

                    {/* footer */}
                    <FooterOne logo="/img/logo/logo.png"/>

                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default Furniture