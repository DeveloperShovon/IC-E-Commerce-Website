
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';


import { Provider } from 'react-redux'
import store from './App/store.js'
// import { AuthProvider } from './contexts/authContext.jsx'
import { Router } from './Router/router.jsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './contexts/authContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProvider>
      <ToastContainer/>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
      
    </AuthProvider>
  </Provider>
)
