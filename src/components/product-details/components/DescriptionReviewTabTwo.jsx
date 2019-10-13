import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { PropTypes } from 'prop-types'

function DescriptionReviewTabTwo(props) {
  
    const { productData} = props;
    return (
        <div>
            <div className="description-review-wrapper mt-30">
                <Tabs className="description-review-bottom">
                    <TabList className="pb-30">
                        <Tab>DESCRIPTION</Tab>
                        <Tab>REVIEWS (3)</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="product-description-wrapper">
                            <p>{productData.longDescription}</p>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="review-wrapper">
                            <div className="single-review">
                            <div className="review-img">
                                <img src={process.env.PUBLIC_URL+'/img/client/client-1.jpg'} alt='' />
                            </div>
                            <div className="review-content">
                                <p>“In convallis nulla et magna congue convallis. Donec eu nunc vel justo maximus posuere. Sed viverra nunc erat, a efficitur nibh”</p>
                                <div className="review-top-wrap">
                                <div className="review-name">
                                    <h4>Stella McGee</h4>
                                </div>
                                <div className="review-rating">
                                    <i className="negan-icon-star" />
                                    <i className="negan-icon-star" />
                                    <i className="negan-icon-star" />
                                    <i className="negan-icon-star" />
                                    <i className="negan-icon-star" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="single-review">
                            <div className="review-img">
                                <img src={process.env.PUBLIC_URL+'/img/client/client-2.jpg'} alt='' />
                            </div>
                            <div className="review-content">
                                <p>“In convallis nulla et magna congue convallis. Donec eu nunc vel justo maximus posuere. Sed viverra nunc erat, a efficitur nibh”</p>
                                <div className="review-top-wrap">
                                <div className="review-name">
                                    <h4>Stella McGee</h4>
                                </div>
                                <div className="review-rating">
                                    <i className="negan-icon-star" />
                                    <i className="negan-icon-star" />
                                    <i className="negan-icon-star" />
                                    <i className="negan-icon-star" />
                                    <i className="negan-icon-star" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="single-review">
                            <div className="review-img">
                                <img src={process.env.PUBLIC_URL+'/img/client/client-3.jpg'} alt='' />
                            </div>
                            <div className="review-content">
                                <p>“In convallis nulla et magna congue convallis. Donec eu nunc vel justo maximus posuere. Sed viverra nunc erat, a efficitur nibh”</p>
                                <div className="review-top-wrap">
                                <div className="review-name">
                                    <h4>Stella McGee</h4>
                                </div>
                                <div className="review-rating">
                                    <i className="negan-icon-star" />
                                    <i className="negan-icon-star" />
                                    <i className="negan-icon-star" />
                                    <i className="negan-icon-star" />
                                    <i className="negan-icon-star" />
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="ratting-form-wrapper">
                            <span>Add a Review</span>
                            <p>Your email address will not be published. Required fields are marked <span>*</span></p>
                            <div className="star-box-wrap">
                            <div className="single-ratting-star">
                                <i className="negan-icon-star" />
                            </div>
                            <div className="single-ratting-star">
                                <i className="negan-icon-star" />
                                <i className="negan-icon-star" />
                            </div>
                            <div className="single-ratting-star">
                                <i className="negan-icon-star" />
                                <i className="negan-icon-star" />
                                <i className="negan-icon-star" />
                            </div>
                            <div className="single-ratting-star">
                                <i className="negan-icon-star" />
                                <i className="negan-icon-star" />
                                <i className="negan-icon-star" />
                                <i className="negan-icon-star" />
                            </div>
                            <div className="single-ratting-star">
                                <i className="negan-icon-star" />
                                <i className="negan-icon-star" />
                                <i className="negan-icon-star" />
                                <i className="negan-icon-star" />
                                <i className="negan-icon-star" />
                            </div>
                            </div>
                            <div className="ratting-form">
                            <form action="#">
                                <div className="row">
                                <div className="col-md-12">
                                    <div className="rating-form-style mb-20">
                                    <label>Your review <span>*</span></label>
                                    <textarea name="Your Review" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="rating-form-style mb-20">
                                    <label>Name <span>*</span></label>
                                    <input type="text" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="rating-form-style mb-20">
                                    <label>Email <span>*</span></label>
                                    <input type="email" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-submit">
                                    <input type="submit" defaultValue="Submit" />
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <div className="pro-dec-banner2 mt-30">
                <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}><img src={process.env.PUBLIC_URL+'/img/banner/banner-36.jpg'} alt='' /></Link>
            </div>
        </div>
    )

}

DescriptionReviewTabTwo.propTypes = {
    productData: PropTypes.object
}


export default DescriptionReviewTabTwo