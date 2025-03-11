import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'
import MainRoutes from './Routes';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes/>
  </BrowserRouter>
)
