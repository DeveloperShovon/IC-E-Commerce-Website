
import { createRoot } from 'react-dom/client'
import './index.css'


import { Provider } from 'react-redux'
import store from './App/store.js'
import { AuthProvider } from './contexts/authContext.jsx'
import { Router } from './Router/router.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </AuthProvider>
  </Provider>
)
