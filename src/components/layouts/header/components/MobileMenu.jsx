import React, {Component} from 'react'
import { IntlActions } from 'react-redux-multilingual'
import { connect } from 'react-redux'

import MobileNavMenu from './MobileNavMenu'
import store from '../../../../store'
import { changeCurrency } from '../../../../actions'

class MobileMenu extends Component{

    toggleMobileMenu(){
        let mobileMenu  = document.getElementById('mobile-menu-overlay');
        let bodyWrapper = document.getElementById('body-wrapper');
        mobileMenu.classList.remove('active');
        bodyWrapper.classList.remove('overlay-active');
    }

    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
	}

    sideMenuExpand() {
        this.parentElement.classList.toggle('active');
    }

    componentDidMount(){
        var offCanvasNav = document.getElementById('offcanvas-navigation');
        var offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
        var anchorLinks = offCanvasNav.querySelectorAll('a');

        for (let i = 0; i < offCanvasNavSubMenu.length; i++){
           offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
        }

        var menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
        var numMenuExpand = menuExpand.length;

        for (let i = 0; i < numMenuExpand; i++) {
            menuExpand[i].addEventListener("click", this.sideMenuExpand);
        }

        for (let i = 0; i < anchorLinks.length; i++) {
            anchorLinks[i].addEventListener("click", this.toggleMobileMenu);
        }
    }


    render(){
        return(
            <div>
                {/*=======  offcanvas mobile menu  =======*/}
                <div className= "offcanvas-mobile-menu" id="mobile-menu-overlay">
                    <a href="#/" className="offcanvas-menu-close" id="mobile-menu-close-trigger" onClick={this.toggleMobileMenu}>
                        <i className="negan-icon-simple-close"></i>
                    </a>
                    <div className="offcanvas-wrapper">
                        <div className="offcanvas-inner-content">
                            <div className="offcanvas-mobile-search-area">
                                <form action="#">
                                    <input type="search" placeholder="Search ..." />
                                    <button type="submit"><i className="fa fa-search" /></button>
                                </form>
                            </div>

                            {/* mobile nav menu */}
                            <MobileNavMenu />
                            
                            <div className="mobile-menu-middle">
                                <div className="lang-curr-style">
                                    <button><span>Choose Language </span></button>
                                    <ul>
                                        <li><button onClick={() => {this.changeLanguage('en'); this.toggleMobileMenu()}}>English</button></li>
                                        <li><button onClick={() => {this.changeLanguage('de'); this.toggleMobileMenu()}}>German</button></li>
                                        <li><button onClick={() => {this.changeLanguage('fn'); this.toggleMobileMenu()}}>French</button></li>
                                    </ul>
                                </div>
                                <div className="lang-curr-style">
                                    <button> <span>Choose Currency</span></button>
                                    <ul>
                                        <li><button onClick={() => {this.props.changeCurrency('$'); this.toggleMobileMenu()}}>USD</button></li>
                                        <li><button onClick={() => {this.props.changeCurrency('€'); this.toggleMobileMenu()}}>EUR</button></li>
                                        <li><button onClick={() => {this.props.changeCurrency('£'); this.toggleMobileMenu()}}>GBP</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="offcanvas-widget-area">
                                <div className="off-canvas-contact-widget">
                                <div className="header-contact-info">
                                    <ul className="header-contact-info__list">
                                    <li><i className="fa fa-phone"></i> <a href="tel://12452456012">(1245) 2456 012 </a></li>
                                    <li><i className="fa fa-envelope"></i> <a href="mailto:info@yourdomain.com">info@yourdomain.com</a></li>
                                    </ul>
                                </div>
                                </div>
                                {/*Off Canvas Widget Social Start*/}
                                <div className="off-canvas-widget-social">
                                    <a href="//twitter.com" title="Twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="//instagram.com" title="Instagram"><i className="fa fa-instagram"></i></a>
                                    <a href="//facebook.com" title="Facebook"><i className="fa fa-facebook"></i></a>
                                    <a href="//pinterest.com" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                                </div>
                                {/*Off Canvas Widget Social End*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*=======  End of offcanvas mobile menu  =======*/}

            </div>
        )
    }
}

export default connect(null, {changeCurrency})(MobileMenu)