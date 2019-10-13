import React from 'react'

function FeatureIcon(){
    let featureIconData = [
        { id: 1, iconName: 'nc-icon-glyph shopping_delivery', title: 'Free Delivery', subtitle: 'In convallis nulla et magna congue' },
        { id: 2, iconName: 'nc-icon-glyph objects_support-17', title: 'Expert Support', subtitle: 'In convallis nulla et magna congue' },
        { id: 3, iconName: 'nc-icon-glyph holidays_gift', title: '10% Discount', subtitle: 'In convallis nulla et magna congue' },
        { id: 4, iconName: 'nc-icon-glyph tech-2_l-security', title: 'Buyer Protection', subtitle: 'In convallis nulla et magna congue' }
    ];

    let featureIconDataList = featureIconData.map( (featureIcon) => {
        return(
            <div className="col-lg-3 col-md-6 col-sm-6" key={featureIcon.id}>
                <div className="feature-wrap mb-30 text-center">
                    <i className={featureIcon.iconName} />
                    <h5>{featureIcon.title}</h5>
                    <p>{featureIcon.subtitle}</p>
                </div>
            </div>
        )
    } )
    return(
        <div className="row">
            {featureIconDataList}
        </div>
    )
}

export default FeatureIcon