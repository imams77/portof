import React from 'react'

function TeamGrid() {

    let teamData = [
        {image:'/img/team/member-1.jpg', name: 'Anne Klein', designation: 'CEO / Founder', facebook: '//facebook.com', twitter: '//twitter.com', pinterest: '//pinterest.com'},
        {image:'/img/team/member-2.jpg', name: 'Anne Klein', designation: 'CEO / Founder', facebook: '//facebook.com', twitter: '//twitter.com', pinterest: '//pinterest.com'},
        {image:'/img/team/member-3.jpg', name: 'Anne Klein', designation: 'CEO / Founder', facebook: '//facebook.com', twitter: '//twitter.com', pinterest: '//pinterest.com'},
        {image:'/img/team/member-4.jpg', name: 'Anne Klein', designation: 'CEO / Founder', facebook: '//facebook.com', twitter: '//twitter.com', pinterest: '//pinterest.com'},
        {image:'/img/team/member-5.jpg', name: 'Anne Klein', designation: 'CEO / Founder', facebook: '//facebook.com', twitter: '//twitter.com', pinterest: '//pinterest.com'},
        {image:'/img/team/member-6.jpg', name: 'Anne Klein', designation: 'CEO / Founder', facebook: '//facebook.com', twitter: '//twitter.com', pinterest: '//pinterest.com'}
    ]
    
    let temaDataList = teamData.map((singleItem, index)=>{
        return(
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="team-wrap">
                    <img src={process.env.PUBLIC_URL + singleItem.image} alt='' />
                    <div className="team-content text-center">
                        <div className="team-info">
                            <h5>{singleItem.name}</h5>
                            <span>{singleItem.designation}</span>
                        </div>
                        <div className="team-social">
                            <ul>
                            <li><a href={singleItem.facebook}><i className="fa fa-facebook" /></a></li>
                            <li><a href={singleItem.twitter}><i className="fa fa-twitter" /></a></li>
                            <li><a href={singleItem.pinterest}><i className="fa fa-pinterest-p" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
        )
    })

    return (
        <div className="row no-gutters">
            {temaDataList}
        </div>
    )
}

export default TeamGrid