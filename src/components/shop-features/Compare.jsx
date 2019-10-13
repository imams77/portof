import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Breadcrumb from '../common/Breadcrumb'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCompare } from '../../actions'
import { calculateDiscount } from '../../setup'

class Compare extends Component {
    render() {
        const { addToCart, removeFromCompare, compareItems, currencySymbol } = this.props;

        // discounted price added to the array
        for(let i=0; i< compareItems.length; i++){
            let discountedPrice = 0;
            discountedPrice = calculateDiscount(compareItems[i].price, compareItems[i].discount);
            compareItems[i].discountedPrice = discountedPrice.toFixed(2);
        }
        
        // image title
        let compareImageNameDataList = compareItems.map((compareItem, index) => {
            return(
                <td className="product-image-title" key={index}>
                    <div className="compare-remove">
                        <button onClick={() => removeFromCompare(compareItem.id)}><i className="fa fa-times" />remove</button>
                    </div>
                    <Link to={process.env.PUBLIC_URL+'/product-simple-one/'+compareItem.id} className="image">
                        <img className="img-fluid" src={process.env.PUBLIC_URL + compareItem.images[0]} alt="Compare Product" />
                    </Link>
                    <div className="pro-title">
                        <Link to={process.env.PUBLIC_URL+'/product-simple-one/'+compareItem.id}>{compareItem.name}</Link>
                    </div>
                    <div className="compare-btn">
                    {
                        compareItem.stock > 0 ? 
                        <button onClick={()=>addToCart(compareItem, 1)}>Add to cart</button>
                        :
                        <button className="disabled">Add to cart</button>
                    }
                    </div>
                </td>
            )
        });

        // price 
        let priceDataList = compareItems.map((compareItem, index) => {
            return(
                <td className="pro-price" key={index}>{currencySymbol + compareItem.discountedPrice}</td>
            )
        });

        //description
        let descriptionDataList = compareItems.map((compareItem, index)=>{
            return(
                <td className="pro-desc" key={index}>
                    <p>{compareItem.shortDescription ? compareItem.shortDescription : 'N/A' }</p>
                </td>
            )
        });

        //stock
        let stockDataList = compareItems.map((compareItem, index)=>{
            return(
                <td className="pro-stock" key={index}>{compareItem.stock>0 ? <span className="text-success">In Stock</span> : <span className="text-danger">Out of Stock</span> }</td>
            )
        });

        
        //rating
        let ratingList = compareItems.map((compareItem, index)=>{
            
            let RatingStars = [];
            for(var i = 0; i < compareItem.rating; i++) {
                RatingStars.push(<i className="fa fa-star" key={i}></i>)
            }
            return(
                <td className="pro-rating" key={index}>{RatingStars}</td>
            )
        });

        return (
            <div>
                {/* seo content */}
                <Helmet>
                    <title>Negan | Compare</title>
                    <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
                </Helmet>

                {/* breadcrumb */}
                <Breadcrumb title="Compare" />

                {
                    compareItems.length
                    ?
                    <div className="compare-page-wrapper pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* Compare Page Content Start */}
                                    <div className="compare-page-content-wrap">
                                        <div className="compare-table table-responsive">
                                            <table className="table table-bordered mb-0">
                                                <tbody>
                                                    <tr>
                                                        <th className="first-column">Product Info</th>
                                                        {compareImageNameDataList}
                                                    </tr>
                                                    <tr>
                                                        <th className="first-column">Price</th>
                                                        {priceDataList}
                                                    </tr>
                                                    
                                                    <tr>
                                                        <th className="first-column">Description</th>
                                                        {descriptionDataList}
                                                    </tr>
                                                    <tr>
                                                        <th className="first-column">Availability</th>
                                                        {stockDataList}
                                                    </tr>
                                                    <tr>
                                                        <th className="first-column">Rating</th>
                                                        {ratingList}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* Compare Page Content End */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    :
                    
                    <div className="cart-main-area pt-60 pb-60">
                        <div className="container">
                            <div className="cart-empty-content text-center">
                                <i className="negan-icon-switch" />
                                <p>Your Compare Page is currently empty.</p>
                                <div className="empty-btn">
                                    <Link to={process.env.PUBLIC_URL+'/shop-sidebar'}>Return to shop</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                }


            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    compareItems: state.compareData.compareItems,
    currencySymbol: state.productData.currencySymbol
})

Compare.propTypes = {
    addToCart: PropTypes.func,
    removeFromCompare: PropTypes.func,
    compareItems: PropTypes.array,
    currencySymbol: PropTypes.string
}

export default connect( mapStateToProps, {addToCart, removeFromCompare})(Compare)