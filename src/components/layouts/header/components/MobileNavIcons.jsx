import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NavbarIcons extends Component {

    triggerSearch(){
        let searchOverlay = document.getElementById('search-content-wrap');
        searchOverlay.classList.add('search-visible');
    }

    triggerMenuAside(){
        let asideMenuOverlay = document.getElementById('header-aside-menu');
        let bodyWrapper = document.getElementById('body-wrapper');
        asideMenuOverlay.classList.add('inside');
        bodyWrapper.classList.add('overlay-active');
    }

    triggerAsideCart(){
        let asideCart = document.getElementById('sidebar-cart-active');
        let bodyWrapper = document.getElementById('body-wrapper');
        asideCart.classList.add('inside');
        bodyWrapper.classList.add('overlay-active');
    }

    triggerMobileMenu(){
        var mobileMenu = document.getElementById('mobile-menu-overlay');
        let bodyWrapper = document.getElementById('body-wrapper');
        mobileMenu.classList.add('active');
        bodyWrapper.classList.add('overlay-active');
    }

    render() {
        const { cartData, wishlistData, compareData } = this.props;
        return (
            <div className="header-right-wrap">
                <div className="same-style account-satting d-block">
                    <Link className="account-satting-active" to={process.env.PUBLIC_URL + '/my-account'}><i className="negan-icon-users-circle-2" /></Link>
                </div>
                <div className="same-style header-compare d-none d-md-block">
                    <Link to={process.env.PUBLIC_URL+'/compare'}><i className="negan-icon-switch" /><span className="count-style">{compareData.length}</span></Link>
                </div>
                <div className="same-style header-wishlist d-none d-md-block">
                    <Link to={process.env.PUBLIC_URL+'/wishlist'}><i className="negan-icon-favourite-28" /><span className="count-style">{wishlistData.length}</span></Link>
                </div>
                <div className="same-style cart-wrap d-none d-lg-block">
                    <button className="cart-active" onClick={this.triggerAsideCart}>
                        <i className="negan-icon-bag" />
                        <span className="count-style">{cartData.length}</span>
                    </button>
                </div>
                <div className="same-style cart-wrap d-block d-lg-none">
                    <Link className="cart-active" to={process.env.PUBLIC_URL+'/cart'}>
                        <i className="negan-icon-bag" />
                        <span className="count-style">{cartData.length}</span>
                    </Link>
                </div>
                <div className="same-style header-search d-none d-lg-block">
                    <button className="search-active" onClick={this.triggerSearch}><i className="negan-icon-zoom" /></button>
                </div>
               
                <div className="same-style mobile-off-canvas d-block d-xl-none">
                    <button className="mobile-aside-button" onClick={this.triggerMobileMenu}><i className="negan-icon-menu-left" /></button>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cartData: state.cartData.cart,
        wishlistData: state.wishlistData.wishlist,
        compareData: state.compareData.compareItems
    }
}

export default connect(mapStateToProps)(NavbarIcons)
