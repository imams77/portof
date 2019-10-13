import React from 'react'
import { Link } from 'react-router-dom'

function BannerGridFour() {
    return (
        
        <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="single-banner-8 banner-hover-1 mb-20">
                <Link to={process.env.PUBLIC_URL+ '/shop-sidebar'}><img alt='' src={process.env.PUBLIC_URL+'/img/banner/banner-26.jpg'} /></Link>
                <div className="banner-content-12">
                    <h3><span>Romantic</span> <br /> Spring <br />Looks</h3>
                    <div className="banner-hm6-btn">
                    <Link className="btn btn-color-gray btn-size-sm btn-style-outline" to={process.env.PUBLIC_URL+ '/shop-sidebar'}> SHOPPING NOW </Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="banner-wrap mb-20">
                <div className="single-banner-8 mb-20 banner-hover-1">
                    <Link to={process.env.PUBLIC_URL+ '/shop-sidebar'}><img alt='' src={process.env.PUBLIC_URL+'/img/banner/banner-27.jpg'} /></Link>
                    <div className="banner-content-13 banner-hm6-position1">
                    <span>Prince of wales linen trench</span>
                    <h2><span>Sale off</span> <br />70%</h2>
                    <div className="banner-hm6-btn">
                        <Link className="btn btn-color-gray btn-size-sm btn-style-outline" to={process.env.PUBLIC_URL+ '/shop-sidebar'}> SHOPPING NOW </Link>
                    </div>
                    </div>
                </div>
                <div className="single-banner-8 banner-hover-2">
                    <Link to={process.env.PUBLIC_URL+ '/shop-sidebar'}><img alt='' src={process.env.PUBLIC_URL+'/img/banner/banner-28.jpg'} /></Link>
                    <div className="banner-content-13 banner-hm6-position2">
                    <span>Contrasting printed dress</span>
                    <h3><span>Summer</span> <br /> 2019</h3>
                    <div className="banner-hm6-btn">
                        <Link className="btn btn-color-gray btn-size-sm btn-style-outline" to={process.env.PUBLIC_URL+ '/shop-sidebar'}> SHOPPING NOW </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="single-banner-8 mb-20">
                <Link to={process.env.PUBLIC_URL+ '/shop-sidebar'}><img alt='' src={process.env.PUBLIC_URL+'/img/banner/banner-29.jpg'} /></Link>
                <div className="banner-content-14 banner-hm6-position3">
                    <span>Pebbled weekend bag</span>
                    <h3>New Arrival</h3>
                    <div className="banner-hm6-btn">
                    <Link className="btn btn-color-gray btn-size-sm btn-style-outline" to={process.env.PUBLIC_URL+ '/shop-sidebar'}> SHOPPING NOW </Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="banner-wrap mb-20">
                <div className="single-banner-8 mb-20 banner-hover-2">
                    <Link to={process.env.PUBLIC_URL+ '/shop-sidebar'}><img alt='' src={process.env.PUBLIC_URL+'/img/banner/banner-30.jpg'} /></Link>
                    <div className="banner-content-14 banner-hm6-position4">
                    <span>Canvas sneakers</span>
                    <h3>New Shoes</h3>
                    <div className="banner-hm6-btn">
                        <Link className="btn btn-color-gray btn-size-sm btn-style-outline" to={process.env.PUBLIC_URL+ '/shop-sidebar'}> SHOPPING NOW </Link>
                    </div>
                    </div>
                </div>
                <div className="single-banner-8 banner-hover-1">
                    <Link to={process.env.PUBLIC_URL+ '/shop-sidebar'}><img alt='' src={process.env.PUBLIC_URL+'/img/banner/banner-31.jpg'} /></Link>
                    <div className="banner-content-14 banner-hm6-position5 banner-content-hover">
                    <span>Aviator sunglasses</span>
                    <h3>Sale 50%</h3>
                    <div className="banner-hm6-btn">
                        <Link className="btn btn-color-gray btn-size-sm btn-style-outline" to={process.env.PUBLIC_URL+ '/shop-sidebar'}> SHOPPING NOW </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BannerGridFour