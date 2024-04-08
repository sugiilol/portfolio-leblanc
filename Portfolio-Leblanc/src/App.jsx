import './App.scss'
import NavBarMobile from './Components/NavBarMobile/NavBarMobile'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './View/HomePage/HomePage'
import Projects from './View/Projects/Projects'
import Cursus from './View/Cursus/Cursus'
import Contact from './View/Contact/Contact'
import Footer from './Components/Footer/Footer'

export default function App() {


  return (
    <>
      <header>
        <nav>
          <NavBarMobile />
          <Navbar />
        </nav>      
      </header>
      <main>
        <section>
          <HomePage />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Cursus />
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

