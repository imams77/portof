import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Breadcrumb from '../common/Breadcrumb'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { calculateDiscount } from '../../setup'
import { removeFromWishlist, addToCartAndRemoveFromWishlist } from '../../actions'

class Wishlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            stock: true
        };
    }

    
    decQty = () => {
        if(this.state.quantity > 1) {
            this.setState({stock: true})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    incQty = () => {
        if(this.props.productData.stock > this.state.quantity) {
            this.setState({quantity: this.state.quantity+1})
        }else{
            this.setState({stock: false});

        }
    }

    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }


    render() {
        const { wishlistData, currencySymbol, removeFromWishlist, addToCartAndRemoveFromWishlist } = this.props;
        // discounted price added to the array
        for(let i=0; i< wishlistData.length; i++){
            let discountedPrice = 0;
            discountedPrice = calculateDiscount(wishlistData[i].price, wishlistData[i].discount);
            wishlistData[i].discountedPrice = discountedPrice.toFixed(2);
        }

        let wishlistDataList = wishlistData.map((wishlistItem, index) => {
            return(
                <tr key={index}>
                    <td className="product-cart-img">
                    <Link to={process.env.PUBLIC_URL+'/product-simple-one/' + wishlistItem.id}><img src={process.env.PUBLIC_URL + wishlistItem.images[0]} alt="" className="img-fluid" /></Link>
                    </td>
                    <td className="product-cart-name"><Link to={process.env.PUBLIC_URL+'/product-simple-one/'+wishlistItem.id}>{wishlistItem.name}</Link></td>
                    <td className="product-price-cart"><span className="amount">{currencySymbol + wishlistItem.discountedPrice}</span></td>
                    <td className="product-stock">
                        {wishlistItem.stock > 0 ? <span className='text-success'>In Stock</span> : <span className='text-danger'>Out of Stock</span>}
                    </td>
                    {/* <td className="product-total"><span>{currencySymbol + wishlistItem.sum.toFixed(2)}</span></td> */}
                    <td className="product-wish-cart">
                        {wishlistItem.stock > 0 ? <button className="cart-btn mr-10 mb-10" onClick={() => addToCartAndRemoveFromWishlist(wishlistItem, 1)}>add to cart</button> : ""}
                        <button className="remove-btn" onClick={() => removeFromWishlist(wishlistItem.id)}><i className="fa fa-times"></i></button>
                    </td>
                </tr>
            )
        });

        return (
            <div>
                {/* seo content */}
                <Helmet>
                    <title>Negan | Wishlist</title>
                    <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
                </Helmet>

                {/* breadcrumb */}
                <Breadcrumb title="Wishlist" />

                {
                    wishlistData.length
                    ?
                    <div className="cart-main-area pt-60 pb-60">
                        <div className="container">
                        
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="table-content table-responsive cart-table-content">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className="head-img" />
                                            <th className="product-name">Product</th>
                                            <th className="head-price">Price</th>
                                            <th className="head-quality">Stock</th>
                                            <th className="wish-cart">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            { wishlistDataList }
                                        </tbody>
                                    </table>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="cart-main-area pt-60 pb-60">
                        <div className="container">
                            <div className="cart-empty-content text-center">
                                <i className="negan-icon-favourite-28" />
                                <p>Your wishlist is currently empty.</p>
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

function mapStateToProps(state) {
    return {
        wishlistData: state.wishlistData.wishlist,
        currencySymbol: state.productData.currencySymbol
    }
}

Wishlist.propTypes = {
    wishlistData : PropTypes.array,
    currencySymbol : PropTypes.string,
    removeFromWishlist : PropTypes.func,
    addToCartAndRemoveFromWishlist : PropTypes.func
}

export default connect(mapStateToProps, { removeFromWishlist, addToCartAndRemoveFromWishlist })(Wishlist)