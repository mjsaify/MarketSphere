/* eslint-disable react/prop-types */
import { Loader } from "./Loader"
import Products from "./Products"


const BestSellingProducts = ({ bestSellingProducts, isLoading }) => {
    return (
        <div className="font-[sans-serif] my-12">
            <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
                    Best Selling
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
                    {
                        isLoading ? <Loader /> : bestSellingProducts.map((product) => (
                            <Products key={product._id} {...product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BestSellingProducts;