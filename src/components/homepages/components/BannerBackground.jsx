import React from 'react'
import { PropTypes } from 'prop-types'

function BannerBackground(props) {

    return(
        <div className="banner-bg-area text-center pt-210 pb-210 parallax-h1 bg-img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + props.bannerBgImage}')`}}>
            <h3>{props.bannerTitle}</h3>
        </div>
    )
}

BannerBackground.propTypes = {
    bannerTitle: PropTypes.string,
    bannerBgImage: PropTypes.string
}

export default BannerBackground