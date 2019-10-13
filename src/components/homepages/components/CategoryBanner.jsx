import React from 'react'
import { Link } from 'react-router-dom'


function CategoryBanner() {
    let categoryBannerData = [
        {url: '/shop-sidebar', image: '/img/products/hm-15-pro-1.jpg', categoryName:'WOMEN'},
        {url: '/shop-sidebar', image: '/img/products/hm-15-pro-2.jpg', categoryName:'MEN'},
        {url: '/shop-sidebar', image: '/img/products/hm-15-pro-3.jpg', categoryName:'KIDS'},
        {url: '/shop-sidebar', image: '/img/products/hm-15-pro-4.jpg', categoryName:'ACCESSORIES'}
    ]
    
    let categoryBannerDataList = categoryBannerData.map((singleItem, index) => {
        return(
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                <div className="single-product-banner default-overlay">
                    <Link to={process.env.PUBLIC_URL + singleItem.url}>
                        <img src={process.env.PUBLIC_URL + singleItem.image} alt='' />
                    </Link>
                    <div className="product-banner-content">
                        <span>{singleItem.categoryName}</span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="row no-gutters">
            {categoryBannerDataList}
        </div>
    )
}

export default CategoryBanner