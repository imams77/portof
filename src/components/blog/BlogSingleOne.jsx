import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import Breadcrumb from '../common/Breadcrumb'
import Sidebar from './components/Sidebar'

function BlogSingleOne() {
    return (
        <div>
            {/* seo content */}
            <Helmet>
                <title>Negan | Blog Post</title>
                <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
            </Helmet>

            {/* breadcrumb */}
            <Breadcrumb title="Blog Single One" />
        
            <div className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <div className="single-blog-wrap mb-20">
                                <div className="blog-img-wrap">
                                    <img alt='' src={process.env.PUBLIC_URL+'/img/blog/blog-16.jpg'} />
                                </div>
                                <div className="blog-content-3 blog-content-4">
                                    <span><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>Fashion</Link></span>
                                    <div className="blog-meta-2">
                                        <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-user-o" /> Katherine Leonard</Link>
                                        <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}><i className="fa-clock-o" /> May 29, 2019</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            {/* blog sidebar */}
                            <Sidebar />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="blog-details-bg">
                        <img src={process.env.PUBLIC_URL+'/img/blog/blog-details-bg.jpg'} alt='' />
                    </div>
                    <div className="blog-details-bottom pt-40">
                        <div className="container">
                        <div className="row">
                            <div className="ml-auto col-lg-9">
                            <div className="blog-details-content">
                                <h3>Fashion #Trending 2017</h3>
                                <p className="pera-mrg">Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh, ac posuere ante diam eu velit. Cras varius malesuada imperdiet. Aliquam tincidunt eleifend urna nec pulvinar.</p>
                                <p>Aenean iaculis ligula dolor, eu sollicitudin mi ullamcorper ut. Curabitur feugiat, tellus id volutpat euismod, quam ipsum mattis velit, et tincidunt lorem elit nec enim. Quisque mollis consectetur sem eu dapibus. Pellentesque ornare non dui at laoreet. In tempus, est eu ullamcorper tempus, nibh ipsum pellentesque est, ut viverra nunc est et velit</p>
                                <div className="blog-details-list-wrap">
                                <div className="row">
                                    <div className="col-lg-6">
                                    <div className="blog-details-list">
                                        <h3>Fashion is Life</h3>
                                        <p>Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convamolest</p>
                                        <ul>
                                        <li>Pellentesque orci lectus, bibendu</li>
                                        <li>Suspendisse non convallis</li>
                                        <li>Ut tincidunt, sem id tristique commodo,</li>
                                        </ul>
                                        <p>Quisque condimentum id diam a euismod. Maecenas a nisi arcu. Donec sagittis consequat ligula id varius. Aliquam tempor, mi vitae aliquet rutrum, nun=</p>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="blog-details-side-img">
                                        <img src={process.env.PUBLIC_URL+'/img/blog/blog-details-1.jpg'} alt='' />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <h3>Clean, Minimal HTML5 Template</h3>
                                <p>Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh, ac posuere ante diam eu velit. Cras varius malesuada imperdiet. Aliquam tincidunt eleifend urna nec pulvinar.</p>
                                <div className="b-details-bg-color-wrap">
                                <div className="row">
                                    <div className="col-lg-6">
                                    <div className="blog-details-bg-color">
                                        <div className="blog-content-5">
                                        <h3>"In convallis nulla et magna congue convallis. Donec eu nunc vel justo posuere efficitur"</h3>
                                        <span>Della William • CEO/ FOUNDER</span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="blog-details-bg-color-right">
                                        <p>Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh, ac posuere ante diam eu velit. Cras varius malesuada imperdiet. Aliquam tincidunt.</p>
                                        <p>Aenean iaculis ligula dolor, eu sollicitudin mi ullamcorper ut. Curabitur feugiat, tellus id volutpat euismod, quam ipsum mattis velit, et tincidunt lorem elit nec enim. Quisque mollis consectetur sem eu dapibus. Pellentesque ornare non dui at laoreet. In tempus, est eu ullamcorper tempus, nibh ipsum pellentesque est, ut viverra nunc est et velit. Curabitur tincidunt lorem dui, malesuada rutrum leo</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <p>Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolor viverra sed. Curabitur ultrices, urna ac convallis faucibus, quam purus luctus nibh, ac posuere ante diam eu velit. Cras varius malesuada imperdiet. Aliquam tincidunt eleifend urna nec pulvinar. Aenean iaculis ligula dolor, eu sollicitudin mi ullamcorper ut. Curabitur feugiat, tellus id volutpat euismod, quam ipsum mattis velit, et tincidunt lorem elit nec enim. Quisque mollis consectetur sem eu dapibus. Pellentesque ornare non dui a</p>
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

            </div>
        </div>
        
    )
}

export default BlogSingleOne