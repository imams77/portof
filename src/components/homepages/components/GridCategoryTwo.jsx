import React from 'react'
import { Link } from 'react-router-dom'

function GridCategoryTwo() {
    let categoryData = [
        {url:'/shop-sidebar', image:'/img/banner/banner-17.jpg', title: 'LAMP DESIGN', text:'Sed vitae eros'},
        {url:'/shop-sidebar', image:'/img/banner/banner-18.jpg', title: 'FURNITURE', text:'Sed vitae eros'},
        {url:'/shop-sidebar', image:'/img/banner/banner-19.jpg', title: 'DECORATIVE', text:'Sed vitae eros'},
        {url:'/shop-sidebar', image:'/img/banner/banner-20.jpg', title: 'CREATURES', text:'Sed vitae eros'},
        {url:'/shop-sidebar', image:'/img/banner/banner-21.jpg', title: 'WORK SPACE', text:'Sed vitae eros'},
        {url:'/shop-sidebar', image:'/img/banner/banner-22.jpg', title: 'AUDIO', text:'Sed vitae eros'}
    ]

    let categorydataList = categoryData.map((singleitem, index)=>{
        return(
            <div className="col-lg-4 col-sm-6" key={index}>
                <div className="single-banner-6 mb-30">
                    <Link to={process.env.PUBLIC_URL + singleitem.url}><img  src={process.env.PUBLIC_URL + singleitem.image} alt="" /></Link>
                    <div className="banner-content-10">
                        <h3>{singleitem.title}</h3>
                        <span>{singleitem.text}</span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="row">
            { categorydataList }
        </div>
    )
}

export default GridCategoryTwo