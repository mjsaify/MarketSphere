import ApiError from "./ApiError.js";

class ApiFeatures {
    constructor(totalProducts, queryFunc, queryStr) {
        this.totalProducts = totalProducts;
        this.queryFunc = queryFunc;
        this.queryStr = queryStr;
    };

    partialTextSearch() {
        const search = this.queryStr.search ? {
            name: {
                $regex: this.queryStr.search,
                $options: 'i'
            }
        } : {};
        this.queryFunc = this.queryFunc.find(search);
        return this;
    };

    filter() {
        // Create a deep copy of queryStr to manipulate it
        // If you modify this.queryStr directly, it can cause unintended side effects elsewhere in your application, especially if queryStr is reused or passed by reference from another part of the code. A copy ensures that any changes are isolated to the filtering logic
        let queryString = { ...this.queryStr };

        // Fields to remove from the query object
        const removeFields = ["search", "page", "limit", "sort"];

        // Remove unwanted fields
        removeFields.forEach((key) => delete queryString[key]);

        // Convert the remaining query object into a JSON string
        queryString = JSON.stringify(queryString);

        // Add `$` to operators like gte, gt, lte, lt
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`); // add '$'

        // Parse the query string back into an object and apply it to the query
        this.queryFunc = this.queryFunc.find(JSON.parse(queryString));
        return this;
    };

    sort() {
        if (this.queryStr.sort) {
            const sortBy = this.queryStr.sort.split(",").join(" ");
            this.queryFunc = this.queryFunc.sort(sortBy);
        };
        return this;
    };

    pagination() {
        const page = Number(this.queryStr.page) || 1;
        const limit = 10; // 10 products per page
        const skip = limit * (page - 1);
        this.queryFunc = this.queryFunc.skip(skip).limit(limit);
        
        // handle page exceeding error
        if(skip >= this.totalProducts){
            throw new ApiError(404, "Page Not Found");
        };
        return this;
    };

};
export default ApiFeatures;