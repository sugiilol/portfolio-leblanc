import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './View/HomePage/HomePage'

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
      </main>
    </>

  )
}

