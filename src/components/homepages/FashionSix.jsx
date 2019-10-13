import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'

import HeaderThree from '../layouts/headers/HeaderThree'
import SliderSeven from './components/hero-sliders/SliderSeven'
import BlogGridSlider from './components/BlogGridSlider'
import FeatureIcon from './components/FeatureIcon'
import ProductTwoGrid from './components/ProductTwoGrid'
import Newsletter from './components/Newsletter'
import BannerGridFive from './components/BannerGridFive'
import InstagramGrid from './components/InstagramGrid'
import ProductSmallGridSlider from './components/ProductSmallGridSlider'
import VideoBackground from './components/VideoBackground'
import MobileHeader from '../layouts/headers/MobileHeader'
import FooterTwo from '../layouts/footers/FooterTwo'

class FashionSix extends Component {

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
                <HeaderThree logo="/img/logo/logo.png" />

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

                        {/* hero slider area */}
                        <SliderSeven />
                        
                        {/* Feature icons area */}
                        <div className="feature-area pb-30 pt-60">
                            <div className="container-fluid">
                                {/* Feature icons */}
                                <FeatureIcon />
                            </div>
                        </div>

                        {/* banner grid area */}

                        <div className="banner-area padding-10-row-col">
                            <div className="container-fluid">
                                {/* banner grid */}
                                <BannerGridFive />
                            </div>
                        </div>
                        
                        {/* product grid */}
                        <div className="product-area pt-50 pb-30">
                            <div className="container-fluid">

                                {/* section title */}
                                <div className="section-title text-center mb-50">
                                    <h2>Must Have</h2>
                                    <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                                </div>

                                <div className="product-area-wrap">
                                    {/* product grid */}
                                    <ProductTwoGrid category="fashion" count="10" column="five" />
                                </div>
                            </div>
                        </div>

                        {/* video background area */}
                        <VideoBackground />

                        
                        {/* product multi row grid area */}
                        <div className="product-category-list-area pt-80 pb-50">
                            <div className="container-fluid">
                                <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="pro-category-list-wrap mb-30">
                                        <div className="pro-category-list-title">
                                            <h4>Top Sale</h4>
                                        </div>
                                        <div className="single-pro-category-list-warp">
                                            <ProductSmallGridSlider category="fashion" count="6" type="sale" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="pro-category-list-wrap mb-30">
                                        <div className="pro-category-list-title">
                                            <h4>Most View</h4>
                                        </div>
                                        <div className="single-pro-category-list-warp">
                                        <ProductSmallGridSlider category="fashion" count="6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="pro-category-list-wrap mb-30">
                                        <div className="pro-category-list-title">
                                            <h4>Top Rate</h4>
                                        </div>
                                        <div className="single-pro-category-list-warp">
                                            <ProductSmallGridSlider category="fashion" count="6" type="rating" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="pro-category-list-wrap mb-30">
                                        <div className="pro-category-list-title">
                                            <h4>Best Seller</h4>
                                        </div>
                                        <div className="single-pro-category-list-warp">
                                        <ProductSmallGridSlider category="fashion" count="6" />
                                        </div>
                                    </div>
                                </div>
                                </div>
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

                        {/* blog grid slider area */}
                        <div className="blog-area pt-80 pb-45">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {/* section title */}
                                        <div className="section-title text-center mb-50">
                                            <h2>Latest Blog</h2>
                                            <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                                        </div>
                                        {/* blog grid slider */}
                                        <BlogGridSlider />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Instagram grid */}
                        <div className="instagram-area pb-60">
                            <InstagramGrid accessToken = "6666969077.1677ed0.d325f406d94c4dfab939137c5c2cc6c2" />
                        </div>

                        {/* footer */}
                        <FooterTwo logo="/img/logo/logo-2.png" theme="dark" />
                    </div>
                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default FashionSix