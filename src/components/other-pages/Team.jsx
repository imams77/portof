import React from 'react'

function Team(){
    let teamData = [
        {image: '/img/team/member-1.jpg', name: 'Anne Klein', designation: 'CEO / Founder', shortBio: 'Mauris mauris arcu, maximus ac magna ut, congue lacinia enim. Fusce vulputate, nisl non efficitur', facebook: '//www.facebook.com', twitter: '//www.twitter.com', pinterest: '//www.pinterest.com'},
        {image: '/img/team/member-2.jpg', name: 'Anne Klein', designation: 'CEO / Founder', shortBio: 'Mauris mauris arcu, maximus ac magna ut, congue lacinia enim. Fusce vulputate, nisl non efficitur', facebook: '//www.facebook.com', twitter: '//www.twitter.com', pinterest: '//www.pinterest.com'},
        {image: '/img/team/member-3.jpg', name: 'Anne Klein', designation: 'CEO / Founder', shortBio: 'Mauris mauris arcu, maximus ac magna ut, congue lacinia enim. Fusce vulputate, nisl non efficitur', facebook: '//www.facebook.com', twitter: '//www.twitter.com', pinterest: '//www.pinterest.com'},
        {image: '/img/team/member-4.jpg', name: 'Anne Klein', designation: 'CEO / Founder', shortBio: 'Mauris mauris arcu, maximus ac magna ut, congue lacinia enim. Fusce vulputate, nisl non efficitur', facebook: '//www.facebook.com', twitter: '//www.twitter.com', pinterest: '//www.pinterest.com'},
        {image: '/img/team/member-5.jpg', name: 'Anne Klein', designation: 'CEO / Founder', shortBio: 'Mauris mauris arcu, maximus ac magna ut, congue lacinia enim. Fusce vulputate, nisl non efficitur', facebook: '//www.facebook.com', twitter: '//www.twitter.com', pinterest: '//www.pinterest.com'},
        {image: '/img/team/member-6.jpg', name: 'Anne Klein', designation: 'CEO / Founder', shortBio: 'Mauris mauris arcu, maximus ac magna ut, congue lacinia enim. Fusce vulputate, nisl non efficitur', facebook: '//www.facebook.com', twitter: '//www.twitter.com', pinterest: '//www.pinterest.com'}
    ]

    let teamDataList = teamData.map((singleItem, index)=>{
        return(
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="team-wrap mb-60">
                    <img src={process.env.PUBLIC_URL + singleItem.image} alt='' />
                    <div className="team-content-2 text-center">
                        <div className="team-info-2">
                            <h5>{singleItem.name}</h5>
                            <span>{singleItem.designation}</span>
                        </div>
                        <p>{singleItem.shortBio}</p>
                        <div className="team-social">
                            <a href={singleItem.facebook}><i className="fa fa-facebook" /></a>
                            <a href={singleItem.twitter}><i className="fa fa-twitter" /></a>
                            <a href={singleItem.pinterest}><i className="fa fa-pinterest-p" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div className="team-area pt-100 pb-35">
            <div className="container">
                <div className="row">
                    {teamDataList}
                </div>
            </div>
        </div>
    )
}

export default Team