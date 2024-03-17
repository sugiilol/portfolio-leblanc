import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './View/HomePage/HomePage'
import Contact from './View/Contact/Contact'
import Footer from './Components/Footer/Footer'

export default function App() {


  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>      
      </header>
      <main>
        <section>
          <HomePage />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  )
}

