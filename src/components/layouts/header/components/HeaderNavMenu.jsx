import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslate } from 'react-redux-multilingual'

function HeaderNavMenu(props) {
    const {translate} = props;
    return (
        <nav>
            <ul>
                <li><Link to={process.env.PUBLIC_URL}>Home</Link></li>
                <li><Link to={process.env.PUBLIC_URL + '/about-us'}>About Us</Link></li>
                <li className="has-children"><Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>Discover</Link>
                    <div className="dropdown-menu-style dropdown-width-2">
                        <ul>
                            <li>
                                {/* <Link className="menu-title" to={process.env.PUBLIC_URL+'/discover/products'}>{translate('discover')}</Link> */}
                                <ul>
                                    <li><Link to={process.env.PUBLIC_URL+'/discover/products'}>products</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL+'/discover/authors'}>Authors</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><Link to={process.env.PUBLIC_URL + '/contact-us'}>Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default withTranslate(HeaderNavMenu)
