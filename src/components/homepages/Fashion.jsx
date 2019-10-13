import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import HeaderOne from '../layouts/headers/HeaderOne'
import SliderOne from './components/hero-sliders/SliderOne'
import BannerGrid from './components/BannerGrid'
import ProductGrid from './components/ProductGrid'
import BannerBackground from './components/BannerBackground'
import FeatureIcon from './components/FeatureIcon'
import InstagramGrid from './components/InstagramGrid'
import FooterOne from '../layouts/footers/FooterOne'

class Fashion extends Component {

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
                    <HeaderOne type = "transparent" logo="/img/logo/logo.png" />

                    {/* hero slider area */}
                    <SliderOne />

                    {/* banner grid area */}
                    <BannerGrid />

                    {/* product grid */}
                    <div className="product-area pt-80 pb-80">
                        <div className="container">

                            {/* section title */}
                            <div className="section-title text-center mb-60">
                                <h2>Must Have</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>

                            <div className="product-area-wrap">
                                {/* product grid */}
                                <ProductGrid category="fashion" count="6" type="new" />

                                <div className="product-btn text-center mt-10">
                                    <Link className="btn btn-color-black btn-align-center btn-size-lg btn-style-outline" to={process.env.PUBLIC_URL+'/shop-sidebar'}>VIEW MORE PRODUCT</Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/* Banner background area */}
                    <BannerBackground bannerTitle = "#PubertyChallenge" bannerBgImage = "/img/banner/banner-4.jpg" />
                    
                    {/* Instagram grid */}
                    <div className="instagram-area pt-20 pb-60">
                        <InstagramGrid accessToken = "6666969077.1677ed0.d325f406d94c4dfab939137c5c2cc6c2" />
                    </div>

                    {/* Feature icons area */}
                    <div className="feature-area pb-30">
                        <div className="container-fluid">
                            {/* Feature icons */}
                            <FeatureIcon />
                        </div>
                    </div>

                    {/* footer */}
                    <FooterOne logo="/img/logo/logo.png"  borderTop = "true"  />
                    
                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default Fashion