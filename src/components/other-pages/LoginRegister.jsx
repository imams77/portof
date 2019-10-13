import React from 'react'
import Helmet from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'

import Breadcrumb from '../common/Breadcrumb'

function LoginRegister(){
    return (
        <div>
            {/* seo content */}
            <Helmet>
                <title>Negan | Login</title>
                <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
            </Helmet>

            {/* breadcrumb */}
            <Breadcrumb title="Login Register" />
            <div className="login-register-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-12 ml-auto mr-auto">
                        <div className="login-register-wrapper">
                        <Tabs>
                            <TabList className="login-register-tab-list">
                                <Tab>Login</Tab>
                                <Tab>Register</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="login-form-container">
                                    <div className="login-register-form">
                                        <form action="#" method="post">
                                            <div className="sin-login-register">
                                                <label>User name or email address <span>*</span></label>
                                                <input type="text" name="user-name" />
                                            </div>
                                            <div className="sin-login-register">
                                                <label>Passwords <span>*</span></label>
                                                <input type="password" name="user-password" />
                                            </div>
                                            <button type="submit">Login</button>
                                            <div className="login-toggle-btn">
                                                <input type="checkbox" />
                                                <label>Remember me</label>
                                                <a href="/#"> Lost your password?</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="login-social">
                                        <span>Login with:</span>
                                        <ul>
                                            <li><a href="//facebook.com">Facebook</a></li>
                                            <li><a href="//twitter.com">Twitter</a></li>
                                            <li><a href="//google.com">Google</a></li>
                                        </ul>
                                    </div>
                                    <div className="create-account">
                                        <span>You don't have account ?</span>
                                        <Link to={process.env.PUBLIC_URL+'/login-register'}>Create account now</Link>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="login-form-container">
                                    <div className="login-register-form">
                                    <form action="#" method="post">
                                        <div className="sin-login-register">
                                        <label>Email address <span>*</span></label>
                                        <input type="text" name="user-name" />
                                        </div>
                                        <div className="sin-login-register">
                                        <label>Passwords <span>*</span></label>
                                        <input type="password" name="user-password" />
                                        </div>
                                        <div className="button-box">
                                        <button type="submit">Register</button>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginRegister
