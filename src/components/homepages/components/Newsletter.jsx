import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

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


function Newsletter(props) {
    const url = props.mailchimpUrl;
    return (
        <div className="subscribe-style-2 text-center">
            <h2>Join Our <span>NEWSLETTER</span> <br /><span>Get 10%</span> off</h2>
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
    )
}

export default Newsletter