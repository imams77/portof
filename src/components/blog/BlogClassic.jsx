import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

function BlogClassic() {
    return (
        <div>
            {/* seo content */}
            <Helmet>
                <title>Portof | Blog</title>
                <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
            </Helmet>

            {/* breadcrumb */}
            <Breadcrumb title="Blog Classic" />

            <div className="blog-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="single-blog-wrap mb-100">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                <div className="blog-img-wrap default-overlay item-overlay-4">
                                    <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/blog/blog-9.jpg'} /></Link>
                                    <div className="zom-icon">
                                    <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><i className="negan-icon-zoom-in" /></Link>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                <div className="blog-content-3">
                                    <span><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Fashion</Link></span>
                                    <h2><Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>7 Helpful Strategies.</Link></h2>
                                    <div className="blog-meta-2">
                                        <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-user-o" /> Katherine Leonard</Link>
                                        <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-clock-o" /> May 29, 2019</Link>
                                    </div>
                                    <p>Fashion #Trending 2019 Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh,…</p>
                                    <Link className="btn btn-style-outline btn-size-sm btn-color-gray" to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Read more</Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-blog-wrap mb-100">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="blog-img-wrap default-overlay item-overlay-4">
                                <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/blog/blog-10.jpg'} /></Link>
                                    <div className="zom-icon">
                                        <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><i className="negan-icon-zoom-in" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="blog-content-3">
                                    <span><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Travel</Link></span>
                                    <h2><Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Cover Ups For Summer</Link></h2>
                                    <div className="blog-meta-2">
                                        <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-user-o" /> Katherine Leonard</Link>
                                        <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-clock-o" /> May 29, 2019</Link>
                                    </div>
                                    <p>Fashion #Trending 2019 Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh,…</p>
                                    <Link className="btn btn-style-outline btn-size-sm btn-color-gray" to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Read more</Link>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="single-blog-wrap mb-100">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <div className="blog-img-wrap default-overlay item-overlay-4">
                                <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/blog/blog-11.jpg'} /></Link>
                                <div className="zom-icon">
                                    <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><i className="negan-icon-zoom-in" /></Link>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                            <div className="blog-content-3">
                            <span><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Fashion</Link></span>
                                <h2><Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Olivia Palermo’s fall 2019</Link></h2>
                                <div className="blog-meta-2">
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-user-o" /> Katherine Leonard</Link>
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-clock-o" /> May 29, 2019</Link>
                                </div>
                                <p>Fashion #Trending 2019 Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh,…</p>
                                <Link className="btn btn-style-outline btn-size-sm btn-color-gray" to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Read more</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="single-blog-wrap mb-100">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <div className="blog-img-wrap default-overlay item-overlay-4">
                                <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/blog/blog-12.jpg'} /></Link>
                                <div className="zom-icon">
                                    <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><i className="negan-icon-zoom-in" /></Link>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                            <div className="blog-content-3">
                                <span><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Travel</Link></span>
                                <h2><Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>My Life in 3 Looks</Link></h2>
                                <div className="blog-meta-2">
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-user-o" /> Katherine Leonard</Link>
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-clock-o" /> May 29, 2019</Link>
                                </div>
                                <p>Fashion #Trending 2019 Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh,…</p>
                                <Link className="btn btn-style-outline btn-size-sm btn-color-gray" to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Read more</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="pro-pagination-style text-center">
                            <ul>
                                <li><button className="active">1</button></li>
                                <li><button>2</button></li>
                                <li><button>3</button></li>
                                <li><button>4</button></li>
                                <li><button className="next">Next</button></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogClassic
