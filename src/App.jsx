import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./landing/pages/Landing";
import Home from "./landing/pages/Home";
import Services from "./landing/pages/Services";
import About from "./landing/pages/About";
import Contact from "./landing/pages/Contact";
import ScrollToTop from "./landing/components/ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Landing />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
