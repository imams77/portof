import React from 'react'

function FeatureText() {
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="feature-wrap-2 text-center bg-green mb-10">
                <h5><span>Free Delivery</span> on all orders over $100</h5>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="feature-wrap-2 text-center bg-yellow mb-10">
                <h5><span>Worldwide Shipping</span>  anywhere in 2-4 days</h5>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="feature-wrap-2 text-center bg-pink-2 mb-10">
                <h5><span>Full Returns</span> within 7 working days</h5>
                </div>
            </div>
        </div>
    )
}

export default FeatureText