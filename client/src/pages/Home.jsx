import Hero from "../components/Hero"
import OfferAndDeals from "../components/OfferAndDeals"
import NewsLetter from "../components/NewsLetter"
import FAQ from "../components/FAQ"
import ProductList from "../components/ProductList"
import { useGetProductsHomeQuery } from "../api/productsApi"


const Home = () => {
    const { data, isLoading } = useGetProductsHomeQuery();

    return (
        <div className="font-[sans-serif] px-10 mt-12 w-full">
            <Hero />
            <ProductList title="Featured Products" products={data?.data.featuredProducts} isLoading={isLoading} />
            <OfferAndDeals />
            <ProductList title="Best Selling" products={data?.data.bestSellingProducts} isLoading={isLoading} />
            <NewsLetter />
            <FAQ />
        </div>
    );
};
export default Home