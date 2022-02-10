import {
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';

import Blog from '../pages/blog/';
import Home from '../pages/home/'
import Sobre from '../pages/sobre/';
import Navbar from '../components/navbar';

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/sobre" element={Sobre()} />
        <Route path="/blog" element={Blog()} />
        <Route path="/post" element={Blog()} />
      </Routes>
    </BrowserRouter>



  );

}