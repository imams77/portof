import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import { heroSliderOne } from '../../../../setup/slider'

function SliderOne() {

    let heroSliderData = [
        {image: '/img/slider/slider-1.jpg', titleOne: 'welcome To', titleTwo: 'Portof', subtitle: 'Portof is your destination to not only search creative works that meet your needs, but also to introduce and showcase yours to the world.', url: '/shop-sidebar', contentPosition: 'right'}
        // {image: '/img/slider/hm1-slider-2.jpg', titleOne: 'Exclusive', titleTwo: 'COLLECTION', subtitle: 'FREE SHIPPING ORDER OVER $100', url: '/shop-sidebar', contentPosition: 'right'},
        // {image: '/img/slider/hm1-slider-3.jpg', titleOne: 'Featured', titleTwo: 'PRODUCTS', subtitle: 'FREE SHIPPING ORDER OVER $100', url: '/shop-sidebar', contentPosition: 'right'} 
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
                                        {/* <h2 className="title">{singleItem.titleOne}</h2> */}
                                        <h4 className="subtitle">{singleItem.titleOne}</h4>
                                        <h4 className="title-two">{singleItem.titleTwo}</h4>
                                        <p>
                                            Portof is your destination to not only search creative works that meet your needs, but also to introduce and showcase yours to the world.
                                        </p>
                                        <Link to={process.env.PUBLIC_URL+singleItem.url} className="btn btn-red">Join Us</Link>
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

export default SliderOne