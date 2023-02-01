import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Home from './Pages/Home';
import Project from './Components/Project';
// import  Calender  from './Components/Calender';
import TechnicalSkills from './Components/Skills2';
function App() {
  return (
    <div className="App">
     <Navbar /> 
     <Home/>
    <About/>
    <Project/>
    <TechnicalSkills/>
    <Contact/>
    <Footer/> 
    </div>
  );
}
export default App;
