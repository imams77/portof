import React from 'react'
import Slider from 'react-slick'

import { brandLogoSliderSettings } from '../../../setup/slider'

function BrandLogoSlider() {
    let brandLogoData = [
        {image: '/img/brand-logo/brand-logo-1.png', url: '/#'},
        {image: '/img/brand-logo/brand-logo-2.png', url: '/#'},
        {image: '/img/brand-logo/brand-logo-3.png', url: '/#'},
        {image: '/img/brand-logo/brand-logo-4.png', url: '/#'},
        {image: '/img/brand-logo/brand-logo-5.png', url: '/#'},
        {image: '/img/brand-logo/brand-logo-6.png', url: '/#'},
        {image: '/img/brand-logo/brand-logo-5.png', url: '/#'}
    ]
    
    let brandLogoDataList = brandLogoData.map((singleItem, index) => {
        return(
            <div className="col" key={index}>
                <div className="single-brand-logo" >
                    <a href={process.env.PUBLIC_URL + singleItem.url}>
                        <img  src={process.env.PUBLIC_URL + singleItem.image} alt="" />
                    </a>
                </div>
            </div>
        )
    })
    return (
        <Slider {...brandLogoSliderSettings}>
            { brandLogoDataList }
        </Slider>
    )
}

export default BrandLogoSlider