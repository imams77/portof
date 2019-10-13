import React, { Component } from 'react'
import Slider from 'react-slick'


class TestimonialSliderTwo extends Component{
    render(){

        let testimonialData = [
            {text: 'In convallis nulla et magna congue convallis. Donec eu nunc vel justo maximus posuere. Sed viverra nunc erat, a efficitur nibh', clientName: 'John Doe'},
            {text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nam eligendi et delectus odit quae suscipit quia temporibus veritatis corrupti? ', clientName: 'Johathon Doe'}
        ]

        let testimonialDataList = testimonialData.map((singleItem, index)=>{
            return(
                <div className="single-testimonial-wrap2 text-center" key={index}>
                    <p>"{singleItem.text}"</p>
                    <h5>{singleItem.clientName}</h5>
                </div>
            )
        })

        function NextArrow(props) {
            const {onClick} = props;
        
            return (
                <div onClick={onClick}>
                    <button type="button" className="slick-arrow slick-next"><i className='negan-icon-arrows-minimal-right' /></button>
                </div>
            );
        }

        function PrevArrow(props) {
            const {onClick} = props;
            return (
                <div onClick={onClick}>
                    <button type="button" className="slick-arrow slick-prev"><i className='negan-icon-arrows-minimal-left'/></button>
                </div>
            );
        }

        const testimonialSliderTwoSettings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />
        };

        return(
            <Slider className='testimonial-active-2' {...testimonialSliderTwoSettings}>
                { testimonialDataList }
            </Slider>
        )

        }
}

export default TestimonialSliderTwo