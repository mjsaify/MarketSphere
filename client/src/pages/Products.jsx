import { useGetAllProductsQuery } from "../api/productsApi";
import DropDown from "../components/DropDown";
import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

const Products = () => {
    const { data, isLoading } = useGetAllProductsQuery();

    return (
        <div>
            <div className="px-10 mt-10 flex justify-between">
                <Search/>
                <DropDown/>
            </div>
            <ProductList products={data?.data.products} isLoading={isLoading} className="px-10 my-0" />
            <Pagination/>
        </div>
    );
};
export default Products