import { Route, Routes } from "react-router-dom";
import App from './App';

import Login from './pages/Login/Login';


const MainRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="./login" element={<Login />} />
      </Routes>
   
  );
};

export default MainRoutes;