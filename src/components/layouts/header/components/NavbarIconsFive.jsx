import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NavbarIconsFive extends Component {

    triggerMenuAside(){
        let asideMenuOverlay = document.getElementById('header-aside-nav-menu');
        let bodyWrapper = document.getElementById('body-wrapper');
        asideMenuOverlay.classList.add('inside');
        bodyWrapper.classList.add('overlay-active');
    }

    triggerMobileMenu(){
        var mobileMenu = document.getElementById('mobile-menu-overlay');
        let bodyWrapper = document.getElementById('body-wrapper');
        mobileMenu.classList.add('active');
        bodyWrapper.classList.add('overlay-active');
    }

    render() {
        const { cartData } = this.props;
        return (
            <div className="header-right-wrap justify-content-lg-start">
               
                <div className="same-style cart-wrap d-block d-lg-none">
                    <Link className="cart-active" to={process.env.PUBLIC_URL+'/cart'}>
                        <i className="negan-icon-bag" />
                        <span className="count-style">{cartData.length}</span>
                    </Link>
                </div>
              
                <div className="same-style header-off-canvas d-none d-lg-block">
                    <button className="header-aside-nav-button" onClick={this.triggerMenuAside}><i className="negan-icon-menu-left" /></button>
                </div>
                <div className="same-style mobile-off-canvas d-block d-lg-none">
                    <button className="mobile-aside-button" onClick={this.triggerMobileMenu}><i className="negan-icon-menu-left" /></button>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cartData: state.cartData.cart
    }
}

export default connect(mapStateToProps)(NavbarIconsFive)
