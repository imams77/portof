import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

function BreadcrumbTwo(props) {
    return (
        
        <div className="breadcrumb-area section-padding-1 border-top-2 border-bottom-2 pt-60 pb-60 bg-img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + props.image}')`}}>
            <div className="container-fluid">
                <div className="breadcrumb-content breadcrumb-white text-center breadcrumb-center">
                <h2>{props.title}</h2>
                    <ul>
                        <li>
                            <Link to={process.env.PUBLIC_URL+'/'}>Home</Link>
                        </li>
                        { props.parent ? <li><Link to={process.env.PUBLIC_URL + props.parentUrl}>{props.parent}</Link></li> : ''}
                        <li className="active">{props.title}</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

BreadcrumbTwo.propTypes = {
    title: PropTypes.string,
    parent: PropTypes.string
}

export default BreadcrumbTwo