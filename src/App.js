import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Experiences from './components/Experiences'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <About />
      <Experiences />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}