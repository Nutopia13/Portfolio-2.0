import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  return (
    <div>
      <div className="App">
        <header id="navbar" className="w-full">
          <Navbar />
        </header>

        <main>
          <section id="hero" className="hero bg-cover w-full overflow-hidden">
            <Hero />
          </section>
          <section id="about" className="about w-full">
            <About />
          </section>
          <section id="skills">
            <Skills className="skills w-full" />
          </section>
          <section id="portfolio" className="portfolio">
            <Portfolio className="w-full flex justify-center items-center" />
          </section>
          <section id="contact">
            <Contact className="contact w-full flex justify-center items-center" />
          </section>
        </main>

        <footer className="bg-white">
          <Footer className="  w-full flex justify-center items-center" />
        </footer>
      </div>
    </div>
  );
}

export default App;

//Loading Screen

// const [loading, setLoading] = useState(false)

// useEffect(() =>{
//   setLoading(true)
//   setTimeout(() =>{
//     setLoading(false)
//   }, 1500)
// }, [])

//   {loading ? (
//  <PacmanLoader className="loader" size={50} color="#F1D624" loading = {loading}/>)

//   :(
