import React from 'react'
import Helmet from 'react-helmet'

import Breadcrumb from '../common/Breadcrumb'
import LocationMap from '../common/LocationMap'

function ContactUs() {

    return (
        <div>
            {/* seo content */}
            <Helmet>
                <title>Portof | Contact Us</title>
                <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
            </Helmet>

            {/* breadcrumb */}
            <Breadcrumb title="Contact Us" />

            <div className="contact-area contact-area-mrg">
                <div className="contact-page-map" id="contact-2">
                    {/* <LocationMap latitude="47.444" longitude="-122.176" /> */}
                    {/* <img src="" alt=""/> */}
                </div>
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                    <div className="ml-auto col-lg-6 col-md-12 col-12">
                        <div className="contact-info-area pr-40">
                        <h3> Let us know what you have in mind, and we'll get back to you in an instant!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris su</p>
                        <div className="contact-from-2">
                            <form id="contact-form">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <input name="first_name" type="text" placeholder="Your Name" /> 
                                </div>
                                <div className="col-lg-12 col-md-12 col-12">
                                    <input name="email_address" type="text" placeholder="Email Address" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-12">
                                    <input name="phone" type="text" placeholder="Phone Number" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-12">
                                    <input name="contact_subject" type="text" placeholder="Business Planning" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-12">
                                    <textarea name="message" placeholder="Your Message" defaultValue={""} />
                                </div>
                                <div className="col-lg-12 col-md-12 col-12">
                                    <button className="submit" type="submit">Send Message</button>
                                </div>
                            </div>
                            </form>
                            <p className="form-messege" />
                        </div>
                        <div className="contact-info-bottom">
                            <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-3">
                                <div className="single-contact-info mb-30 text-center">
                                    <i className="fa fa-phone" />
                                    <p>(+61 2) 9251 5600</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="single-contact-info mb-30 text-center">
                                    <i className="fa fa-envelope-o" />
                                    <p><a href="mailto:info@example.com">info@example.com</a></p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-4 col-sm-5">
                                <div className="single-contact-info mb-30 text-center">
                                    <i className="fa fa-map-marker" />
                                    <p>PO Box 16122 Victoria 8007</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container-fluid pl-125">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-5 col-md-12">
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )

}

export default ContactUs