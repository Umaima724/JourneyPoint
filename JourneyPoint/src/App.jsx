import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Main Website */}
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        }
      />

      <Route
        path="/tours"
        element={
          <>
            <Navbar />
            <Tours />
            <Footer />
          </>
        }
      />

      <Route
        path="/gallery"
        element={
          <>
            <Navbar />
            <Gallery />
            <Footer />
          </>
        }
      />

      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;