import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Intro from './components/home/Intro'
import Navbar from './components/navBar/Navbar'
import Proyect from './components/proyects/Proyect'
import Skills from './components/skills/Skills'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Intro></Intro>
    <Skills></Skills>
    <Proyect></Proyect>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
