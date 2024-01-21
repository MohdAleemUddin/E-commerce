import "./App.css";
import Header from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/pages/login/Login";
import SignIn from "./components/pages/signIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Product from "./components/pages/product/Product";
import Products from "./components/pages/Products/Products";
import About from "./components/pages/about/About";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/products/" element={<Products />} />
            <Route path="/about/" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
