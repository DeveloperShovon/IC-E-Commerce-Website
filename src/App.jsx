import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext.jsx";
import { Router } from "./Router/router.jsx";

function App() {
  return (
    
      <BrowserRouter>
        <Router />
      </BrowserRouter>
   
  );
}

export default App;
