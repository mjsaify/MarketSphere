/* eslint-disable react/prop-types */
import Products from "./Products";
import { Loader } from '../components/Loader';
import { cn } from "../utils/cn";

const ProductList = ({ title, products, isLoading, className }) => {

    return (
        <div className={cn('font-[sans-serif] my-20 px-10', className)}>
            <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-10">
                    {title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
                    {
                        isLoading ? <Loader /> : products.map((product) => (
                            <Products key={product._id} {...product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
export default ProductList;