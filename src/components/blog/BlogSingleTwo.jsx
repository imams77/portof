import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import Breadcrumb from '../common/Breadcrumb'

function BlogSingleTwo() {
    return (
        <div>
            {/* seo content */}
            <Helmet>
                <title>Negan | Blog Post</title>
                <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
            </Helmet>

            {/* breadcrumb */}
            <Breadcrumb title="Blog Single Two" />

            <div className="blog-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog-details-content-area">
                            <div className="single-blog-wrap mb-30">
                                <div className="blog-img-wrap">
                                    <img alt='' src={process.env.PUBLIC_URL+'/img/blog/blog-details-2.jpg'} />
                                </div>
                                <div className="blog-content-3 blog-content-mrg-2 text-center">
                                <span><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Fashion</Link></span>
                                <div className="blog-meta-2">
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-user-o" /> Katherine Leonard</Link>
                                    <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-clock-o" /> May 29, 2019</Link>
                                </div>
                                </div>
                            </div>
                            <div className="blog-details-img mb-40">
                                <img alt='' src={process.env.PUBLIC_URL+'/img/blog/blog-details-3.jpg'} />
                            </div>
                            <div className="row">
                                <div className="col-lg-8 col-md-10 ml-auto mr-auto">
                                    <div className="blog-details-content-2">
                                        <h3>Fashion #Trending 2019</h3>
                                        <p className="pera-mrg">Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh, ac posuere ante diam eu velit. Cras varius malesuada imperdiet. Aliquam tincidunt eleifend urna nec pulvinar.</p>
                                        <p>Aenean iaculis ligula dolor, eu sollicitudin mi ullamcorper ut. Curabitur feugiat, tellus id volutpat euismod, quam ipsum mattis velit, et tincidunt lorem elit nec enim. Quisque mollis consectetur sem eu dapibus. Pellentesque ornare non dui at laoreet. In tempus, est eu ullamcorper tempus, nibh ipsum pellentesque est, ut viverra nunc est et velit. Curabitur tincidunt lorem dui, malesuada rutrum leo elementum eget. Curabitur ultricies at justo sed porttitor.</p>
                                        <blockquote className="la-blockquote">
                                        <p>“In convallis nulla et magna congue convallis. Donec eu nunc vel justo posuere efficitur”</p>
                                        <span>Della William • CEO/ FOUNDER</span>
                                        </blockquote>
                                        <p className="pera-mrg">Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh, ac posuere ante diam eu velit. Cras varius malesuada imperdiet. Aliquam tincidunt eleifend urna nec pulvinar.</p>
                                        <p>Aenean iaculis ligula dolor, eu sollicitudin mi ullamcorper ut. Curabitur feugiat, tellus id volutpat euismod, quam ipsum mattis velit, et tincidunt lorem elit nec enim. Quisque mollis consectetur sem eu dapibus. Pellentesque ornare non dui at laoreet. In tempus, est eu ullamcorper tempus, nibh ipsum pellentesque est, ut viverra nunc est et velit. Curabitur tincidunt lorem dui, malesuada rutrum leo elementum eget. Curabitur ultricies at justo sed porttitor. Mauris tristique scelerisque tristique. Aliquam ex dui, pellentesque non eros eu,</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details-img mt-50 mb-10">
                                <img alt='' src={process.env.PUBLIC_URL+'/img/blog/blog-details-4.jpg'} />
                            </div>
                            <div className="padding-5-row-col">
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="blog-details-img b-details-mrg">
                                    <img alt='' src={process.env.PUBLIC_URL+'/img/blog/blog-details-5.jpg'} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-details-img">
                                    <img alt='' src={process.env.PUBLIC_URL+'/img/blog/blog-details-6.jpg'} />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 col-md-10 ml-auto mr-auto">
                                <div className="blog-details-content-2 mt-60">
                                    <p className="pera-mrg">Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh, ac posuere ante diam eu velit. Cras varius malesuada imperdiet. Aliquam tincidunt eleifend urna nec pulvinar.</p>
                                    <p>Aenean iaculis ligula dolor, eu sollicitudin mi ullamcorper ut. Curabitur feugiat, tellus id volutpat euismod, quam ipsum mattis velit, et tincidunt lorem elit nec enim. Quisque mollis consectetur sem e</p>
                                </div>
                                </div>
                            </div>
                            <div className="blog-comment">
                                <div className="no-review">
                                    <p>There are no reviews yet.</p>
                                </div>
                                <div className="comment-form">
                                    <h3>Leave a Reply </h3>
                                    <p>Your email address will not be published. Required fields are marked <span>*</span></p>
                                    <form action="#">
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="leave-form">
                                            <label>Comment</label>
                                            <textarea defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="leave-form">
                                            <label>Name <span>*</span></label>
                                            <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="leave-form">
                                            <label>Email <span>*</span></label>
                                            <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="leave-form">
                                            <label>Website</label>
                                            <input type="text" />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="text-submit">
                                        <input type="submit" defaultValue="Post Comment" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSingleTwo