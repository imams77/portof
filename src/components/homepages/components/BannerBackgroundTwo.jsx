import React from 'react'
import { Link } from 'react-router-dom'

function BannerBackgroundTwo() {
    return (
        <div className="banner-area">
            <div className="row no-gutters">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-banner-3">
                        <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}><img src={process.env.PUBLIC_URL + '/img/banner/banner-9.jpg'} alt='' /></Link>
                        <div className="banner-content-3">
                            <h2>SUMMER 2019</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-banner-3">
                        <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}><img src={process.env.PUBLIC_URL + '/img/banner/banner-10.jpg'} alt='' /></Link>
                        <div className="banner-content-3">
                            <h2>RTL/TREND</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerBackgroundTwo
