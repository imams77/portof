import React from 'react'
import { Link } from 'react-router-dom'

function BannerGridFive() {

    let bannerData = [
        {image: '/img/banner/banner-32.jpg', text: 'In convallis nulla et magna', title: 'Floral ruffled dress', url: '/shop-sidebar'},
        {image: '/img/banner/banner-33.jpg', text: 'In convallis nulla et magna', title: 'sweatshirt', url: '/shop-sidebar'},
        {image: '/img/banner/banner-34.jpg', text: 'In convallis nulla et magna', title: 'Pebbled briefcase', url: '/shop-sidebar'}
    ]
    
    let bannerDataList = bannerData.map(( singleItem, index )=>{
        return(
            <div className="col-lg-4 col-sm-12 col-xl-4" key={index}>
                <div className="single-banner-10 mb-30">
                    <Link to={process.env.PUBLIC_URL + singleItem.url}><img alt='' src={process.env.PUBLIC_URL + singleItem.image} /></Link>
                    <div className="banner-content-15">
                        <p>{singleItem.text}</p>
                        <h5>{singleItem.title}</h5>
                        <Link className="btn btn-color-gray btn-size-sm btn-style-outline outline-2" to={process.env.PUBLIC_URL + singleItem.url}>SHOPPING NOW</Link>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="row">
            { bannerDataList }
        </div>

    )
}

export default BannerGridFive