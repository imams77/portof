import React from 'react'

function BannerImageTwo(props) {
    return (
        <div className="about-us-banner-area bg-img pb-110" style={{backgroundImage: `url('${process.env.PUBLIC_URL + props.image}')`}}>
            <div className="container">
                <div className="row">
                    <div className="ml-auto mr-auto col-lg-8">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8">
                                <div className="about-banner-content">
                                    <p>“{props.text}”</p>
                                    <span>{props.author} • {props.designation}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerImageTwo