import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Menu />
          <About />
          <Contact />
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  )
}

export default App
