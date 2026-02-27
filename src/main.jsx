
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { rootRouter } from './Router/router.jsx'
import { Provider } from 'react-redux'
import store from './App/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={rootRouter} />
  </Provider>
  
)
