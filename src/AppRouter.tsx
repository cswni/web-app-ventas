import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage.tsx';
import ProductosPage from './pages/ProductosPage.tsx';
import PrivateRoutes from './utils/ProtectedRoutes.tsx';
import Login from './pages/AuthPages/Login.tsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path={'/home'} element={<IndexPage />}></Route>
        <Route path={'/productos'} element={<ProductosPage />}></Route>
        <Route path={'/ejemplo'} element={<p>Ejemplo</p>}></Route>
        <Route path={'/informes'} element={<p>Informes</p>}></Route>
      </Route>
      <Route path={'/'} element={<Login />}></Route>
      <Route path={'/login'} element={<Login />}></Route>
    </Routes>
  );
};

export default AppRouter;
