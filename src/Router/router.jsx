import { createBrowserRouter } from "react-router";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Navber from "../pages/Navbar"


export const rootRouter = createBrowserRouter([
  {path: "/", element: <Navber/> , children: [
    
      {index:true , path: "/", element: <Home />},
      {path: "/home", element: <Home />},
      {path: "/category", element: <h1>Category</h1> , children: [
        {index:true ,path: "/category/category1", element: <h1>Category 1</h1>},
      ]},
      {path: "/products", element: <Products/> },
    
  ]},
  
]);
