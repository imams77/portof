import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'

import HeaderOne from '../layouts/headers/HeaderOne'
import SliderFour from './components/hero-sliders/SliderFour'
import FeatureText from './components/FeatureText'
import ProductTwoGrid from './components/ProductTwoGrid'
import ProductGridSlider from './components/ProductGridSlider'
import BannerBackgroundTwo from './components/BannerBackgroundTwo'
import Newsletter from './components/Newsletter'
import BrandLogoSlider from './components/BrandLogoSlider'
import TestimonialSlider from './components/TestimonialSlider'
import InstagramGrid from './components/InstagramGrid'
import FooterTwo from '../layouts/footers/FooterTwo'

class FashionThree extends Component {

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
                    <SliderFour />

                    {/* feature text area */}
                    <div className="feature-area border-top-1 padding-5-row-col pt-10">
                        <div className="container-fluid">
                            {/* feature text */}
                            <FeatureText />
                        </div>
                    </div>

                    {/* product grid */}
                    <div className="product-area pt-70 pb-50">
                        <div className="container-fluid">
                            {/* section title */}
                            <div className="section-title text-center mb-50 section-title-border">
                                <h2>New Arrival</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>
                            <div className="product-area-wrap">
                                
                                {/* product grid */}
                                <ProductTwoGrid category="fashion" count="20" column= "five" />

                            </div>
                        </div>
                    </div>

                    {/* banner background */}
                    <BannerBackgroundTwo />

                    {/* product grid slider area */}
                    <div className="popular-product-area pt-80 pb-30">
                        <div className="container-fluid">
                            {/* section title */}
                            <div className="section-title text-center mb-50 section-title-border">
                                <h2>Latest This Week</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>
                        </div>
                        {/* product grid slider */}
                        <ProductGridSlider category="fashion" type="new" count="7" />
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

                    {/* testimonial slider area */}
                    <div className="testimonial-area pt-55 pb-45">
                        <div className="container">
                            <div className="section-title text-center mb-45 section-title-border">
                                <h2>Clients Say</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>

                            {/* testimonial slider */}
                            <TestimonialSlider />

                        </div>
                    </div>

                    {/* brand logo slider area */}
                    <div className="brand-logo section-padding-1 pb-50 border-top-1 pt-45">
                        <div className="container-fluid">
                            {/* brand logo slider */}
                            <BrandLogoSlider />
                        </div>
                    </div>
                
                    {/* Instagram grid */}
                    <div className="instagram-area pt-50 pb-50">
                        <InstagramGrid accessToken = "6666969077.1677ed0.d325f406d94c4dfab939137c5c2cc6c2" />
                    </div>

                    {/* footer */}
                    <FooterTwo logo="/img/logo/logo-2.png" theme="dark" />
                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default FashionThree