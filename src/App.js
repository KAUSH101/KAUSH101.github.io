
import './App.css';
import Home  from './Pages/Home';
import Navbar from './Components/Navbar';
import SplitScreen from './Components/About';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <SplitScreen/>
    </div>
  );
}

export default App;
