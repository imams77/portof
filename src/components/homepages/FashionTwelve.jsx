import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import {SectionsContainer, Section} from 'react-fullpage'
import { Link } from 'react-router-dom'

import HeaderFive from '../layouts/headers/HeaderFive'

class FashionTwelve extends Component {
    closeOverlay(){
        let asideNavMenuOverlay = document.getElementById('header-aside-nav-menu');
        let bodyWrapper = document.getElementById('body-wrapper');
        let mobileMenu  = document.getElementById('mobile-menu-overlay');
        
        asideNavMenuOverlay.classList.remove('inside');
        bodyWrapper.classList.remove('overlay-active');
        mobileMenu.classList.remove('active');
    }

    
    
    render() {
        let options = {
            activeClass:          'active', // the class that is appended to the sections links
            anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'], // the anchors for each sections
            arrowNavigation:      false, // use arrow keys
            className:            'SectionsContainer', // the class name for the section container
            delay:                1000, // the scroll animation speed
            navigation:           true, // use dots navigatio
            scrollBar:            false, // use the browser default scrollbar
            sectionClassName:     'Section', // the section class name
            sectionPaddingTop:    '0', // the section top padding
            sectionPaddingBottom: '0', // the section bottom padding
            verticalAlign:        false // align the content of each section vertical
        };

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
                    <HeaderFive logo="/img/logo/logo.png" />

                    <SectionsContainer {...options}>
                        <Section>
                            <div className="fullpage-slider-section">
                                <div className="row no-gutters">
                                    <div className="col-lg-6 col-md-12 d-flex align-items-center">
                                    <div className="fullpage-content ">
                                        <h3>Floral ruffled dress</h3>
                                        <p>Quisque pharetra commodo viverra. Aenean libero mi, euismod non lorem quis, bibendum posuere lectusorci</p>
                                        <Link to = {process.env.PUBLIC_URL + '/shop-sidebar'}>SHOPPING NOW</Link>
                                    </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 bg-img fullpage-bg-img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/slider/m-13-bg-1.jpg'}')`}}>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section>
                            <div className="fullpage-slider-section">
                                <div className="row no-gutters">
                                    <div className="col-lg-6 col-md-12 d-flex align-items-center">
                                    <div className="fullpage-content ">
                                        <h3>Floral ruffled dress</h3>
                                        <p>Quisque pharetra commodo viverra. Aenean libero mi, euismod non lorem quis, bibendum posuere lectusorci</p>
                                        <Link to = {process.env.PUBLIC_URL + '/shop-sidebar'}>SHOPPING NOW</Link>
                                    </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 bg-img fullpage-bg-img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/slider/m-13-bg-2.jpg'}')`}}>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section>
                            <div className="fullpage-slider-section">
                                <div className="row no-gutters">
                                    <div className="col-lg-6 col-md-12 d-flex align-items-center">
                                    <div className="fullpage-content ">
                                        <h3>Floral ruffled dress</h3>
                                        <p>Quisque pharetra commodo viverra. Aenean libero mi, euismod non lorem quis, bibendum posuere lectusorci</p>
                                        <Link to = {process.env.PUBLIC_URL + '/shop-sidebar'}>SHOPPING NOW</Link>
                                    </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 bg-img fullpage-bg-img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/slider/m-13-bg-3.jpg'}')`}}>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        
                    </SectionsContainer>
               
                </div>
                
            </div>
        )
    }
}

export default FashionTwelve