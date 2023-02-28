import Home from "../Pages/Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Project from "./Project";
import Skills from "./Skills";


function Main() {
  return (
    <div className="App">
      
     <Navbar /> 
     <Home/>
    < About/>
    <Project/>
    <Skills/>
    <Contact/>
    <Footer/> 
    </div>
  );
}
export default Main;
