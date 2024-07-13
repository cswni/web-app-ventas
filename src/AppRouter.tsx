import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage.tsx';
import ProductosPage from './pages/ProductosPage.tsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<IndexPage />}></Route>
      <Route path={'productos'} element={<ProductosPage />}></Route>
      <Route path={'ejemplo'} element={<p>Ejemplo</p>}></Route>
      <Route path={'informes'} element={<p>Informes</p>}></Route>
    </Routes>
  );
};

export default AppRouter;
