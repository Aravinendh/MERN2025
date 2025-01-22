import Home from "./components/Home";
import About from "./components/about";
import ClassCompEG from "./components/classComp";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
    
      <Navbar/>
      <section>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/Gallery' element={<Gallery page="Gallery" img="SECE Logo" />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      
      
        <ClassCompEG />
      
    
    </section>
    </BrowserRouter>

  );
}

export default App;