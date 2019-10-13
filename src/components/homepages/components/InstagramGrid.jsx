import React, {Component} from 'react'
import { media } from 'fetch-instagram'
import Slider from 'react-slick'
import { PropTypes } from 'prop-types'

import { instagramSliderSettings } from '../../../setup/slider'

class InstagramGrid extends Component{

    state = {
        instagramData: []
    }

    componentDidMount() {
        const instagramDataCollection = media({
            accessToken: this.props.accessToken
        });
        instagramDataCollection.then(res => this.setState({instagramData:res.data}));
    }
    
    
    render(){
        
        let {instagramData} = this.state;
        let instagramDataList = instagramData.map((instagramSingle) => {
            return(
                <div key={instagramSingle.id} className="instafeed-item">
                    <a href={instagramSingle.link} target="_new">
                        <img src={instagramSingle.images.standard_resolution.url} alt="" className="img-fluid" /><i className="fa fa-instagram"></i>
                    </a>
                </div>
            )
        });

        return(
            <div>
                <div className="instagram-title text-center">
                    <h5>Shop by Instagram <span>@neganstore</span></h5>
                </div>
                <div className="instafeed">
                    <div>
                        <Slider {...instagramSliderSettings}>
                            {instagramDataList}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

InstagramGrid.propTypes = {
    accessToken: PropTypes.string.isRequired
}

export default InstagramGrid