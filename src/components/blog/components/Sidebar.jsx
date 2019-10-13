import React from 'react'
import { Link } from 'react-router-dom'

function BlogSidebar() {
    return (
        <div className="product-details-sidebar">
            <div className="sidebar-widget pb-45">
                <div className="sidebar-widget-search">
                    <form className="search-form-2" action="#">
                        <input type="text" placeholder="Search here…" />
                        <button className="button-search-2"><i className="negan-icon-zoom2" /></button>
                    </form>
                </div>
            </div>
            <div className="sidebar-widget pb-45">
                <h4 className="pro-sidebar-title">Categories </h4>
                <div className="sidebar-widget-list mt-30">
                    <ul>
                        <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Man</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Women</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Kids</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Accessories</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>New Look</Link></li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-widget pb-25">
            <h4 className="pro-sidebar-title">Popular Posts </h4>
            <div className="sidebar-product-wrap mt-30">
                <div className="single-sidebar-product mb-40">
                    <div className="sidebar-product-img">
                        <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><img src={process.env.PUBLIC_URL + '/img/blog/sidebar-product-1.jpg'} alt='' /></Link>
                    </div>
                    <div className="sidebar-product-content">
                        <h4><Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>7 Helpful Strategies.</Link></h4>
                        <span>June 10, 2017</span>
                    </div>
                    </div>
                <div className="single-sidebar-product mb-40">
                    <div className="sidebar-product-img">
                        <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><img src={process.env.PUBLIC_URL + '/img/blog/sidebar-product-2.jpg'} alt='' /></Link>
                    </div>
                    <div className="sidebar-product-content">
                        <h4><Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Cover Ups For Summer</Link></h4>
                        <span>June 10, 2017</span>
                    </div>
                </div>
                <div className="single-sidebar-product mb-40">
                    <div className="sidebar-product-img">
                        <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><img src={process.env.PUBLIC_URL + '/img/blog/sidebar-product-3.jpg'} alt='' /></Link>
                    </div>
                    <div className="sidebar-product-content">
                        <h4><Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Olivia Palermo’s fall</Link></h4>
                        <span>June 10, 2017</span>
                    </div>
                </div>
            </div>
            </div>
            <div className="sidebar-widget pb-40">
            <h4 className="pro-sidebar-title">Recent Comments </h4>
            <div className="sidebar-widget-comment mt-25">
                <ul>
                <li>5SOPHIE LITTLE<Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Simple Product 02</Link></li>
                <li>5ROGER MORAN<Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Simple Product 04</Link></li>
                <li>5STELLA MCGEE<Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Simple Product 03</Link></li>
                <li>Lura Keller • Happy Customer on <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Simple Product 05</Link></li>
                <li>Brent Moss • Happy Customer on <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Simple Product 06</Link></li>
                </ul>
            </div>
            </div>
            <div className="sidebar-widget pb-35">
            <h4 className="pro-sidebar-title">Archive </h4>
            <div className="sidebar-widget-archive mt-25">
                <ul>
                    <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>June 2017</Link></li>
                    <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>May 2017</Link></li>
                    <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>April 2017</Link></li>
                </ul>
            </div>
            </div>
            <div className="sidebar-widget pb-45">
            <h4 className="pro-sidebar-title">Tags </h4>
            <div className="sidebar-widget-tags2 mt-25">
                <ul>
                    <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Beauty</Link></li>
                    <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Clothes</Link></li>
                    <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Gilemi</Link></li>
                    <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Sport</Link></li>
                    <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Trending</Link></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default BlogSidebar
