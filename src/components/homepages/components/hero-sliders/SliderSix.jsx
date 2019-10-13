import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import { heroSliderOne } from '../../../../setup/slider'

function SliderSix() {

    let heroSliderData = [
        {image: '/img/slider/m-8-slide-1.jpg', titleOne: 'Spring Fresh', titleTwo: '#TRENDING 2019', url: '/shop-sidebar', contentPosition: 'right', contentColor: '', contentAlign:''}, 
        {image: '/img/slider/m-5-slide-1.jpg', titleOne: 'Sale off 70%', titleTwo: 'FLASH SALE - LIMITED TIME OFFER', url: '/shop-sidebar', contentPosition: 'left', contentColor: '', contentAlign:''},
        {image: '/img/slider/m-5-slide-3.jpg', titleOne: 'Sale off 70%', titleTwo: 'FLASH SALE - LIMITED TIME OFFER', url: '/shop-sidebar', contentPosition: 'left', contentColor: '', contentAlign:''}
    ]

    let heroSliderDataList = heroSliderData.map((singleItem, index)=>{
        return(
            <div key={index}>
                {/*=======  single slider item  =======*/}
                <div className="single-slider-item slider-two-bgimage" style={{backgroundImage: `url('${process.env.PUBLIC_URL + singleItem.image}')`, backgroundPosition: 'center right'}}>
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 h-100">
                                <div className={`hero-slider-content-wrapper justify-content-center h-100 ${singleItem.contentPosition === 'left' ? 'justify-content-md-start' : ''} ${singleItem.contentPosition === 'right' ? 'justify-content-md-end' : ''}`}>
                                    <div className={`hero-slider-content content-dual-title ${singleItem.contentColor === 'white' ? 'content-white': ''} ${singleItem.contentAlign === 'left' ? 'text-left' : ''} ${singleItem.contentAlign === 'right' ? 'text-right' : ''}`}>
                                        <h3 className="title-two">{singleItem.titleTwo}</h3>
                                        <h2 className="title">{singleItem.titleOne}</h2>
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

export default SliderSix