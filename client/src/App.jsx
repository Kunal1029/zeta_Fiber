import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./components/Service";
import Price from "./components/Price";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound";
import UserName from "./components/UserCredential/UserName";
import Register from "./components/UserCredential/Register";
import Password from "./components/UserCredential/Password";
import Profile from "./components/UserCredential/Profile";
import Recovery from "./components/UserCredential/Recovery";
import Reset from "./components/UserCredential/Reset";
import 'animate.css';

// auth middleware
import { AuthorizeUser , ProtectRoute} from "./middleware/auth";
import Header from "./components/Header/Header";
// import ResponsiveAppBar from "./components/Header/ResponsiveAppBar";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <BrowserRouter>
    <Header />
    {/* <ResponsiveAppBar  /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/price" element={<Price />} />
        <Route path="/card" element={<Cards />} />

        {/* user credential */}
        <Route path='/login' element={<UserName />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/password' element={<Password/>} /> */}
        <Route path='/password' element={<ProtectRoute><Password/></ProtectRoute>} />
        <Route path='/profile' element={<AuthorizeUser><Profile/></AuthorizeUser>} />
        {/* <Route path='/profile' element={<Profile/>} /> */}
        <Route path='/recovery' element={<Recovery />} />
        <Route path='/reset' element={<Reset />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
