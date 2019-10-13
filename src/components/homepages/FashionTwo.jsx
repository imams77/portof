import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'

import HeaderTwo from '../layouts/headers/HeaderOne'
import SliderTwo from './components/hero-sliders/SliderTwo'
import InstagramGrid from './components/InstagramGrid'
import GridCategory from './components/GridCategory'
import BannerGridTwo from './components/BannerGridTwo'
import DealCounter from './components/DealCounter'
import BlogGridSlider from './components/BlogGridSlider'
import Newsletter from './components/Newsletter'
import ProductTwoGrid from './components/ProductTwoGrid'
import FooterTwo from '../layouts/footers/FooterTwo'

class FashionTwo extends Component {
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
    
    render(){
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

                    {/* hero slider */}
                    <SliderTwo />

                    {/* grid category area */}
                    <div className="category-area pt-80 padding-5-row-col">
                        <div className="container-fluid">
                            {/* section title */}
                            <div className="section-title text-center mb-50">
                                <h2>Shop by Collections</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>

                            <div className="category-all-wrap">
                                {/* grid category */}
                                <GridCategory />
                            </div>
                        </div>
                    </div>

                    {/* product grid */}
                    <div className="product-area pt-70 pb-30">
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

                    {/* grid banner two */}
                    <BannerGridTwo />

                    {/* deal counter */}
                    <div className="deal-area bg-gray-3 pt-80">
                        <div className="container">
                            <DealCounter image="/img/banner/banner-8.jpg" url="/shop-sidebar" dateTime="October 13, 2020 11:13:00" title="Summer" year="2019" message="Curabitur placerat urna augue, id luctus sem imperdiet id. Nunc congue ac libero ut lacinia. In ultrices elementum ipsum, in tempus enim accumsan.." />
                        </div>
                    </div>
                    
                    {/* blog grid slider area */}
                    <div className="blog-area pt-80 pb-45">
                        <div className="container">
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
                    <FooterTwo logo="/img/logo/logo-2.png" theme="dark" />
                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default FashionTwo