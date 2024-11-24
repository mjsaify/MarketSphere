import ProductModel from '../models/product.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiFeatures from '../utils/ApiFeatures.js';
import { ProductZodSchema } from '../utils/_types.js';


export const GetAllProducts = asyncHandler(async (req, res, next) => {
    const totalProducts = await ProductModel.countDocuments();
    const filter = new ApiFeatures(totalProducts, ProductModel.find(), req.query).partialTextSearch().filter().sort().pagination();
    const products = await filter.queryFunc;

    if (!products || products.length < 1) {
        const error = new ApiError(404, "Oops.. Could Not Find Products");
        return next(error);
    };

    return res.status(200).json(new ApiResponse(200, { totalProducts, length: products.length, products }));
});

export const GetProductDetails = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const product = await ProductModel.findById(id);

    if (!product) {
        const error = new ApiError(404, "Could not find the product you're looking for");
        return next(error);
    };

    return res.status(201).json(new ApiResponse(200, { product }));

});

export const CreateProduct = asyncHandler(async (req, res, next) => {
    const parsedInputs = ProductZodSchema.safeParse(req.body);

    if (!parsedInputs.success) {
        const error = new ApiError(400, "Please provide valid inputs");
        return next(error);
    };

    const product = await ProductModel.create(parsedInputs.data);
    if (!product) {
        const error = new ApiError(400, "Could not create product");
        return next(error);
    }

    return res.status(201).json(new ApiResponse(201, { product }, "Product Created Successfully"));
});


export const UpdateProductDetails = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const product = await ProductModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!product) {
        const error = new ApiError(404, "Product Not Found");
        return next(error);
    };


    return res.status(201).json(new ApiResponse(200, { product }, "Product Details Updated"));
});

export const DeleteProduct = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const product = await ProductModel.findByIdAndDelete(id);

    if (!product) {
        const error = new ApiError(404, "Product Not Found");
        return next(error);
    };


    return res.status(201).json(new ApiResponse(200, {}, `Product with id ${id} deleted`));
});