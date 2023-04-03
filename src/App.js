
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-porto text-white">
      <Navbar/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
