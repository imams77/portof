import React from 'react'
import { Link } from 'react-router-dom'

function BannerGridThree() {
    let bannerData = [
        { url: '/shop-sidebar', image:'/img/banner/banner-23.jpg', titleOne:'Soft Leather Cat Mouse Pad Handmade', titleTwo:'OFF 50%', contentPosition: ''},
        { url: '/shop-sidebar', image:'/img/banner/banner-24.jpg', titleOne:'Lightingsky Ceiling Pendant DIY', titleTwo:'OFF 30%', contentPosition: 'left'},
        { url: '/shop-sidebar', image:'/img/banner/banner-25.jpg', titleOne:'LexMod Remark Armchair', titleTwo:'OFF 70%', contentPosition: ''}
    ]

    let bannerDataList = bannerData.map((singleItem, index) => {
        return(
            <div className="col-lg-4" key={index}>
                <div className="single-banner-7">
                    <Link to={process.env.PUBLIC_URL + singleItem.url}><img src={process.env.PUBLIC_URL + singleItem.image} alt="" /></Link>
                    <div className={`banner-content-11 ${singleItem.contentPosition === 'left' ? 'banner-content-position2':''}`}>
                        <span>{singleItem.titleOne}</span>
                        <h3>{singleItem.titleTwo}</h3>
                        <Link to={process.env.PUBLIC_URL + singleItem.url}>SHOPPING NOW</Link>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="row no-gutters">
            { bannerDataList }
        </div>
    )
}

export default BannerGridThree