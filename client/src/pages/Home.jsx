import Hero from "../components/Hero"
import ProductList from "../components/ProductList"
import OfferAndDeals from "../components/OfferAndDeals"
import NewsLetter from "../components/NewsLetter"
import FAQ from "../components/FAQ"


const Home = () => {
    return (
        <div className="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto mt-12">
            <Hero />
            <ProductList title="Featured Products" />
            <OfferAndDeals />
            <ProductList title="Best Selling" />
            <NewsLetter />
            <FAQ />
        </div>
    )
}

export default Home