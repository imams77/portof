import React from 'react'
import { Helmet } from 'react-helmet'

import Breadcrumb from '../common/Breadcrumb'
import BannerImage from './components/BannerImage'
import BannerImageTwo from './components/BannerImageTwo'
import FeatureIcon from './components/FeatureIcon'
import TeamGrid from './components/TeamGrid'

function AboutUs() {

    return (
        <div>
            {/* seo content */}
            <Helmet>
                <title>Portof | About Us</title>
                <meta name="description" content="Portof – creative platform" />
            </Helmet>

            {/* breadcrumb */}
            {/* <Breadcrumb title="About Us" /> */}

            {/* about us banner */}
            {/* <BannerImage image='/img/about/bg-1.jpg' className="about-us-banner" /> */}

            {/* about content */}
            <div className="about-content-area pt-100 pb-140">
                <div className="container">
                    <div className="row">
                        <div className="ml-auto mr-auto col-lg-8">
                            <div className="about-content">
                                <h2>Who we are.</h2>
                                <p>Mauris mauris arcu, maximus ac magna ut, congue lacinia enim. Fusce vulputate, nisl non efficitur semper, libero est fringilla arcu, eget consectetur augue diam quis lorem. Cras enim leo, hendrerit ut metus viverra, tristique auctor mi. Aliquam suscipit ipsum non tristique venenatis. Fusce et libero consectetur arcu facilisis tincidunt vitae vel est. Vivamus et orci vitae libero sollicitudin venenatis. Morbi ut sagittis dui. Integer vel diam in lectus auctor tincidunt. In aliquet vel magna ac scelerisque. Mauris venenatis dictum lorem vel ultrices. Cras nulla nulla, mattis nec vestibulum sed, iaculis vel sem. Curabitur quis ex sit amet orci efficitur euismod in eu augue. Curabitur feugiat est ex, tempor consequat ligula rhoncus et.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* banner content */}
            <BannerImageTwo image="/img/about/bg-1.jpg" text="In convallis nulla et magna congue convallis. Donec eu nunc vel justo maximus posuere. Sed  erat, a efficitur" author="Della William" designation="CEO/ FOUNDER" />

            {/* feature icon area */}
            <div className="srvice-area pt-70 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="ml-auto mr-auto col-lg-8">
                            {/* feature icon */}
                            <FeatureIcon />
                        </div>
                    </div>
                </div>
            </div>

            {/* team grid area */}
            <div className="team-area border-top-2 pt-70 pb-70">
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <h2>Our Team</h2>
                        <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
                    </div>

                    {/* team grid */}
                    <TeamGrid />
                </div>
            </div>


        </div>
    )
}

export default AboutUs