// cart total price
export const getCartTotalPrice = cartProjects => {
    var totalAmount = 0;
    for(let i=0; i < cartProjects.length; i++){
        totalAmount += parseFloat(cartProjects[i].sum);
    }
    return totalAmount;
}

// get products
export const getProducts = (products, category, count, type) => {

    // const items = products.filter(project => {

    //         //get new products
    //         if(type === "new"){
    //             return project.new === true && ( category ? project.category.indexOf(category) !== -1 : true ) ;
    //         }

    //         //get sale products
    //         if(type === "sale"){
    //             return project.discount > 0 && ( category ? project.category.indexOf(category) !== -1 : true ) ;
    //         }

    //         //get rated products
    //         if(type === "rating"){
    //             return project.rating >= 4 && ( category ? project.category.indexOf(category) !== -1 : true ) ;
    //         }
            
    //         // get products
    //         return ( category ? project.category.indexOf(category) !== -1 : true ) ;
     
    // })

    return products.slice(0,count)
}

// calculate discount
export const calculateDiscount = (mainPrice, discount) => {
    mainPrice = Number(mainPrice);
    discount = Number(discount) / 100;
    let discountedPrice = mainPrice - ( mainPrice * discount );
    return discountedPrice;
}

// get unique categories
export const getCategories = (products) => {
    let uniqueCategories = [];
    products.map((project)=>{
        if(project.category){
            project.category.map((category)=>{
                if(uniqueCategories.indexOf(category) === -1){
                    uniqueCategories.push(category);
                }
                return uniqueCategories;
            })
        }
        return project;
    })
    return uniqueCategories;
}

// get unique sizes
export const getSizes = (products) => {
    let uniqueSizes = [];
    products.map((project)=>{
        if(project.sizes){
            project.sizes.map((size)=>{
                if(uniqueSizes.indexOf(size) === -1){
                    uniqueSizes.push(size);
                }
                return uniqueSizes;
            })
        }
        return project;
    })
    return uniqueSizes;
}

// get unique tags
export const getTags = (products) => {
    let uniqueTags = [];
    products.map((project)=>{
        if(project.tags){
            project.tags.map((tag)=>{
                if(uniqueTags.indexOf(tag) === -1){
                    uniqueTags.push(tag);
                }
                return uniqueTags;
            })
        }
        return project;
    })
    return uniqueTags;
}

// get colors
export const getColors = (products) => {
    let uniqueColors = [];
    products.map((project)=>{
        if(project.colors){
            project.colors.map((color)=>{
                if(uniqueColors.indexOf(color) === -1){
                    uniqueColors.push(color);
                }
                return uniqueColors;
            })
        }
        return project;
    })
    return uniqueColors;
}

// get maximum and minimum price
export const getMaxMinPrice = (products) => {
    let min = 10, max = 1000;

    products.map((project) => {
        let v = project.price;
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
        return project;
    })

    return {'min':min, 'max':max};
}

export const getShopProjects = (products, { category, color, size, tag, value, sortBy }) => {

    return products.filter(project => {
        let categoryFilter;
        if(category && project.category) {
            categoryFilter = project.category.includes(category)
        }else{
            categoryFilter = true;
        }

        let colorFilter;
        if(color && project.colors) {
            colorFilter = project.colors.includes(color)
        }else{
            colorFilter = true;
        }

        let sizeFilter;
        if(size && project.sizes) {
            sizeFilter = project.sizes.includes(size)
        }else{
            sizeFilter = true;
        }

        let tagFilter;
        if(tag && project.tags) {
            tagFilter = project.tags.includes(tag)
        }else{
            tagFilter = true;
        }

        const startPriceMatch = typeof value.min !== 'number' || value.min <= project.price;
        const endPriceMatch = typeof value.max !== 'number' || project.price <= value.max;

        return categoryFilter && colorFilter && sizeFilter && tagFilter && startPriceMatch && endPriceMatch;
    }).sort((project1, project2) => {
        if (sortBy === 'priceHighToLow') {
            return project2.price < project1.price ? -1 : 1;
        } else if (sortBy === 'priceLowToHigh') {
            return project2.price > project1.price ? -1 : 1;
        } else if (sortBy === 'nameAscOrder') {
            return project1.name.localeCompare(project2.name);
        } else if (sortBy === 'nameDescOrder') {
            return project2.name.localeCompare(project1.name);
        } else{
            return project2.id > project1.id ? -1 : 1;
        }
    });
}