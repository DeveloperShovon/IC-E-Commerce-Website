import { BrowserRouter } from "react-router";

import { rootRouter } from "./Router/router.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";


function App() {
  return (
    <AuthProvider>
      <RouterProvider router={rootRouter} />
    </AuthProvider>
  );
}

export default App;
