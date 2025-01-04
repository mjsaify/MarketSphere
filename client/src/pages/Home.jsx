import Hero from "../components/Hero"
import OfferAndDeals from "../components/OfferAndDeals"
import NewsLetter from "../components/NewsLetter"
import FAQ from "../components/FAQ"
import { useGetProductsHomeQuery } from "../api/productsApi"
import BestSellingProducts from "../components/BestSellingProducts"
import FeaturedProducts from "../components/FeaturedProducts"


const Home = () => {
    const { data, isLoading } = useGetProductsHomeQuery();

    return (
        <div className="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto mt-12">
            <Hero />
            <FeaturedProducts featuredProducts={data?.data.featuredProducts} isLoading={isLoading} />
            <OfferAndDeals />
            <BestSellingProducts bestSellingProducts={data?.data.bestSellingProducts} isLoading={isLoading} />
            <NewsLetter />
            <FAQ />
        </div>
    )
}

export default Home