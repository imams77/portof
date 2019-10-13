import React, { Component } from 'react'
import HeaderNavMenu from './HeaderNavMenu'

class HeaderMenuAside extends Component {

    closeAsideMenu(){
        let asideMenuOverlay = document.getElementById('header-aside-nav-menu');
        let bodyWrapper = document.getElementById('body-wrapper');
        asideMenuOverlay.classList.remove('inside');
        bodyWrapper.classList.remove('overlay-active');
    }

    render() {
        return (
            <div className="header-aside-active hm-side-menu" id="header-aside-nav-menu">
                <div className="header-aside-wrap aside-overflow-none">
                    <button className="aside-close" onClick={this.closeAsideMenu}><i className="negan-icon-simple-close" /></button>
                    <div className="sidebar-main-menu">
                        {/* header nav menu */}
                        <HeaderNavMenu />
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderMenuAside