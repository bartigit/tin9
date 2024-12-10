import {BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import ShowProducts from "./components/ShowProducts";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ShowProducts />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
