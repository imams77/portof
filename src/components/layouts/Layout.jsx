import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify'

import Header from './header'
import FooterOne from './footer'

class Layout extends Component {

    closeOverlay(){
        let asideMenuOverlay = document.getElementById('header-aside-menu');
        let bodyWrapper = document.getElementById('body-wrapper');
        bodyWrapper.style.backgroundImage = `url('${process.env.PUBLIC_URL + '/img/bg/body-bg.jpg'}')`;
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
                    <Header logo="/img/logo/logo-notext.png" />
                        {this.props.children}
                    <FooterOne logo="/img/logo/logo-white.png" borderTop="true" />
                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default Layout