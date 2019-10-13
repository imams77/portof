import React from 'react'
import Helmet from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'

import Breadcrumb from '../common/Breadcrumb'

function MyAccount(){
    return (
        <div>
            {/* seo content */}
            <Helmet>
                <title>Negan | My Account</title>
                <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
            </Helmet>

            {/* breadcrumb */}
            <Breadcrumb title="My Account" />

            <div className="my-account-area pt-70 pb-90">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-12">
                            <div className="row">
                            <div className="col-lg-12 col-md-12">
                            <Tabs>
                                <TabList className="myaccount-tab-menu nav mb-30">
                                    <Tab>Dashboard</Tab>
                                    <Tab>Orders</Tab>
                                    <Tab>Download</Tab>
                                    <Tab>Payment Method</Tab>
                                    <Tab>Address</Tab>
                                    <Tab>Account Details</Tab>
                                    <Link to={process.env.PUBLIC_URL + 'login-register'}>Logout</Link>
                                </TabList>
                                
                                <TabPanel>
                                    <div className="myaccount-content">
                                        <h3>Dashboard</h3>
                                        <div className="welcome">
                                            <p>Hello, <strong>Alex John</strong> (If Not <strong>John !</strong><Link to={process.env.PUBLIC_URL + '/login-register'} className="logout"> Logout</Link>)</p>
                                        </div>
                                        <p className="mb-0">From your account dashboard. you can easily check &amp; view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <div className="myaccount-content">
                                    <h3>Orders</h3>
                                    <div className="myaccount-table table-responsive text-center">
                                        <table className="table table-bordered">
                                            <thead className="thead-light">
                                                <tr>
                                                <th>Order</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Total</th>
                                                <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Aug 22, 2018</td>
                                                    <td>Pending</td>
                                                    <td>$3000</td>
                                                    <td><Link to={process.env.PUBLIC_URL+'/cart'} className="check-btn sqr-btn ">View</Link></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>July 22, 2018</td>
                                                    <td>Approved</td>
                                                    <td>$200</td>
                                                    <td><Link to={process.env.PUBLIC_URL+'/cart'} className="check-btn sqr-btn ">View</Link></td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>June 12, 2017</td>
                                                    <td>On Hold</td>
                                                    <td>$990</td>
                                                    <td><Link to={process.env.PUBLIC_URL+'/cart'} className="check-btn sqr-btn ">View</Link></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <div className="myaccount-content">
                                    <h3>Downloads</h3>
                                    <div className="myaccount-table table-responsive text-center">
                                        <table className="table table-bordered">
                                            <thead className="thead-light">
                                                <tr>
                                                <th>Product</th>
                                                <th>Date</th>
                                                <th>Expire</th>
                                                <th>Download</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Haven - Free Real Estate PSD Template</td>
                                                    <td>Aug 22, 2019</td>
                                                    <td>Yes</td>
                                                    <td><button className="check-btn sqr-btn "><i className="fa fa-cloud-download" /> Download File</button></td>
                                                </tr>
                                                <tr>
                                                    <td>HasTech - Profolio Business Template</td>
                                                    <td>Sep 12, 2019</td>
                                                    <td>Never</td>
                                                    <td><button className="check-btn sqr-btn "><i className="fa fa-cloud-download" /> Download File</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="myaccount-content">
                                        <h3>Payment Method</h3>
                                        <p className="saved-message">You Can't Saved Your Payment Method yet.</p>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="myaccount-content">
                                    <h3>Billing Address</h3>
                                        <address>
                                            <p><strong>Alex Tuntuni</strong></p>
                                            <p>1355 Market St, Suite 900 <br />
                                            San Francisco, CA 94103</p>
                                            <p>Mobile: (123) 456-7890</p>
                                        </address>
                                        <a href="/#" className="check-btn sqr-btn "><i className="fa fa-edit" /> Edit Address</a>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <div className="myaccount-content">
                                    <h3>Account Details</h3>
                                    <div className="account-details-form">
                                        <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6">
                                            <div className="single-input-item">
                                                <label htmlFor="first-name" className="required">First Name</label>
                                                <input type="text" id="first-name" />
                                            </div>
                                            </div>
                                            <div className="col-lg-6">
                                            <div className="single-input-item">
                                                <label htmlFor="last-name" className="required">Last Name</label>
                                                <input type="text" id="last-name" />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="single-input-item">
                                            <label htmlFor="display-name" className="required">Display Name</label>
                                            <input type="text" id="display-name" />
                                        </div>
                                        <div className="single-input-item">
                                            <label htmlFor="email" className="required">Email Addres</label>
                                            <input type="email" id="email" />
                                        </div>
                                        <fieldset>
                                            <legend>Password change</legend>
                                            <div className="single-input-item">
                                            <label htmlFor="current-pwd" className="required">Current Password</label>
                                            <input type="password" id="current-pwd" />
                                            </div>
                                            <div className="row">
                                            <div className="col-lg-6">
                                                <div className="single-input-item">
                                                <label htmlFor="new-pwd" className="required">New Password</label>
                                                <input type="password" id="new-pwd" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single-input-item">
                                                <label htmlFor="confirm-pwd" className="required">Confirm Password</label>
                                                <input type="password" id="confirm-pwd" />
                                                </div>
                                            </div>
                                            </div>
                                        </fieldset>
                                        <div className="single-input-item">
                                            <button className="check-btn sqr-btn ">Save Changes</button>
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
        </div>
    )
}

export default MyAccount