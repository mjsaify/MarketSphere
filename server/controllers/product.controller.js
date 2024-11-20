import ProductModel from '../models/product.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import { ProductZodSchema } from '../utils/_types.js';

export const GetAllProducts = asyncHandler(async (req, res, next) => {
    const products = await ProductModel.find();

    if (!products || products.length < 1) {
        const error = new ApiError(404, "Oops.. Could Not Products Found");
        return next(error);
    };

    return res.status(200).json(new ApiResponse(200, { products }, "All Products"));
});

export const CreateProduct = asyncHandler( async (req, res, next) =>{
    const parsedInputs = ProductZodSchema.safeParse(req.body);
    
    console.log(parsedInputs.error.message)

    return res.status(200).json(new ApiResponse(200, { product:"product" }, "Product Created Successfully"));
});