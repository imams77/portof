import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCategories, getSizes, getProducts, getColors, getTags } from '../../../setup'
import {filterCategory, filterColor, filterTag, filterSize, filterSort} from '../../../actions'

class ShopTopFilter extends Component {
    
    triggerProjectFilter(){
        document.getElementById('product-filter-trigger').classList.toggle('active');
        let projectFilterWrapper = document.getElementById('product-filter-wrapper-wrapper');
        projectFilterWrapper.classList.toggle('active');
        if (projectFilterWrapper.style.height){
            projectFilterWrapper.style.height = null;
          } else {
            projectFilterWrapper.style.height = projectFilterWrapper.scrollHeight + "px";
        }
    }

    triggerGridView = (e) => {
        let projectRowWrap = document.getElementById('product-area-wrap');
        let children = document.querySelectorAll('#shop-tab button');
        
        children.forEach(function(elem) {
            elem.classList.remove("active");
        });
        e.currentTarget.classList.add('active');
        projectRowWrap.classList.remove('grid-view-row', 'list-view-row');
        projectRowWrap.classList.add('grid-view-row');
    }

    triggerListView = (e) => {
        let projectRowWrap = document.getElementById('product-area-wrap');
        let children = document.querySelectorAll('#shop-tab button');
        children.forEach(function(elem) {
            elem.classList.remove("active");
        });
        e.currentTarget.classList.add('active');
        projectRowWrap.classList.remove('grid-view-row', 'list-view-row');
        projectRowWrap.classList.add('list-view-row');
    }

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

    handleSort = (e, sortName) => {
        let sidebarList = document.querySelectorAll('.sort-by li button');
        sidebarList.forEach(function(elem) {
            elem.classList.remove("active");
        });
        e.currentTarget.classList.add('active');
        this.props.filterSort(sortName);
    }

    render() {
        const { categories, sizes, tags, colors, dynamicProductLength } = this.props;

        return (
            <div>
                <div className="shop-top-bar shop-top-bar-flex mb-40">
                    <div className="shop-topbar-left">
                        <p>Showing {dynamicProductLength} of {this.props.productData.length} results</p>
                    </div>
                    <div className="shop-topbar-right shop-tab-flex">
                        <div className="filter-active">
                            <button id="product-filter-trigger" onClick={() => this.triggerProjectFilter()}>filter</button>
                        </div>
                        <div className="shop-tab" id="shop-tab">
                            <button className="active" onClick={e => {this.triggerGridView(e)}}>
                                <i className="fa fa-table" />
                            </button>
                            <button onClick={e => this.triggerListView(e)}>
                                <i className="fa fa-list-ul" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product-filter-wrapper-wrapper" id="product-filter-wrapper-wrapper">
                    <div className="product-filter-wrapper" id="product-filter-wrapper">
                        <div className="row">
                            {/* Product Filter */}
                            <div className="custom-col-5 mb-30">
                                <div className="product-sort">
                                    <div className="single-filter-title">
                                        <h5>Sort By</h5>
                                    </div>
                                    <ul className="sort-by">
                                        <li><button onClick={(e) => this.handleSort(e, '')}>Default sorting</button></li>
                                        <li><button onClick={(e) => this.handleSort(e, 'priceHighToLow')}>Sort by price: high to low</button></li>
                                        <li><button onClick={(e) => this.handleSort(e, 'priceLowToHigh')}>Sort by price: low to high</button></li>
                                        <li><button onClick={(e) => this.handleSort(e, 'nameAscOrder')}>Sort by Name: ASC to DESC</button></li>
                                        <li><button onClick={(e) => this.handleSort(e, 'nameDescOrder')}>Sort by Name: DESC to ASC</button></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Product Filter */}
                            <div className="custom-col-5 mb-30">
                                <div className="product-price-filter">
                                <div className="single-filter-title">
                                    <h5>Category</h5>
                                </div>
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
                            {/* Product Filter */}
                            <div className="custom-col-5 mb-30">
                                <div className="product-size">
                                <div className="single-filter-title">
                                    <h5>Sizes</h5>
                                </div>
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
                                </div>
                            </div>
                            {/* Product Filter */}
                            <div className="custom-col-5 mb-30">
                                <div className="product-color">
                                <div className="single-filter-title">
                                    <h5>Color</h5>
                                </div>
                                {
                                    colors ?
                                    <ul className="color-list">
                                        {
                                            colors.map((color, index)=>{
                                                return(
                                                    <li key={index}><button onClick={(e)=>this.handleColor(e, color)}><span title={color} className={`swatch-anchor ${color}`}>{color}</span><span className="color-text">{color}</span></button></li>
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
                            {/* Product Filter */}
                            <div className="custom-col-5 mb-30">
                                <div className="product-tag">
                                    <div className="single-filter-title">
                                        <h5>Tags</h5>
                                    </div>
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
    productData: getProducts(state.productData.products),
    filters: state.filterData
})

export default connect(mapStateToProps, { filterCategory, filterColor, filterSize, filterTag, filterSort } )(ShopTopFilter)