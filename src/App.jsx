import { RouterProvider } from "react-router";

import { rootRouter } from "./Router/router.jsx";



function App() {
  return (
    
      <RouterProvider router={rootRouter} />
    
  );
}

export default App;
