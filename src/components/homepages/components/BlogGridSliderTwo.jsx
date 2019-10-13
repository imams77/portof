import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import { blogGridSliderSettings } from '../../../setup/slider'


function BlogGridSlider() {

    let blogGridSliderData = [
        {image: "/img/blog/blog-4.jpg", url:"/blog-single-one", categoryUrl:"/blog-classic", category: "Fashion", title: "In the backseat of my car", author: "Katherine Leonard", date:"May 29, 2019", text:'Fashion #Trending 2019 Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar…'},
        {image: "/img/blog/blog-5.jpg", url:"/blog-single-one", categoryUrl:"/blog-classic", category: "Love", title: "7 Helpful Strategies.", author: "Katherine Leonard", date:"May 30, 2019", text:'Fashion #Trending 2019 Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar…' },
        {image: "/img/blog/blog-6.jpg", url:"/blog-single-one", categoryUrl:"/blog-classic", category: "Accessories", title: "My Life in 3 Looks", author: "Katherine Leonard", date:"May 31, 2019", text:'Fashion #Trending 2019 Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar…' },
        {image: "/img/blog/blog-2.jpg", url:"/blog-single-one", categoryUrl:"/blog-classic", category: "Furniture", title: "Lorem ipsum dolor set amet", author: "Katherine Leonard", date:"May 15, 2019", text:'Fashion #Trending 2019 Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar…' }
    ]
    
    let blogGridSliderDataList = blogGridSliderData.map((singleItem, index)=>{
        return(
            
            <div className="col" key={index}>
                <div className="blog-wrap mb-30">
                    <Link to={process.env.PUBLIC_URL + singleItem.url}><img src={process.env.PUBLIC_URL + singleItem.image} alt="" /></Link>
                    <div className="blog-content blog-content-2">
                        <h3><Link to={process.env.PUBLIC_URL + singleItem.url}>{singleItem.title}</Link></h3>
                        <p>{singleItem.text}</p>
                        <div className="blog-meta">
                            <Link to={process.env.PUBLIC_URL + singleItem.categoryUrl}><i className="fa-user-o" /> {singleItem.author}</Link>
                            <Link to={process.env.PUBLIC_URL + singleItem.categoryUrl}><i className="fa-clock-o" /> {singleItem.date}</Link>
                        </div>
                    </div>
                </div>
            </div>
    
        )
    })

    return (
        <Slider className="blog-grid-slider-wrapper grid-slider-wrapper" {...blogGridSliderSettings}>
            {blogGridSliderDataList}
        </Slider>
    )
}

export default BlogGridSlider