import { createBrowserRouter } from "react-router";
import Navbar from "../component/Navbar";
import Home from "../component/Home";

export const rootRouter = createBrowserRouter([
  {path: "/", element: <Navbar /> , children: [
    
      {index:true ,path: "/home", element: <Home />},
      {path: "/about", element: <h1>About Us</h1>},
    
  ]},
  
]);
