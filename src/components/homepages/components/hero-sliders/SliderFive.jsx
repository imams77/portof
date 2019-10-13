import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { heroSliderOne } from '../../../../setup/slider'

function SliderFive() {

    let heroSliderData = [
        {image: '/img/slider/m-6-slide-1.jpg', titleOne: 'New Arrival', titleTwo: 'SALE', titleThree:'70%', subtitle: 'LIMITED TIME OFFER', url: '/shop-sidebar', contentPosition: 'right'},
        {image: '/img/slider/m-3-slide-1.jpg', titleOne: 'New Arrival', titleTwo: 'SALE', titleThree:'70%', subtitle: 'LIMITED TIME OFFER', url: '/shop-sidebar', contentPosition: 'left'}
    ];

    let heroSliderDataList = heroSliderData.map((singleItem, index)=>{
        return(
            <div key={index}>
                {/*=======  single slider item  =======*/}
                <div className="single-slider-item slider-three-bgimage" style={{backgroundImage: `url('${process.env.PUBLIC_URL + singleItem.image}')`}}>
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 h-100">
                                <div className={`hero-slider-content-wrapper justify-content-center h-100 ${singleItem.contentPosition === 'left' ? 'justify-content-md-start' : ''} ${singleItem.contentPosition === 'right' ? 'justify-content-md-end' : ''}`}>
                                    <div className="hero-slider-content content-meddon-two">
                                        <h3 className="title">{singleItem.titleOne}</h3>
                                        <h2 className="title-two">{singleItem.titleTwo}</h2>
                                        <h2 className="title-three">{singleItem.titleThree}</h2>
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

export default SliderFive