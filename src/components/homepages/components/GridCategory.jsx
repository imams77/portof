import React from 'react'
import { Link } from 'react-router-dom'

function GridCategory() {

    let categoryGridData = [
        {categoryName: 'NEW DRESS', categoryImage:'/img/products/category-1.jpg', url: '/shop-sidebar'},
        {categoryName: 'T-SHIRT', categoryImage:'/img/products/category-2.jpg', url: '/shop-sidebar'},
        {categoryName: 'SUMMER', categoryImage:'/img/products/category-3.jpg', url: '/shop-sidebar'},
        {categoryName: 'NEW JEANS', categoryImage:'/img/products/category-4.jpg', url: '/shop-sidebar'},
        {categoryName: 'SHOES', categoryImage:'/img/products/category-5.jpg', url: '/shop-sidebar'},
        {categoryName: 'BAGS', categoryImage:'/img/products/category-6.jpg', url: '/shop-sidebar'}
    ]

    let categoryGridDataList = categoryGridData.map((singleItem, index)=>{
        return(
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="category-wrap mb-10">
                    <Link to={process.env.PUBLIC_URL + singleItem.url}><img src={process.env.PUBLIC_URL + singleItem.categoryImage} alt="" /></Link>
                    <div className="category-btn">
                        <Link className=" btn btn-bg-color-white" to={process.env.PUBLIC_URL + singleItem.url}>{singleItem.categoryName}</Link>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="row">
            {categoryGridDataList}
        </div>
    )
}

export default GridCategory