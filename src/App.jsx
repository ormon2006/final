import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Stock from "./pages/Stock";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogTwo from "./pages/BlogTWO";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/blogtwo" element={<BlogTwo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;