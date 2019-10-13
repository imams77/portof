import React from 'react'
import { Link } from 'react-router-dom'

function BannerBackgroundFour() {
    return (
        <div className="row">
         
            <div className="col-lg-4">
                <div className="single-banner-4 mb-10">
               <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/banner/banner-12.jpg'} /></Link>
                <div className="banner-content-5">
                    <span>#KIDS FASHION</span>
                    <h2><span>Kids</span> 2019 </h2>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="single-banner-4 mb-10">
               <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/banner/banner-13.jpg'} /></Link>
                <div className="banner-content-6">
                    <span>#WOMAN TRENDING</span>
                    <h2>New Dress</h2>
                    <Link className="btn btn-color-white btn-size-sm btn-style-outline outline-2" to="/shop-sidebar">SHOPPING NOW</Link>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="single-banner-4 mb-10">
               <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/banner/banner-14.jpg'} /></Link>
                <div className="banner-content-7">
                    <span>#KIDS FASHION</span>
                    <h2><span>Shoes</span> 2019 </h2>
                </div>
                </div>
            </div>
            <div className="percentage-col-60 percentage-col-60--style2 percentage-col-common">
                <div className="single-banner-5 mb-10">
               <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/banner/banner-15.jpg'} /></Link>
                <div className="banner-content-8">
                    <h3>Summer</h3>
                    <h2>SALE OFF 60%</h2>
                </div>
                </div>
            </div>
            <div className="percentage-col-40 percentage-col-40--style2 percentage-col-common">
                <div className="single-banner-4 mb-10 default-overlay">
               <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/banner/banner-16.jpg'} /></Link>
                <div className="banner-content-9">
                    <span>#SML</span>
                    <h2>Summer 2019</h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BannerBackgroundFour
