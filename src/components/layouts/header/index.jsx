import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { IntlActions } from 'react-redux-multilingual'

import HeaderSearch from './components/HeaderSearch'
import NavbarIcons from './components/NavbarIcons'
import HeaderMenuAside from './components/HeaderMenuAside'
import HeaderCartAside from './components/HeaderCartAside'
import MobileMenu from './components/MobileMenu'
import HeaderNavMenu from './components/HeaderNavMenu'
import store from '../../../store'
import { changeCurrency } from '../../../actions'

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isHomePage: window && window.location.pathname === '/',
            logo: ''
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    
    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
	}

    handleScroll() {
        if(this.mount){
            this.setState({scroll: window.scrollY});
        }
    }
    

    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('header');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
        this.state.logo = this.props.logo
    }
    
    componentDidUpdate() {
        // this.state.scroll > this.state.top ? 
        // document.body.style.paddingTop = `${this.state.height}px` :
        // document.body.style.paddingTop = 0;
    }

    componentWillUnmount(){
        this.mount = false;
    }

    static getDerivedStateFromProps (props, state) {
        let logo = props.logo
        if (state.isHomePage && (state.scroll > state.height)) {
            logo = '/img/logo/logo.png'
        }
        return {
            ...state,
            logo
        }
    }

    render() {
        return (
            <div>
                <header className= {`header-area header-padding-1 section-padding-1 sticky-bar ${this.props.type === "transparent" ? 'transparent-bar' : ''} ${(this.state.scroll > this.state.height) || !this.state.isHomePage ? "stick" : ""}`}>
                    <div className={`header-top bg-gray-2 d-none ${this.props.topBar === 'hidden' ? 'd-lg-none': 'd-lg-block'}`}>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="header-contact-info">
                                <ul className="d-flex">
                                    <li><i className="fa fa-phone"/> <a href="tel:123456789">+62 812 1421 3712</a></li>
                                    <li><i className="fa fa-envelope" /> <a href="mailto:info@portof.id">info@portof.id</a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                                <div className="logo">
                                    <Link to={process.env.PUBLIC_URL+'/'}>
                                        <img className="header-logo" src={process.env.PUBLIC_URL + this.state.logo} alt="" />
                                        {/* <h2>Portof</h2> */}
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                                <div className="main-menu main-menu-center">
                                    {/* header nav menu */}
                                    <HeaderNavMenu />
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                                {/* navbar icon */}
                                <NavbarIcons />
                            </div>
                        </div>
                    </div>
                </header>

                {/* header search */}
                <HeaderSearch />
                
                {/* header menu aside */}
                <HeaderMenuAside />
                
                {/* header cart aside */}
                <HeaderCartAside />

                {/* mobile menu */}
                <MobileMenu />

            </div>
        )
    }
}

export default connect(null, {changeCurrency})(Header)