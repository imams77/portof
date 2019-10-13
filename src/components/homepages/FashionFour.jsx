import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { ToastContainer } from 'react-toastify'

import HeaderTwo from '../layouts/headers/HeaderTwo'
import InstagramGrid from './components/InstagramGrid'
import Newsletter from './components/Newsletter'
import BrandLogoSlider from './components/BrandLogoSlider'
import BannerBackgroundThree from './components/BannerBackgroundThree'
import TestimonialSliderTwo from './components/TestimonialSliderTwo'
import ProductSmallGridSlider from './components/ProductSmallGridSlider'
import ProductGridSliderTwo from './components/ProductGridSliderTwo'
import ProductGridSliderThree from './components/ProductGridSliderThree'
import FooterTwo from '../layouts/footers/FooterTwo'

class FashionFour extends Component {
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
                        <title>Negan | Fashion Store</title>
                        <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
                    </Helmet>

                    {/* header */}
                    <HeaderTwo logo="/img/logo/logo.png" />

                    {/* banner background area */}
                    <div className="banner-area padding-5-row-col pt-5 border-top-1">
                        <div className="container-fluid">
                            {/* banner background */}
                            <BannerBackgroundThree />
                        </div>
                    </div>

                    {/* product grid slider area */}
                    <div className="product-area pt-70 pb-30">
                        <div className="container">
                            {/* section title */}
                            <div className="section-title text-center mb-30 section-title-border">
                                <h2>Top Trending</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>
                            {/* product tab slider */}
                            <Tabs>
                                <TabList className="pb-40 text-center">
                                    <Tab>All</Tab>
                                    <Tab>WOMEN</Tab>
                                    <Tab>MEN</Tab>
                                    <Tab>ACCESSORIES</Tab>
                                </TabList>
                                <TabPanel className="product-tab-slider-wrapper">
                                    <ProductGridSliderTwo category="fashion" count="10" />
                                </TabPanel>
                                <TabPanel>
                                    <ProductGridSliderTwo category="women" count="10" />
                                </TabPanel>
                                <TabPanel>
                                    <ProductGridSliderTwo category="men" count="10" />
                                </TabPanel>
                                <TabPanel>
                                    <ProductGridSliderTwo category="accessories" count="10" />
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>  

                    {/* product grid slider area */}
                    <div className="special-area pb-35">
                        <div className="container">
                            {/* section title */}
                            <div className="section-title text-center mb-30 section-title-border">
                                <h2>Special Offer</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>
                            {/* product grid slider */}
                            <div className="special-product-slider-wrapper">
                                <ProductGridSliderThree category="fashion" type="sale" count="7" />
                            </div>
                        </div>
                    </div>  

                    {/* testimonial slider area */}
                    <div className="testimonial-area bg-pink pt-90 pb-90">
                        <div className="container">
                            {/* testimonial slider */}
                            <TestimonialSliderTwo />
                        </div>
                    </div>

                    {/* product multi row grid area */}
                    <div className="product-category-list-area pt-80 pb-50">
                        <div className="container">
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

                    {/* brand logo slider area */}
                    <div className="brand-logo section-padding-1 pb-50 border-top-1 pt-45">
                        <div className="container-fluid">
                            {/* brand logo slider */}
                            <BrandLogoSlider />
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
                    
                    {/* Instagram grid area */}
                    <div className="instagram-area pt-50 pb-50">
                    {/* Instagram grid */}
                        <InstagramGrid accessToken = "6666969077.1677ed0.d325f406d94c4dfab939137c5c2cc6c2" />
                    </div>

                    {/* footer */}
                    <FooterTwo logo="/img/logo/logo-2.png" theme="dark"/>

                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default FashionFour