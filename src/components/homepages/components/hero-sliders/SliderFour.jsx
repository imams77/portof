import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import { heroSliderOne } from '../../../../setup/slider'

function SliderFour() {

    let heroSliderData = [
        {image: '/img/slider/hm1-slider-3.jpg', titleOne: 'Featured', titleTwo: 'PRODUCTS', subtitle: 'FREE SHIPPING ORDER OVER $100', url: '/shop-sidebar', contentPosition: 'right'},
        {image: '/img/slider/m-3-slide-1.jpg', titleOne: 'New', titleTwo: 'ARRIVAL', subtitle: 'FREE SHIPPING ORDER OVER $100', url: '/shop-sidebar', contentPosition: 'left'}, 
        {image: '/img/slider/hm1-slider-2.jpg', titleOne: 'Exclusive', titleTwo: 'COLLECTION', subtitle: 'FREE SHIPPING ORDER OVER $100', url: '/shop-sidebar', contentPosition: 'right'}
    ];

    let heroSliderDataList = heroSliderData.map((singleItem, index)=>{
        return(
            <div key={index}>
                {/*=======  single slider item  =======*/}
                <div className="single-slider-item slider-one-bgimage" style={{backgroundImage: `url('${process.env.PUBLIC_URL + singleItem.image}')`}}>
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 h-100">
                                <div className={`hero-slider-content-wrapper justify-content-center h-100 ${singleItem.contentPosition === 'left' ? 'justify-content-md-start' : ''} ${singleItem.contentPosition === 'right' ? 'justify-content-md-end' : ''}`}>
                                    <div className="hero-slider-content content-meddon">
                                        <h2 className="title">{singleItem.titleOne}</h2>
                                        <h3 className="title-two">{singleItem.titleTwo}</h3>
                                        <h4 className="subtitle">{singleItem.subtitle}</h4>
                                        <Link to={process.env.PUBLIC_URL+singleItem.url} className="slider-button">SHOPPING NOW</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*=======  End of single slider item  =======*/}
            </div>
        )
    })

    return (
        <Slider {...heroSliderOne} className="hero-slider-wrapper">
            { heroSliderDataList }
        </Slider>
    )
}

export default SliderFour