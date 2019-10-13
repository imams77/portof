import React from 'react'
import Slider from 'react-slick'

import { testimonialSliderSettings } from '../../../setup/slider'


function TestimonialSlider() {
    let testimonialData = [
        {image:'/img/testimonial/testimonial-1.jpg', text:'In convallis nulla et magna congue convallis. Donec eu nunc vel justo maximus posuere. Sed viverra nunc erat, a efficitur nibh', clientName:'Francisco Newton'},
        {image:'/img/testimonial/testimonial-2.jpg', text:'In convallis nulla et magna congue convallis. Donec eu nunc vel justo maximus posuere. Sed viverra nunc erat, a efficitur nibh', clientName:'John Doe'},
        {image:'/img/testimonial/testimonial-1.jpg', text:'In convallis nulla et magna congue convallis. Donec eu nunc vel justo maximus posuere. Sed viverra nunc erat, a efficitur nibh', clientName:'Francisco Newton'},
        {image:'/img/testimonial/testimonial-2.jpg', text:'In convallis nulla et magna congue convallis. Donec eu nunc vel justo maximus posuere. Sed viverra nunc erat, a efficitur nibh', clientName:'Jonathon Doe'}
    ]
    
    let testimonialDataList = testimonialData.map((singleItem, index)=>{
        return(
            <div className="col"  key={index}>
                <div className="single-testimonial-wrap text-center">
                    <img src={ process.env.PUBLIC_URL + singleItem.image} alt='' />
                    <div className="client-imfo">
                        <p>"{singleItem.text}"</p>
                        <h5>{singleItem.clientName}</h5>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <Slider className='testimonial-active' {...testimonialSliderSettings}>
            {testimonialDataList}
        </Slider>
    )
}

export default TestimonialSlider
