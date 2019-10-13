import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

import HeaderFour from '../layouts/headers/HeaderFour'
import BannerBackgroundFour from './components/BannerBackgroundFour'
import Newsletter from './components/Newsletter'
import ProductTwoGrid from './components/ProductTwoGrid'
import FooterTwo from '../layouts/footers/FooterTwo'

class FashionNine extends Component {

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

    closeNotification = () => {
        let notificationWrapper = document.getElementById('notification-wrapper');
        
        if (!notificationWrapper.style.height){
            notificationWrapper.style.height = 0;
            notificationWrapper.style.padding = 0;
            notificationWrapper.style.border = 0;
            notificationWrapper.style.overflow = "hidden";
            notificationWrapper.style.transition = "0.3s";
          }
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
                    <HeaderFour logo="/img/logo/logo.png" />

                    {/*Notification Section*/}
                    <div className="notification-section pt-15">
                        <div className="container">
                            <div className="notification-wrapper text-center" id="notification-wrapper" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/bg/bg-1.png'}')`}}>
                                <div className="notification-content ml-285">
                                    <h5><span>Spring/Summer</span> Sale off 50%  <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>SHOPPING NOW</Link> </h5>
                                </div>
                                <div className="notification-close notification-icon">
                                    <button id="notification-close" onClick={()=> this.closeNotification()}>×</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* banner background area */}
                    <div className="banner-area padding-5-row-col pt-5">
                        <div className="container">
                            {/* banner background */}
                            <BannerBackgroundFour />
                        </div>
                    </div>

                    {/* product grid */}
                    <div className="product-area res-pt-15 pt-65 pb-30">
                        <div className="container">
                            {/* section title */}
                            <div className="section-title text-center mb-50 section-title-border">
                                <h2>New Arrival</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>

                            <div className="product-area-wrap">
                                {/* product grid */}
                                <ProductTwoGrid category="fashion" count="8" column="four" type="new" />
                            </div>
                        </div>
                    </div>

                    {/* product grid */}
                    <div className="product-area pb-30">
                        <div className="container">
                            {/* section title */}
                            <div className="section-title text-center mb-50 section-title-border">
                                <h2>Top Sale</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>

                            <div className="product-area-wrap">
                                {/* product grid */}
                                <ProductTwoGrid category="fashion" count="8" column="four" type="sale" />
                            </div>
                        </div>
                    </div>

                    <div className="brand-logo pb-45">
                        <div className="container-fluid">
                            <div className="section-title text-center mb-50 section-title-border">
                                <h2>Shop By Brands</h2>
                                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                            </div>
                            <div className="brand-logo-top">
                                <ul>
                                    <li><img alt="" src="/img/brand-logo/brand-logo-7.png" /></li>
                                    <li><img alt="" src="/img/brand-logo/brand-logo-8.png" /></li>
                                    <li><img alt="" src="/img/brand-logo/brand-logo-9.png" /></li>
                                    <li><img alt="" src="/img/brand-logo/brand-logo-10.png" /></li>
                                    <li><img alt="" src="/img/brand-logo/brand-logo-11.png" /></li>
                                </ul>
                            </div>
                            <div className="brand-logo-bottom">
                                <ul>
                                    <li><img alt="" src="/img/brand-logo/brand-logo-12.png" /></li>
                                    <li><img alt="" src="/img/brand-logo/brand-logo-13.png" /></li>
                                    <li><img alt="" src="/img/brand-logo/brand-logo-14.png" /></li>
                                    <li><img alt="" src="/img/brand-logo/brand-logo-15.png" /></li>
                                </ul>
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

                    {/* footer */}
                    <FooterTwo logo="/img/logo/logo-2.png" theme="dark" />

                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default FashionNine