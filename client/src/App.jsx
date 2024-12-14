import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Products from "./components/Products"
import OfferAndDeals from "./components/OfferAndDeals"
import NewsLetter from "./components/NewsLetter"
import FAQ from "./components/FAQ"


const App = () => {
  return (
    <>
      <Header />
      <Hero>
        <Products title="Featured Products" />
        <OfferAndDeals />
        <Products title="Best Selling" />
        <NewsLetter />
        <FAQ />
      </Hero>
      <Footer />
    </>
  )
}

export default App