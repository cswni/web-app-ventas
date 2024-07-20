import { Link } from 'react-router-dom';

import logoIcon from '@images/logo-icon.png';
import Menuitem from './Menuitem.tsx';

const Aside = () => {
  return (
    <aside className="sidebar-wrapper">
      <div className="sidebar-header">
        <div className="logo-icon">
          <img src={logoIcon} className="logo-img" alt="Logo" />
        </div>
        <div className="logo-name flex-grow-1">
          <h5 className="mb-0">Demo</h5>
        </div>
        <div className="sidebar-close">
          <span className="material-icons-outlined">close</span>
        </div>
      </div>
      <div className="sidebar-nav" data-simplebar="true">
        <ul className="metismenu" id="sidenav">
          <li>
            <Link to={'/home'}>
              <div className="parent-icon">
                <i className="material-icons-outlined">home</i>
              </div>
              <div className="menu-title">Inicio</div>
            </Link>
          </li>
          <li>
            <a href="#" className="has-arrow">
              <div className="parent-icon">
                <i className="material-icons-outlined">shopping_cart</i>
              </div>
              <div className="menu-title">Tienda</div>
            </a>

            <ul>
              <Menuitem title={'Productos'} icon={'arrow_right'} path={'productos'} />
              <Menuitem title={'Ejemplo'} icon={'arrow_right'} path={'ejemplo'} />
            </ul>
          </li>

          <li>
            <a href="#" className="has-arrow">
              <div className="parent-icon">
                <i className="material-icons-outlined">api</i>
              </div>
              <div className="menu-title">Informes</div>
            </a>

            <ul>
              <Menuitem title={'Reporte 1'} icon={'arrow_right'} path={'informes'} />
            </ul>
          </li>
        </ul>
      </div>
      <div className="sidebar-bottom gap-4">
        <div className="dark-mode">
          <a href="#" className="footer-icon dark-mode-icon">
            <i className="material-icons-outlined">dark_mode</i>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
