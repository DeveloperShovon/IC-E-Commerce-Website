import { createBrowserRouter } from "react-router";
import Navbar from "../component/Navbar";
import Home from "../component/Home";
import Products from "../component/Products";

export const rootRouter = createBrowserRouter([
  {path: "/", element: <Navbar /> , children: [
    
      {index:true ,path: "/home", element: <Home />},
      {path: "/category", element: <h1>Category</h1> , children: [
        {index:true ,path: "/category/category1", element: <h1>Category 1</h1>},
      ]},
      {path: "/products", element: <Products/> },
    
  ]},
  
]);
