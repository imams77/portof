import React from 'react'
import { PropTypes } from 'prop-types'

function ProductDetailsStickyImages(props) {
    const { productData } = props;

    let productDetailsStickyImages = productData.images.map((singleItem, index)=> {
        return(
            <div className="single-pro-details-sticky mb-30" key={index}>
                <img src={process.env.PUBLIC_URL + singleItem} alt="" className="img-fluid" />
            </div>
        )
    })
    return (
        <div>
            <div className="product-details-sticky mr-30">
                {productDetailsStickyImages}
            </div>

        </div>
    )
}

ProductDetailsStickyImages.propTypes = {
    productData: PropTypes.object
}

export default ProductDetailsStickyImages