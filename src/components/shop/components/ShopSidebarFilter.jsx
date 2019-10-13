import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputRange from 'react-input-range'

import { getCategories, getSizes, getColors, getTags, getMaxMinPrice } from '../../../setup'
import {filterCategory, filterColor, filterTag, filterSize, filterPrice} from '../../../actions'

class ShopSidebarFilter extends Component {

    handleCategory = (e, category) => {
        let sidebarList = document.querySelectorAll('.category-list li button');
        sidebarList.forEach(function(elem) {
            elem.classList.remove("active");
        });
        e.currentTarget.classList.add('active');
        this.props.filterCategory(category);
    }

    handleColor = (e, color) => {
        let sidebarList = document.querySelectorAll('.color-list li button');
        sidebarList.forEach(function(elem) {
            elem.classList.remove("active");
        });
        e.currentTarget.classList.add('active');
        this.props.filterColor(color);
    }

    handleSize = (e, size) => {
        let sidebarList = document.querySelectorAll('.size-list li button');
        sidebarList.forEach(function(elem) {
            elem.classList.remove("active");
        });
        e.currentTarget.classList.add('active');
        this.props.filterSize(size);
    }

    handleTag = (e, tag) => {
        let sidebarList = document.querySelectorAll('.tag-list li button');
        sidebarList.forEach(function(elem) {
            elem.classList.remove("active");
        });
        e.currentTarget.classList.add('active');
        this.props.filterTag(tag);
    }

    render() {
        const { categories, sizes, tags, colors } = this.props;
        return (
            <div className="shop-sidebar">
                <div className="sidebar-widget sidebar-border pb-45">
                    <h4 className="pro-sidebar-title">Categories </h4>
                    <div className="sidebar-widget-list mt-30">
                            {
                                categories ?
                                <ul className="category-list">
                                    <li> <button onClick={(e) => this.handleCategory(e, '') }>All</button> </li>
                                    {
                                        categories.map((category, index)=>{
                                            return(
                                                <li key={index}><button onClick={(e)=>this.handleCategory(e, category)}>{category}</button></li>
                                            )
                                        }) 
                                    }
                                </ul>
                                :
                                'No categories found'
                            }
                    </div>
                </div>
                <div className="sidebar-widget mt-40 sidebar-border pb-40">
                    <h4 className="pro-sidebar-title">Colors </h4>
                    <div className="sidebar-widget-color mt-15">
                        {
                            colors ?
                            <ul className="color-list">
                                {
                                    colors.map((color, index)=>{
                                        return(
                                            <li title={color} key={index}><button  className={`swatch-anchor2 ${color}`} onClick={(e)=>this.handleColor(e, color)}>{color}</button></li>
                                        )
                                    }) 
                                }
                                <li title="reset" className="reset"><button  onClick={(e)=>this.handleColor(e, '')}>x</button></li>
                            </ul>
                            :
                            'No colors found'
                        }
                    </div>
                </div>

                <div className="sidebar-widget mt-40 sidebar-border pb-45">
                    <h4 className="pro-sidebar-title">Price </h4>
                    <div className="price-filter mt-30">
                    <InputRange
                        maxValue= {this.props.prices.max}
                        minValue= {this.props.prices.min}
                        value={this.props.filters.value}
                        onChange={value => this.props.filterPrice({ value })}
                    />
                    </div>
                </div>

                <div className="sidebar-widget mt-40 sidebar-border pb-40">
                    <h4 className="pro-sidebar-title">Sizes </h4>
                    <div className="sidebar-widget-size mt-30">
                        <ul>
                            {
                                sizes ?
                                <ul className="size-list">
                                    <li> <button onClick={(e) => this.handleSize(e, "") }>All</button> </li>
                                    {
                                        sizes.map((size, index)=>{
                                            return(
                                                <li key={index}><button onClick={(e)=>this.handleSize(e, size)}>{size}</button></li>
                                            )
                                        }) 
                                    }
                                </ul>
                                :
                                'No size found'
                            }
                        </ul>
                    </div>
                </div>

                <div className="sidebar-widget mt-40">
                    <h4 className="pro-sidebar-title">Tags </h4>
                    <div className="sidebar-widget-tags mt-25">
                        {
                            tags ?
                            <ul className="tag-list">
                                <li> <button onClick={(e) => this.handleTag(e, "") }>All</button> </li>
                                {
                                    tags.map((tag, index)=>{
                                        return(
                                            <li key={index}><button onClick={(e)=>this.handleTag(e, tag)}>{tag}</button></li>
                                        )
                                    }) 
                                }
                            </ul>
                            :
                            'No tag found'
                        }
                    </div>
                </div>
                
            </div>
        )
    }
}


const mapStateToProps = state => ({
    categories: getCategories(state.productData.products),
    sizes: getSizes(state.productData.products),
    colors: getColors(state.productData.products),
    tags: getTags(state.productData.products),
    prices: getMaxMinPrice(state.productData.products),
    filters: state.filterData
})

export default connect(mapStateToProps, { filterCategory, filterColor, filterSize, filterPrice, filterTag } )(ShopSidebarFilter)