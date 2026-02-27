// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import './index.css'
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <><ToastContainer/>
  <BrowserRouter>
    {/* <StrictMode> */}
      <App />
    {/* </StrictMode>  */}
  </BrowserRouter>
  
  </>
)
