import React, {Component} from 'react'
import './assets/scss/style.scss'

import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ScrollToTop from './setup/ScrollToTop'
import { IntlProvider } from 'react-redux-multilingual'
import { getAllProducts } from './actions/index'

// Custom components
import store from './store'
import translations from './constants/translations'
import Layout from './components/layouts/Layout'

// Pages
import Home from './components/homepages'

// Shop pages
import ShopFullwidth from './components/shop/ShopFullwidth'
import ShopThreeColumn from './components/shop/ShopThreeColumn'
import ShopFourColumn from './components/shop/ShopFourColumn'
import ShopSidebar from './components/shop/ShopSidebar'

// Product details pages
import ProductSimpleOne from './components/product-details/ProductSimpleOne'
import ProductSimpleTwo from './components/product-details/ProductSimpleTwo'

// shop features
import Cart from './components/shop-features/Cart'
import Checkout from './components/shop-features/Checkout'
import Wishlist from './components/shop-features/Wishlist'
import Compare from './components/shop-features/Compare'

// Other pages
import AboutUs from './components/other-pages/AboutUs'
import ContactUs from './components/other-pages/ContactUs'
import Faq from './components/other-pages/Faq'
import LoginRegister from './components/other-pages/LoginRegister'
import MyAccount from './components/other-pages/MyAccount'
import Service from './components/other-pages/Service'
import ComingSoon from './components/other-pages/ComingSoon'
import Team from './components/other-pages/Team'
import NotFound from './components/other-pages/NotFound'

// Blog pages
import BlogClassic from './components/blog/BlogClassic'
import BlogSidebar from './components/blog/BlogSidebar'
import BlogSingleOne from './components/blog/BlogSingleOne'
import BlogSingleTwo from './components/blog/BlogSingleTwo'
import BlogSingleSidebar from './components/blog/BlogSingleSidebar'

class App extends Component {
    render() {
        store.dispatch(getAllProducts());
        return (
            <Provider store={store}>
                <IntlProvider translations={translations} locale='en'>    
                    <BrowserRouter basename={'/'}>
                        <ScrollToTop>
                            <Switch>
                                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
                                {/* Homepages */}
                                {/* <Route path={`${process.env.PUBLIC_URL}/fashion`} component={FashionHome} />
                                <Route path={`${process.env.PUBLIC_URL}/fashion-two`} component={FashionTwoHome} />
                                <Route path={`${process.env.PUBLIC_URL}/fashion-three`} component={FashionThreeHome} />
                                <Route path={`${process.env.PUBLIC_URL}/fashion-four`} component={FashionFourHome} />
                                <Route path={`${process.env.PUBLIC_URL}/fashion-five`} component={FashionFiveHome} />
                                <Route path={`${process.env.PUBLIC_URL}/fashion-six`} component={FashionSixHome} />
                                <Route path={`${process.env.PUBLIC_URL}/fashion-seven`} component={FashionSevenHome} />
                                <Route path={`${process.env.PUBLIC_URL}/fashion-eight`} component={FashionEightHome} />
                                <Route path={`${process.env.PUBLIC_URL}/fashion-nine`} component={FashionNineHome} />
                                <Route path={`${process.env.PUBLIC_URL}/fashion-ten`} component={FashionTenHome} />
                                <Route path={`${process.env.PUBLIC_URL}/fashion-eleven`} component={FashionElevenHome} />
                                <Route path={`${process.env.PUBLIC_URL}/fashion-twelve`} component={FashionTwelveHome} />
                                <Route path={`${process.env.PUBLIC_URL}/fashion-thirteen`} component={FashionThirteenHome} />
                                <Route path={`${process.env.PUBLIC_URL}/furniture`} component={FurnitureHome} />
                                <Route path={`${process.env.PUBLIC_URL}/furniture-two`} component={FurnitureTwoHome} /> */}
                                <Layout>
                                    <Switch>

                                        {/* Shop pages */}
                                        <Route path={`${process.env.PUBLIC_URL}/shop-fullwidth`} component={ShopFullwidth} />
                                        <Route path={`${process.env.PUBLIC_URL}/shop-three-column`} component={ShopThreeColumn} />
                                        <Route path={`${process.env.PUBLIC_URL}/shop-four-column`} component={ShopFourColumn} />
                                        <Route path={`${process.env.PUBLIC_URL}/shop-sidebar`} component={ShopSidebar} />

                                        {/* Product details pages */}
                                        <Route path={`${process.env.PUBLIC_URL}/product/:id`} component={ProductSimpleOne} />
                                        <Route path={`${process.env.PUBLIC_URL}/product-simple-two/:id`} component={ProductSimpleTwo} />

                                        {/* Shop feature pages */}
                                        <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart} />
                                        <Route path={`${process.env.PUBLIC_URL}/checkout`} component={Checkout} />
                                        <Route path={`${process.env.PUBLIC_URL}/wishlist`} component={Wishlist} />
                                        <Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare} />

                                        {/* Other pages */}
                                        <Route path={`${process.env.PUBLIC_URL}/about-us`} component={AboutUs} />
                                        <Route path={`${process.env.PUBLIC_URL}/contact-us`} component={ContactUs} />
                                        <Route path={`${process.env.PUBLIC_URL}/faq`} component={Faq} />
                                        <Route path={`${process.env.PUBLIC_URL}/login-register`} component={LoginRegister} />
                                        <Route path={`${process.env.PUBLIC_URL}/my-account`} component={MyAccount} />
                                        <Route path={`${process.env.PUBLIC_URL}/service`} component={Service} />
                                        <Route path={`${process.env.PUBLIC_URL}/coming-soon`} component={ComingSoon} />
                                        <Route path={`${process.env.PUBLIC_URL}/team`} component={Team} />
                                        <Route path={`${process.env.PUBLIC_URL}/404`} component={NotFound} />

                                        {/* Blog pages */}
                                        <Route path={`${process.env.PUBLIC_URL}/blog-classic`} component={BlogClassic} />
                                        <Route path={`${process.env.PUBLIC_URL}/blog-sidebar`} component={BlogSidebar} />
                                        <Route path={`${process.env.PUBLIC_URL}/blog-single-one`} component={BlogSingleOne} />
                                        <Route path={`${process.env.PUBLIC_URL}/blog-single-two`} component={BlogSingleTwo} />
                                        <Route path={`${process.env.PUBLIC_URL}/blog-single-sidebar`} component={BlogSingleSidebar} />

                                        <Route exact component={NotFound} />
                                    </Switch>
                                </Layout>
                            </Switch>
                        </ScrollToTop>
                    </BrowserRouter>
                </IntlProvider>
            </Provider>
        )
    }
}

export default App