import { useGetAllProductsQuery } from "../api/productsApi";
import DropDown from "../components/DropDown";
import { Loader } from "../components/Loader";
import Pagination from "../components/Pagination";
import Products from "../components/Products";
import Search from "../components/Search";

const ProductsPage = () => {
    const { data, isLoading } = useGetAllProductsQuery();

    return (
        <div className="my-12 px-10 max-sm:px-4">
            <div className="flex justify-between items-center">
                <Search />
                <DropDown />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 my-14">
                {
                    isLoading ? <Loader /> : data?.data.products.map((product) => (
                        <Products key={product._id} {...product} />
                    ))
                }
            </div>
            <Pagination />
        </div>
    );
};
export default ProductsPage