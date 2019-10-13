import React from 'react'

function BannerImage(props) {
    return (
        <div className="about-us-banner-area" style={{backgroundImage: `url('${process.env.PUBLIC_URL + props.image}')`}}>
            {/* // <img src= alt='' /> */}
        </div>
    )
}

export default BannerImage