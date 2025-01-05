/* eslint-disable no-unsafe-optional-chaining */
import { useParams } from "react-router-dom"
import { useGetProductDetailsQuery } from "../api/productsApi";
import { Loader } from "../components/Loader";
import { MessageCircleMore } from 'lucide-react';
import ReactStars from "react-rating-stars-component";


const ProductDetails = () => {
    const { productId } = useParams();
    const { data, isLoading } = useGetProductDetailsQuery(productId);
    const { name, price, category, ratings, description, numberOfReviews } = data?.data.product || {};

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="font-sans px-10 my-20 tracking-wide max-w-7xl max-lg:max-w-2xl max-lg:mx-auto">
            <div>
                <h2 className="text-xl font-bold text-gray-800">
                    {name}
                </h2>
                <p className="text-sm text-gray-500 mt-2 uppercase">{category}</p>
            </div>
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 mt-6">
                <div className="lg:col-span-3">
                    <div className="grid sm:grid-cols-3 gap-2 text-center">
                        <div className="sm:col-span-2 bg-gray-100 p-4 flex items-center rounded">
                            <img
                                src="https://readymadeui.com/images/product14.webp"
                                alt="Product"
                                className="w-full aspect-[5/4] object-contain object-top"
                            />
                        </div>
                        <div className="sm:space-y-2 w-full h-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-2">
                            <div className="bg-gray-100 p-4 flex items-center rounded w-full h-[140px] sm:h-[200px]">
                                <img
                                    src="https://readymadeui.com/images/product12.webp"
                                    alt="Product"
                                    className="w-full max-h-full object-contain object-top"
                                />
                            </div>
                            <div className="bg-gray-100 p-4 flex items-center rounded w-full h-[140px] sm:h-[200px]">
                                <img
                                    src="https://readymadeui.com/images/product9.webp"
                                    alt="Product"
                                    className="w-full max-h-full object-contain object-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:col-span-2">
                    <p className="text-gray-800 text-3xl font-bold">&#8377;{price}</p>
                    <div className="flex items-center space-x-1 mt-2">
                        <ReactStars
                            count={5}
                            size={24}
                            isHalf={true}
                            value={ratings}
                            edit={false}
                            activeColor="#ffd700"
                        />

                        <div className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded flex items-end !ml-4">
                            <MessageCircleMore size={14} className="mr-1"/>
                            {numberOfReviews} Reviews
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-bold text-gray-800">Choose a size</h3>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <button
                                type="button"
                                className="w-12 h-12 border hover:border-primary-blue font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0"
                            >
                                SM
                            </button>
                            <button
                                type="button"
                                className="w-12 h-12 border hover:border-primary-blue border-primary-blue font-semibold text-purple-800 text-sm rounded-full flex items-center justify-center shrink-0"
                            >
                                MD
                            </button>
                            <button
                                type="button"
                                className="w-12 h-12 border hover:border-primary-blue font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0"
                            >
                                LG
                            </button>
                            <button
                                type="button"
                                className="w-12 h-12 border hover:border-primary-blue font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0"
                            >
                                XL
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <button
                            type="button"
                            className="w-full px-4 py-3 bg-primary-blue hover:bg-primary-blue-dark text-white text-sm font-semibold rounded"
                        >
                            Buy now
                        </button>
                        <button
                            type="button"
                            className="w-full px-4 py-2.5 border border-primary-blue bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
                        >
                            Add to cart
                        </button>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-bold text-gray-800">
                            Select Delivery Location
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Enter the pincode of your area to check product availability.
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                            <input
                                type="number"
                                placeholder="Enter pincode"
                                className="bg-white px-4 py-2.5 text-sm w-full border border-gray-300 outline-0 rounded"
                            />
                            <button
                                type="button"
                                className="border border-primary-blue outline-0 bg-primary-blue hover:bg-primary-blue-dark text-white px-4 py-2.5 text-sm rounded"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 max-w-2xl">
                <ul className="flex border-b">
                    <li className="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                        Description
                    </li>
                    <li className="text-gray-600 font-bold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">
                        Reviews
                    </li>
                </ul>
                <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-800">Product Description</h3>
                    <p className="text-sm text-gray-600 mt-4">{description}</p>
                </div>
                <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-600">
                    <li>
                        A pair of gray shoes is a wardrobe essential due to its versatility.
                    </li>
                    <li>
                        Available in a wide range of sizes, from extra small to extra large, and
                        even in tall and petite sizes.
                    </li>
                    <li>
                        Easy to maintain, they can be machine-washed and dried on low heat.
                    </li>
                    <li>
                        Personalize them with your own designs, patterns, or embellishments to
                        make them uniquely yours.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductDetails