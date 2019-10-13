import React from 'react'
import Helmet from 'react-helmet'

import Breadcrumb from '../common/Breadcrumb'

function Service() {

    let serviceData = [
        {image: '/img/banner/service-1.jpg', title: 'Photography', text: 'Quisque pharetra commodo viverra. Aenean libero mi, euismod non lorem quis, bibendum posuere lectusorci', type: 'normal'},
        {image: '/img/banner/service-2.jpg', title: 'Fashion Design', text: 'Quisque pharetra commodo viverra. Aenean libero mi, euismod non lorem quis, bibendum posuere lectusorci', type: 'reverse'},
        {image: '/img/banner/service-3.jpg', title: 'Home Decor', text: 'Quisque pharetra commodo viverra. Aenean libero mi, euismod non lorem quis, bibendum posuere lectusorci', type: 'normal'},
        {image: '/img/banner/service-4.jpg', title: 'Handmade Craft', text: 'Quisque pharetra commodo viverra. Aenean libero mi, euismod non lorem quis, bibendum posuere lectusorci', type: 'reverse'}
    ]

    let serviceDataList = serviceData.map((singleItem, index) => {
        return(
            <div className="service-area" key={index}>
                <div className={`${singleItem.type === 'reverse' ? 'service-page-2': 'service-page-1'}`}>
                    <img alt='' src={process.env.PUBLIC_URL + singleItem.image} />
                </div>
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className={`${singleItem.type === 'reverse' ? 'col-lg-6 col-md-6 mr-auto': 'ml-auto col-lg-6 col-md-6'}`}>
                            <div className="service-content-1 service-me-mrg-1">
                                <h1>{singleItem.title}</h1>
                                <p>{singleItem.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    
    return (
        <div>
            {/* seo content */}
            <Helmet>
                <title>Negan | Service</title>
                <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
            </Helmet>
            {/* breadcrumb */}
            <Breadcrumb title="Our Services" />
            <div>
                { serviceDataList }
            </div>
        </div>
    )
}

export default Service