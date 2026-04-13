import {  Routes, Route, Outlet } from "react-router";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Navber from "../pages/Navbar"
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Test from "../pages/Test";
import ContextChecker from "../pages/ContextChecker";
import AddProduct from "../pages/AddProduct";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navber/>}>
        <Route index element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="category" element={<h1>Category</h1>}>
          <Route index path="category1" element={<h1>Category 1</h1>}/>
        </Route>
        <Route path="products" element={<Products/>}/>
        <Route path="products/cart" element={<Cart/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="test" element={<Test/>}/>
        <Route path="/checker" element={<ContextChecker/>}/>
      </Route>
      <Route path="add-product" element={<AddProduct/>}/>
    </Routes>
  )
}
