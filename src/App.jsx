import About from "./Components/About"
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Portfolio from './Components/Portfolio'
import Skills from './Components/Skills'


function App() {

  return (
    <div className="App z-0">
      <header id='navbar' className='w-full'>
        <Navbar />
      </header>

      <main>
        <section  id='hero' className="hero bg-cover w-full overflow-hidden">
          <Hero />
        </section>
        <section   id='about' className ='about w-full'>
          <About  />
        </section>
        <section id='skills'>
          <Skills className='skills w-full' />
        </section>
        <section id='portfolio' className="portfolio">
          <Portfolio  className = 'w-full flex justify-center items-center'/>
        </section>
        <section id='contact' >
          <Contact className = 'contact w-full flex justify-center items-center' />
        </section>
      </main>
      
      <footer>
         <Footer className = 'w-full flex justify-center items-center' />
      </footer>
      
    </div>
  )
}

export default App
