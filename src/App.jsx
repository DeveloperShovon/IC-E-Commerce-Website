import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext.jsx";
import { Router } from "./Router/router.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
   
  );
}

export default App;
