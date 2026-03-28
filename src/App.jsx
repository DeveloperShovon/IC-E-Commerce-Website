import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext.jsx";
import { Router } from "./Router/router.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
