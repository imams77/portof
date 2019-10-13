import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../../../../store'
import { IntlActions } from 'react-redux-multilingual'
import { connect } from 'react-redux'
import { changeCurrency } from '../../../../actions'

class HeaderMenuAside extends Component {

    closeAsideMenu(){
        let asideMenuOverlay = document.getElementById('header-aside-menu');
        let bodyWrapper = document.getElementById('body-wrapper');
        asideMenuOverlay.classList.remove('inside');
        bodyWrapper.classList.remove('overlay-active');
    }

    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
	}

    render() {
        return (
            <div className="header-aside-active" id="header-aside-menu">
                <div className="header-aside-wrap">
                    <button className="aside-close" onClick={this.closeAsideMenu}><i className="negan-icon-simple-close" /></button>
                    <div className="header-aside-top">
                        <div className="aside-logo">
                            <Link to={process.env.PUBLIC_URL + '/'}  onClick={this.closeAsideMenu}>
                                <img src={process.env.PUBLIC_URL + '/img/logo/logo.png'} alt="" />
                            </Link>
                        </div>
                        <p>Curabitur placerat urna augue, id luctus sem imperdiet id. Nunc congue ac libero ut lacinia. In ultrices elementum ipsum, in tempus enim accumsan..</p>
                        <div className="aside-social">
                            <a href="//facebook.com"><i className="fa fa-facebook" /></a>
                            <a href="//twitter.com"><i className="fa fa-twitter" /></a>
                            <a href="//pinterest.com"><i className="fa fa-pinterest-p" /></a>
                        </div>
                    </div>
                    <div className="header-aside-middle">
                        <div className="lang-curr-style">
                            <button>Language <span>Choose Language <i className="fa fa-angle-down" /></span></button>
                            <ul>
                                <li><button onClick={() => {this.changeLanguage('en'); this.closeAsideMenu()}}>English</button></li>
                                <li><button onClick={() => {this.changeLanguage('de'); this.closeAsideMenu()}}>German</button></li>
                                <li><button onClick={() => {this.changeLanguage('fn'); this.closeAsideMenu()}}>French</button></li>
                            </ul>
                        </div>
                        <div className="lang-curr-style">
                            <button>Currency <span>Choose Currency <i className="fa fa-angle-down" /></span></button>
                            <ul>
                                <li><button onClick={() => {this.props.changeCurrency('$'); this.closeAsideMenu()}}>USD</button></li>
                                <li><button onClick={() => {this.props.changeCurrency('€'); this.closeAsideMenu()}}>EUR</button></li>
                                <li><button onClick={() => {this.props.changeCurrency('£'); this.closeAsideMenu()}}>GBP</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-aside-bottom">
                        <ul>
                            <li className="phn"><span>(+61 2) 9251 5600</span></li>
                            <li className="email"><span><a href="mailto:info@example.com">info@example.com</a></span></li>
                            <li className="address"><span>PO Box 16122 Collins Street West Victoria 8007 Australia</span></li>
                        </ul>
                    </div>
                    <div className="header-aside-copyright">
                        <p>© 2019 <Link to={process.env.PUBLIC_URL+'/'}>Negan</Link>. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {changeCurrency})(HeaderMenuAside)
