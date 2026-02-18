import { BrowserRouter } from "react-router"
import Navbar from "./component/Navbar.jsx"
import { rootRouter } from "./Router/router.jsx"


function App() {
  

  return (
    <BrowserRouter router={rootRouter}> 
     <rootRouter/>
    </BrowserRouter>
  )
}

export default App
