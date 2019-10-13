import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

import HeaderOne from '../layouts/headers/HeaderOne'
import SliderEight from './components/hero-sliders/SliderEight'
import InstagramGrid from './components/InstagramGrid'
import Newsletter from './components/Newsletter'
import ProductGridSliderFour from './components/ProductGridSliderFour'
import FooterOne from '../layouts/footers/FooterOne'

class FashionSeven extends Component {

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
                    <SliderEight />

                    {/* product area */}
                    <div className="product-area product-md-xs-pt-50">
                        <div className="product-wrap-2">
                            <div className="product-categori-img bg-img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/products/hm-12-pro-cat1.jpg'}')`}}>
                                <div className="cati-btn">
                                    <Link className="btn btn-color-white btn-size-lg btn-style-outline btn-outline-bigger" to={process.env.PUBLIC_URL + '/shop-sidebar'}>WOMEN</Link>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="ml-auto col-lg-6 col-md-12">
                                        <div className="product-top-right">
                                            <div className="product-grid-slider-four-wrapper">
                                                {/* product grid slider */}
                                                <ProductGridSliderFour category = "women" count="8" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-wrap-2">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="product-top-right">
                                            <div className="product-grid-slider-four-wrapper">
                                                {/* product grid slider */}
                                                <ProductGridSliderFour category = "men" count="8" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-categori-img pro-categori2-position bg-img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/products/hm-12-pro-cat2.jpg'}')`}}>
                                <div className="cati-btn">
                                    <Link className="btn btn-color-white btn-size-lg btn-style-outline btn-outline-bigger" to={process.env.PUBLIC_URL + '/shop-sidebar'}>MEN</Link>
                                </div>
                            </div>
                            
                        </div>

                        <div className="product-wrap-2">
                            <div className="product-categori-img bg-img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/products/hm-12-pro-cat3.jpg'}')`}}>
                                <div className="cati-btn">
                                    <Link className="btn btn-color-white btn-size-lg btn-style-outline btn-outline-bigger" to={process.env.PUBLIC_URL + '/shop-sidebar'}>KIDS</Link>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="ml-auto col-lg-6 col-md-12">
                                        <div className="product-top-right">
                                            <div className="product-grid-slider-four-wrapper">
                                                {/* product grid slider */}
                                                <ProductGridSliderFour category = "kids" count="8" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-wrap-2">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="product-top-right">
                                            <div className="product-grid-slider-four-wrapper">
                                                {/* product grid slider */}
                                                <ProductGridSliderFour category = "accessories" count="8" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-categori-img pro-categori2-position bg-img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/products/hm-12-pro-cat4.jpg'}')`}}>
                                <div className="cati-btn">
                                    <Link className="btn btn-color-white btn-size-lg btn-style-outline btn-outline-bigger" to={process.env.PUBLIC_URL + '/shop-sidebar'}>ACCESSORIES</Link>
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
                    <div className="instagram-area pt-60 pb-60">
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

export default FashionSeven