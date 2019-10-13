import React from 'react'
import {Link} from 'react-router-dom'
import { withTranslate } from 'react-redux-multilingual'

function MobileNavMenu(props) {

    const {translate} = props;
    return (
        <nav className="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
                <li className="menu-item-has-children">
                <Link to={process.env.PUBLIC_URL+'/fashion'}>{translate('home')}</Link>
                    <ul className="sub-menu">
                        <li><Link to={process.env.PUBLIC_URL+'/fashion'}>{translate('fashion_home_one')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/fashion-two'}>{translate('fashion_home_two')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/fashion-three'}>{translate('fashion_home_three')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/fashion-four'}>{translate('fashion_home_four')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/fashion-five'}>{translate('fashion_home_five')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/fashion-six'}>{translate('fashion_home_six')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/fashion-seven'}>{translate('fashion_home_seven')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/fashion-eight'}>{translate('fashion_home_eight')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/fashion-nine'}>{translate('fashion_home_nine')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/fashion-ten'}>{translate('fashion_home_ten')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/fashion-eleven'}>{translate('fashion_home_eleven')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/fashion-twelve'}>{translate('fashion_home_twelve')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/fashion-thirteen'}>{translate('fashion_home_thirteen')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/furniture'}>{translate('furniture_home_one')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/furniture-two'}>{translate('furniture_home_two')}</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to={process.env.PUBLIC_URL+'/'}> {translate('pages')} </Link>
                    <ul className="sub-menu">
                        <li><Link to={process.env.PUBLIC_URL+'/about-us'}>{translate('about_us')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/contact-us'} >{translate('contact_us')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/service'} >{translate('our_services')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/team'} >{translate('our_team')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/coming-soon'} >{translate('coming_soon')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/faq'} >{translate('faq')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/404'} >{translate('not_found')}</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>{translate('shop')}</Link>
                    <ul className="sub-menu">
                        <li className="menu-item-has-children">
                        <Link className="menu-title" to={process.env.PUBLIC_URL+'/shop-sidebar'}>{translate('shop_pages')}</Link>
                            <ul className="sub-menu">
                                <li><Link to={process.env.PUBLIC_URL+'/shop-fullwidth'}>{translate('shop_fullwidth')}</Link></li>
                                <li><Link to={process.env.PUBLIC_URL+'/shop-three-column'}>{translate('shop_three_columns')}</Link></li>
                                <li><Link to={process.env.PUBLIC_URL+'/shop-four-column'}>{translate('shop_four_columns')}</Link></li>
                                <li><Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>{translate('shop_sidebar')}</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                        <Link className="menu-title" to={process.env.PUBLIC_URL+'/product-simple-one/1'}>{translate('product_page')}</Link>
                            <ul className="sub-menu">
                                <li><Link to={process.env.PUBLIC_URL+'/product-simple-one/5'}>{translate('product_simple_one')}</Link></li>
                                <li><Link to={process.env.PUBLIC_URL+'/product-simple-two/1'}>{translate('product_simple_two')}</Link></li>
                                <li><Link to={process.env.PUBLIC_URL+'/product-simple-one/1'}>{translate('product_configurable')}</Link></li>
                                <li><Link to={process.env.PUBLIC_URL+'/product-simple-one/4'}>{translate('product_affiliate')}</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                        <Link className="menu-title" to={process.env.PUBLIC_URL+'/'}>{translate('other_page')}</Link>
                            <ul className="sub-menu">
                                <li><Link to={process.env.PUBLIC_URL+'/cart'}>{translate('cart')}</Link></li>
                                <li><Link to={process.env.PUBLIC_URL+'/wishlist'}>{translate('wishlist')}</Link></li>
                                <li><Link to={process.env.PUBLIC_URL+'/compare'}>{translate('compare')}</Link></li>
                                <li><Link to={process.env.PUBLIC_URL+'/checkout'}>{translate('checkout')}</Link></li>
                                <li><Link to={process.env.PUBLIC_URL+'/my-account'}>{translate('my_account')}</Link></li>
                                <li><Link to={process.env.PUBLIC_URL+'/login-register'}>{translate('login_register')}</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><Link to={process.env.PUBLIC_URL+'/shop-four-column'}> {translate('sale')}</Link></li>
                <li className="menu-item-has-children">
                <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}> {translate('lookbook')} </Link>
                    <ul className="sub-menu">
                        <li><Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>Raceva</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>Raceva</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>Raceva</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>Raceva</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                <Link to={process.env.PUBLIC_URL+'/blog-sidebar'}> {translate('blog')}</Link>
                    <ul className="sub-menu">
                        <li><Link to={process.env.PUBLIC_URL+'/blog-classic'}>{translate('blog_classic')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/blog-sidebar'}>{translate('blog_sidebar')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/blog-single-one'}>{translate('blog_single_one')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/blog-single-two'}>{translate('blog_single_two')}</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+'/blog-single-sidebar'}>{translate('blog_single_sidebar')}</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )

}

export default withTranslate(MobileNavMenu)
