import { BrowserRouter, Route, Routes } from "react-router";

import { ContextProvider } from "../Context/useContext";

import HomePage from "./pages/HomePage";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Blog from "./pages/Blog";
import BlogTitle from "./pages/BlogTitle";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogTitle />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
