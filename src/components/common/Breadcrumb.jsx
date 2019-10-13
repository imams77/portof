import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

function Breadcrumb(props) {
    return (
        <div className="breadcrumb-area section-padding-1 border-top-2 border-bottom-2 pt-130 pb-50">
            <div className="container-fluid">
                <div className="breadcrumb-content text-center breadcrumb-center">
                    <h2>{props.title}</h2>
                    <ul>
                        <li><Link to={process.env.PUBLIC_URL+'/'}>Home</Link></li>
                        { props.parent ? <li><Link to={process.env.PUBLIC_URL + props.parentUrl}>{props.parent}</Link></li> : ''}
                        <li>{props.title}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string,
    parent: PropTypes.string
}

export default Breadcrumb