import Home from "./components/Home";
import About from "./components/about";
import ClassComp from "./components/ClassComp";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import UseEffectAPI from "./components/Hooks/UseEffectAPI";
import Navbar from "./components/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import UseEffect from "./components/Hooks/UseEffect";
import Signup from "./components/Signup";
import UseRef from "./components/Hooks/UseRef";
import UseMemo from "./components/Hooks/UseMemo";
import UseCallback from "./components/Hooks/UseCallback";
import ReactLifecycleMethods from "./components/ReactLifecycleMethods";
import UseContext from "./components/Hooks/Student";
import Student from "./components/Hooks/Student";
import UpdateText from "../Memoization/UpdateText";
import UpdateNumber from "../Memoization/UpdateNumber";
import Button from "./components/HOC.jsx/Button";
import trackingButtonComponent from "./components/HOC.jsx/TrackingButtonComponent";
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
          <Route path="/UseEffect" element={<UseEffect />}></Route>
          <Route path="/use-api" element={<UseEffectAPI/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/use-ref" element={<UseRef/>}></Route>
          <Route path="/use-memo" element={<UseMemo/>}></Route>
          <Route path="/use-call" element={<UseCallback/>}></Route>
          <Route path="/use-context" element={<UseContext/>}></Route>
          <Route path="/student" element={<Student/>}></Route>
          <Route path="/react-lifecycle-methods" element={<ReactLifecycleMethods/>}></Route>
          <Route path="/update-number" element={<UpdateNumber/>}></Route>
          <Route path="/update-text" element={<UpdateText/>}></Route>
          <Route path="/button" element={<Button/>}></Route>
          <Route path="/tracking-button" element={<trackingButtonComponent/>}></Route>


        </Routes>
      </section>

    </BrowserRouter>

  );
}

export default App;