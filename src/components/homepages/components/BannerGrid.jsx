import React from 'react'
import { Link } from 'react-router-dom'

function BannerGrid() {
    let bannerData = [
        {id: 1, link: '/shop-sidebar', imageName: '/img/banner/banner-1.jpg', title: 'LONG SUMMER DAY'},
        {id: 2, link: '/shop-sidebar', imageName: '/img/banner/banner-2.jpg', title: 'DEMIN +DE'},
        {id: 3, link: '/shop-sidebar', imageName: '/img/banner/banner-3.jpg', title: 'INDIGO COAT'}
    ];

    let bannerDataList = bannerData.map((banner) => {
        return(
            <div className="col-lg-4 col-md-4 col-sm-4" key={banner.id}>
                <div className="single-banner">
                    <Link to={process.env.PUBLIC_URL + banner.link}><img src={process.env.PUBLIC_URL + banner.imageName} alt="" /></Link>
                    <div className="banner-content">
                        <h3>{banner.title}</h3>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="banner-area">
                <div className="row no-gutters">
                    {bannerDataList}
                </div>
            </div>
        </div>
    )
}

export default BannerGrid