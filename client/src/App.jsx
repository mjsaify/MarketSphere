import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App