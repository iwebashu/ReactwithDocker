import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ResetPassword from "./module/authentication/resetPassword";
//import FrmAdvt from './module/advertisements/frmAdvt.tsx';
import FrmPost from './module/posts/frmPost.tsx';
import ListAdvt from './module/advertisements/listAdvt.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    <Routes>
          <Route path="/" element={<ResetPassword />} />
          <Route path="/mod/averstisement/:id/:dd" element={<ListAdvt />} />
          <Route path="/post" element={<FrmPost />} />
    </Routes>
    </BrowserRouter>

  </StrictMode>,
)
