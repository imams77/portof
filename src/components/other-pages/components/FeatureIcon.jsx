import React from 'react'

function FeatureIcon() {

    let featureIconData = [
        {image:'/img/icon-img/service-1.png', title: 'CREATE DESIGN', text: 'Mauris mauris arcu, maximus ac magna ut, congue lacinia enimnon tristi.'},
        {image:'/img/icon-img/service-2.png', title: 'CREATE DESIGN', text: 'Mauris mauris arcu, maximus ac magna ut, congue lacinia enimnon tristi.'},
        {image:'/img/icon-img/service-3.png', title: 'CREATE DESIGN', text: 'Mauris mauris arcu, maximus ac magna ut, congue lacinia enimnon tristi.'},
        {image:'/img/icon-img/service-4.png', title: 'CREATE DESIGN', text: 'Mauris mauris arcu, maximus ac magna ut, congue lacinia enimnon tristi.'},
        {image:'/img/icon-img/service-5.png', title: 'CREATE DESIGN', text: 'Mauris mauris arcu, maximus ac magna ut, congue lacinia enimnon tristi.'},
        {image:'/img/icon-img/service-6.png', title: 'CREATE DESIGN', text: 'Mauris mauris arcu, maximus ac magna ut, congue lacinia enimnon tristi.'}
    ]
    
    let featureIconDataList = featureIconData.map((singleItem, index)=>{
        return(
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="single-service mb-35">
                    <img src={process.env.PUBLIC_URL + singleItem.image} alt='' />
                    <h4>{ singleItem.title }</h4>
                    <p>{singleItem.text}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="row">
            {featureIconDataList}
        </div>
    )
}

export default FeatureIcon