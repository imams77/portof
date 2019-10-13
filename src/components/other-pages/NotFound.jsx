import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

class NotFound extends Component {
    render() {
        return (
            <div>
                {/* seo content */}
                <Helmet>
                    <title>Negan | 404</title>
                    <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
                </Helmet>
                <div className="error-area pt-70 pb-150 bg-gray-5 border-top-2">
                    <div className="container">
                        <div className="row">
                            <div className="ml-auto mr-auto col-xl-6 col-lg-8 col-md-8 col-sm-8">
                                <div className="error-content text-center">
                                    <img alt='' src={process.env.PUBLIC_URL + '/img/banner/404.png'} />
                                    <div className="back-home">
                                        <Link to={process.env.PUBLIC_URL + '/'}>back to homepage</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound