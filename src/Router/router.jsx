import { createBrowserRouter } from "react-router";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Navber from "../pages/Navbar"
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Test from "../pages/Test";
import { AuthProvider } from "../contexts/authContext";




export const rootRouter = createBrowserRouter([
  {path: "/", element:<AuthProvider><Navber/></AuthProvider>  , children: [
    
      {index:true , path: "/", element: <Home />},
      {path: "/home", element: <Home />},
      {path: "/category", element: <h1>Category</h1> , children: [
        {index:true ,path: "/category/category1", element: <h1>Category 1</h1>},
      ]},
      {path: "/products", element:<Products/>, },
      {path: "/products/cart", element: <Cart/>},
      {path: "/register", element: <Register/>},
       {path: "/login", element: <Login/>},
       {path:"/test", element: <Test/>}
    
  ]},
  
]);
  