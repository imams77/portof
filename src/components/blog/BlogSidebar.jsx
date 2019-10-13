import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import Breadcrumb from '../common/Breadcrumb'
import Sidebar from './components/Sidebar'

function BlogSidebar() {
    return (
        <div>
            {/* seo content */}
            <Helmet>
                <title>Negan | Blog</title>
                <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
            </Helmet>

            {/* breadcrumb */}
            <Breadcrumb title="Blog Sidebar" />
        
            <div className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <div className="single-blog-wrap mb-40 pb-40 border-bottom-2">
                                <div className="blog-img-wrap default-overlay item-overlay-4">
                                <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/blog/blog-13.jpg'} /></Link>
                                <div className="zom-icon">
                                    <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><i className="negan-icon-zoom-in" /></Link>
                                </div>
                                </div>
                                <div className="blog-content-3 blog-content-4">
                                <span><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Fashion</Link></span>
                                <h2><Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>7 Helpful Strategies.</Link></h2>
                                <div className="blog-meta-2">
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-user-o" /> Katherine Leonard</Link>
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-clock-o" /> May 29, 2019</Link>
                                </div>
                                <p>Fashion #Trending 2017 Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh,…</p>
                                <Link className="btn btn-style-outline btn-size-sm btn-color-gray" to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Read more</Link>
                                </div>
                            </div>
                            <div className="single-blog-wrap mb-40 pb-40 border-bottom-2">
                                <div className="blog-img-wrap default-overlay item-overlay-4">
                                <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/blog/blog-14.jpg'} /></Link>
                                <div className="zom-icon">
                                    <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><i className="negan-icon-zoom-in" /></Link>
                                </div>
                                </div>
                                <div className="blog-content-3 blog-content-4">
                                <span><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Fashion</Link></span>
                                <h2><Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Lorem ipsum dolor set amet</Link></h2>
                                <div className="blog-meta-2">
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-user-o" /> Katherine Leonard</Link>
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-clock-o" /> May 29, 2019</Link>
                                </div>
                                <p>Fashion #Trending 2017 Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh,…</p>
                                <Link className="btn btn-style-outline btn-size-sm btn-color-gray" to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Read more</Link>
                                </div>
                            </div>
                            <div className="single-blog-wrap mb-40 pb-40 border-bottom-2">
                                <div className="blog-img-wrap default-overlay item-overlay-4">
                                <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/blog/blog-15.jpg'} /></Link>
                                <div className="zom-icon">
                                    <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><i className="negan-icon-zoom-in" /></Link>
                                </div>
                                </div>
                                <div className="blog-content-3 blog-content-4">
                                <span><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Fashion</Link></span>
                                <h2><Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>7 beautiful tips</Link></h2>
                                <div className="blog-meta-2">
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-user-o" /> Katherine Leonard</Link>
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-clock-o" /> May 29, 2019</Link>
                                </div>
                                <p>Fashion #Trending 2017 Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh,…</p>
                                <Link className="btn btn-style-outline btn-size-sm btn-color-gray" to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Read more</Link>
                                </div>
                            </div>
                            <div className="single-blog-wrap mb-40 pb-40 border-bottom-2">
                                <div className="blog-img-wrap default-overlay item-overlay-4">
                                <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><img alt='' src={process.env.PUBLIC_URL + '/img/blog/blog-16.jpg'} /></Link>
                                <div className="zom-icon">
                                    <Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}><i className="negan-icon-zoom-in" /></Link>
                                </div>
                                </div>
                                <div className="blog-content-3 blog-content-4">
                                <span><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Fashion</Link></span>
                                <h2><Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Lorem ipsum dolor</Link></h2>
                                <div className="blog-meta-2">
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-user-o" /> Katherine Leonard</Link>
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-clock-o" /> May 29, 2019</Link>
                                </div>
                                <p>Fashion #Trending 2017 Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh,…</p>
                                <Link className="btn btn-style-outline btn-size-sm btn-color-gray" to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>Read more</Link>
                                </div>
                            </div>
                            
                            <div className="pro-pagination-style text-center pb-30">
                                <ul>
                                    <li><button className="active">1</button></li>
                                    <li><button>2</button></li>
                                    <li><button>3</button></li>
                                    <li><button>4</button></li>
                                    <li><button className="next">Next</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            {/* blog sidebar */}
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default BlogSidebar