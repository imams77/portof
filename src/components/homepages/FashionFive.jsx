import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'

import HeaderOne from '../layouts/headers/HeaderOne'
import SliderFive from './components/hero-sliders/SliderFive'
import BannerGridFour from './components/BannerGridFour'
import ProductGrid from './components/ProductGrid'
import BannerBackgroundTwo from './components/BannerBackgroundTwo'
import BrandLogoSlider from './components/BrandLogoSlider'
import InstagramGrid from './components/InstagramGrid'
import BlogGridSliderTwo from './components/BlogGridSliderTwo'
import Newsletter from './components/Newsletter'
import FooterOne from '../layouts/footers/FooterOne'

class FashionFive extends Component {

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

                    {/* hero slider area */}
                    <SliderFive />

                    {/* banner grid area */}
                    <div className="banner-area padding-10-row-col pt-20 border-top-1">
                        <div className="container-fluid">
                            { /* banner grid */}
                            <BannerGridFour />
                        </div>
                    </div>

                    {/* product grid */}
                    <div className="product-area pt-60 pb-30">
                        <div className="container-fluid">
                            {/* section title */}
                            <div className="section-title text-center mb-50 section-title-border">
                                <h2>New Arrival</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>

                            <div className="product-area-wrap">
                                {/* product grid */}
                                <ProductGrid category="fashion" count="10" column="five" />
                            </div>
                        </div>
                    </div>

                    {/* banner background */}
                    <BannerBackgroundTwo />

                    {/* blog grid slider */}
                    <div className="blog-area pt-80 pb-45">
                        <div className="container">
                            <div className="section-title text-center mb-50 section-title-border">
                                <h2>Latest Blog</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>
                            {/* blog grid slider */}
                            <BlogGridSliderTwo />
                        </div>
                    </div>

                    {/* newsletter area */}
                    <div className="subscribe-area bg-pink pt-50 pb-55">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 ml-auto mr-auto">
                                    {/* newsletter */}
                                    <Newsletter mailchimpUrl = "//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* brand logo slider area */}
                    <div className="brand-logo section-padding-1 pb-50 pt-45">
                        <div className="container-fluid">
                            {/* brand logo slider */}
                            <BrandLogoSlider />
                        </div>
                    </div>
                    
                    {/* Instagram grid area */}
                    <div className="instagram-area pt-20 pb-60">
                    {/* Instagram grid */}
                        <InstagramGrid accessToken = "6666969077.1677ed0.d325f406d94c4dfab939137c5c2cc6c2" />
                    </div>

                    {/* footer */}
                    <FooterOne logo="/img/logo/logo.png" borderTop = "true" />
                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default FashionFive