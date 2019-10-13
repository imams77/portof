import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import {animateScroll as scroll } from 'react-scroll'

import SubscribeEmail from './components/SubscribeEmail'

class FooterOne extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    handleScroll() {
        if(this.mount){
            this.setState({scroll: window.scrollY});
        }
    }

    scrollToTop (){
        scroll.scrollToTop();
    }
  
    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
        document.getElementById("scroll-top").classList.add("show") :
        document.getElementById("scroll-top").classList.remove("show") ;
    }

    componentWillUnmount(){
        this.mount = false;
    }

    render() {
        return (
            <div>
                <footer className={`footer-area pt-60 ${this.props.theme === "dark" ? 'bg-black': ''} ${this.props.borderTop === "true" ? 'border-top-1': ''}`}>
                    <div className="footer-top section-padding-1">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-3 col-md-4">
                                    <div className="footer-widget footer-about mb-30">
                                        <Link to={process.env.PUBLIC_URL+'/'}>
                                            <img className="footer-logo" src={process.env.PUBLIC_URL + this.props.logo} alt="" />
                                        </Link>
                                        <p>Curabitur placerat urna augue, id luctus sem imperdiet id. Nunc congue ac libero ut lacinia. In ultrices elementum ipsum, in tempus enim accumsan..</p>
                                        <div className="footer-social">
                                            <a href="//facebook.com"><i className="fa fa-facebook" /></a>
                                            <a href="//twitter.com"><i className="fa fa-twitter" /></a>
                                            <a href="//pinterest.com"><i className="fa fa-pinterest-p" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-custom-col">
                                    <div className={`footer-widget mb-30 ${this.props.theme === "dark" ? 'footer-white': ''}`}>
                                        <div className="footer-title">
                                            <h3>Useful Link</h3>
                                        </div>
                                        <div className="footer-list">
                                            <ul>
                                                <li><Link to={process.env.PUBLIC_URL+'/contact-us'}>Help &amp; Contact Us</Link></li>
                                                <li><a href="/#">Returns &amp; Refunds</a></li>
                                                <li><a href="/#">Online Stores</a></li>
                                                <li><a href="/#">Terms &amp; Conditions</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-custom-col">
                                    <div className={`footer-widget mb-30 ${this.props.theme === "dark" ? 'footer-white': ''}`}>
                                        <div className="footer-title">
                                            <h3>Company</h3>
                                        </div>
                                        <div className="footer-list">
                                            <ul>
                                                <li><Link to={process.env.PUBLIC_URL+'/about-us'}>About us</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL+'/service'}>Our services</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL+'/faq'}>Faq’s</Link></li>
                                                <li><a href="/#">Career</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-custom-col">
                                    <div className={`footer-widget mb-30 ${this.props.theme === "dark" ? 'footer-white': ''}`}>
                                        <div className="footer-title">
                                            <h3>Profile</h3>
                                        </div>
                                        <div className="footer-list">
                                            <ul>
                                                <li><Link to={process.env.PUBLIC_URL+'/login-register'}>My account</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL+'/checkout'}>Checkout</Link></li>
                                                <li><a href="/#">Order tracking</a></li>
                                                <li><Link to={process.env.PUBLIC_URL+'/contact-us'}>Help &amp; Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-8">
                                    <div className="footer-widget footer-about mb-30">
                                        <div className="footer-title">
                                        <h3>Email for newsletter</h3>
                                        </div>
                                        <div className="subscribe-style">
                                            <p>Curabitur placerat urna augue, id luctus sem imperdiet id. Nunc congue ac libero ut lacinia.</p>
                                            <div className="subscribe-form mt-20">
                                                {/* subscribe  */}
                                                <SubscribeEmail mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom section-padding-1 pb-15 pt-20">
                        <div className="container-fluid">
                            <div className="copyright text-center">
                                <p>© 2019 <Link to={process.env.PUBLIC_URL+'/'}>Negan</Link>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* scroll top */}
                <button className="scroll-top" id="scroll-top" onClick={this.scrollToTop}>
                    <i className="fa fa-angle-double-up" />
                </button>
            </div>
        )
    }
}

FooterOne.propTypes = {
    logo: PropTypes.string,
    theme: PropTypes.string
}

export default FooterOne