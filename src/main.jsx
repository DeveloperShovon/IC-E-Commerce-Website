
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { rootRouter } from './Router/router.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={rootRouter} />
)
