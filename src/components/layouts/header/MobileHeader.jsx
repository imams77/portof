import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MobileNavIcons from './components/MobileNavIcons';

class MobileHeader extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        if(this.mount){
            this.setState({scroll: window.scrollY});
        }
    }
    
    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('.header-small-mobile');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0;
    }

    componentWillUnmount(){
        this.mount = false;
    }

    render() {
        return (
            <div className={`header-small-mobile block-for-sidemenu sticky-bar ${this.state.scroll > this.state.top ? "stick" : ""}`}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="logo">
                                <Link to={process.env.PUBLIC_URL + '/'}>
                                    <img alt='' src={process.env.PUBLIC_URL + this.props.logo} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-6">

                            {/* navbar icons */}
                            <MobileNavIcons />
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileHeader