import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Countdown from 'react-countdown-now'
import Helmet from 'react-helmet'

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

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
    {
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value
      });

      let emailInput = document.getElementById('mc-form-email2');
      emailInput.value = '';
    }
  
    return (

        <div className="subscribe-form-2 mt-20">
            <div className="subscribe-form-style-2">
                <div className="mc-form">
                        <input
                            id="mc-form-email2"
                            className="email"
                            ref={node => (email = node)}
                            type="email"
                            placeholder="Enter your email address..."
                        />
                    <div className="clear">
                        <button className="button" onClick={submit}>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
                {status === "sending" && <div style={{ color: "#3498db", fontSize: "12px" }}>sending...</div>}
                {status === "error" && (
                <div
                    style={{ color: "#e74c3c", fontSize: "12px" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
                )}
                {status === "success" && (
                <div
                    style={{ color: "#2ecc71", fontSize: "12px" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
                )}
        </div>
    );
};


class ComingSoon extends Component {
    render() {
        const url = "//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef";
        return (
            <div>
                {/* seo content */}
                <Helmet>
                    <title>Negan | Coming Soon</title>
                    <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
                </Helmet>
                <div className="comimg-soon-area pt-295 pb-240 bg-img" style={{backgroundImage:  `url('${process.env.PUBLIC_URL + '/img/bg/coming-soon-bg.jpg'}')`}}>
                    <div className="container">
                        <div className="row">
                            <div className="ml-auto mr-auto col-xl-6 col-lg-8 col-md-8 col-sm-8">
                                <div className="comimg-soon-content text-center">
                                    <div className="comimg-soon-title">
                                        <h2>Coming Very Soon</h2>
                                        <p>Nulla luctus dignissim libero, vitae tristique sem mollis sed. Mauris ultricies ullamcorper diam, vel posuere nisl pulvinar id. Mauris varius vulputate nisi, et lacinia dolo</p>
                                    </div>
                                    <div className="timer timer-style-3">
                                        <Countdown date={new Date("October 13, 2020 11:13:00")} renderer={renderer} />  
                                    </div>
                                    <div className="suscribe">
                                        <MailchimpSubscribe
                                        url={url}
                                        render={({ subscribe, status, message }) => (
                                            <CustomForm
                                            status={status}
                                            message={message}
                                            onValidated={formData => subscribe(formData)}
                                            />
                                        )}
                                        />
                                    </div>
                                    <div className="go-back">
                                        <Link to={process.env.PUBLIC_URL+'/'}>BACK TO HOMEPAGE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComingSoon