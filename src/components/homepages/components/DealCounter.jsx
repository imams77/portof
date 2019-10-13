import React from 'react'
import { Link } from 'react-router-dom'
import Countdown from 'react-countdown-now'

// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds }) => {
      return (
        <div className="timer timer-style">
            <div>
                <span className="cdown day">{days} <p>Days</p></span> 
                <span className="cdown hour">{hours} <p>Hrs</p></span> 
                <span className="cdown minutes">{minutes} <p>Mins</p></span> 
                <span>{seconds} <p>Secs</p></span>
            </div>
        </div>
      );
};

function DealCounter(props) {
    return (
        
        <div className="bg-img pb-80" style={{backgroundImage: `url('${process.env.PUBLIC_URL + props.image}')`}}>
            {/* section title */}
            <div className="section-title text-center mb-27">
                <h2>Deal of the day</h2>
                <p>Sed vitae eros a quam malesuada porttitor nec nec</p>
            </div>
            <div className="deal-content text-center">
                <h2><span>{props.title}</span> {props.year}</h2>
                <p>{props.message}</p>
                    <Countdown date={new Date(props.dateTime)} renderer={renderer} />   
                <div className="deal-btn">
                    <Link className="btn btn-color-black btn-size-sm" to={process.env.PUBLIC_URL+ props.url}>SHOPPING NOW</Link>
                </div>
            </div>
        </div>
    )
}

export default DealCounter