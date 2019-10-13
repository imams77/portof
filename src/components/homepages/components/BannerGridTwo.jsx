import React from 'react'
import { Link } from 'react-router-dom'

function BannerGridTwo() {

    let bannerData = [
        {image:'/img/banner/banner-5.jpg', url: '/shop-sidebar', titleOne: 'Summer', titleTwo: 'SALE 70%', titleThree: '#SEXYGIRL'},
        {image:'/img/banner/banner-6.jpg', url: '/shop-sidebar', titleOne: 'Men’s Collections', titleTwo: 'Tailoring Rule', titleThree: '#TRENDING'},
        {image:'/img/banner/banner-7.jpg', url: '/shop-sidebar', titleOne: 'Shoes', titleTwo: 'Buckle strap sandals', titleThree: '#TRENDING'}
    ]

    let bannerDataList = bannerData.map((singleItem, index)=>{
        return(
            <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
                <div className="single-banner-2">
                    <Link to={process.env.PUBLIC_URL + singleItem.url}><img src={ process.env.PUBLIC_URL + singleItem.image} alt="" /></Link>
                    <div className="banner-content-2">
                        <h2>{singleItem.titleOne}</h2>
                        <h1>{singleItem.titleTwo}</h1>
                        <h3>{singleItem.titleThree}</h3>
                        <div className="banner-btn">
                            <Link className="btn btn-color-white btn-align-center btn-size-sm btn-style-outline outline-2" to={process.env.PUBLIC_URL + singleItem.url}>SHOPPING NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="banner-area">
            <div className="row no-gutters">
                {bannerDataList}
            </div>
        </div>
    )
}

export default BannerGridTwo