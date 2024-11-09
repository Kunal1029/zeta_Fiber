import './App.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Home from "./components/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plan from './components/Plans/Plan';
import MainAbout from './components/About/MainAbout';
import MainPlan from './components/Plans/MainPlan';
import MainContact from './components/Contact/MainContact';

function App() {
 

  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/plans' element={<Plan />} />
    <Route path='/mainabout' element={<MainAbout />} />
    <Route path='/mainplan' element={<MainPlan />} />
    <Route path='/maincontact' element={<MainContact />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App
