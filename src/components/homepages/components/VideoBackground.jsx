import React, {Component} from 'react'
import ModalVideo from 'react-modal-video'

class VideoBackground extends Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }
    render(){
        return (
            <div className="video-area pt-140 pb-145 text-center bg-img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/img/banner/banner-35.jpg'}')`}}>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='d_11DwJLwwY' onClose={() => this.setState({isOpen: false})} />
                <div className="container-fluid">
                    <div className="video-content">
                        <span>#SML</span>
                        <h2>Summer 2019</h2>
                        <div className="video-icon">
                            <button className="video-popup" onClick={this.openModal}><img alt='' src={process.env.PUBLIC_URL + '/img/icon-img/play-icon.png'} /></button>
                        </div>
                    </div>
                </div>
            </div>
    
        )
    }
}

export default VideoBackground