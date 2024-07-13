import avatar01 from '@images/avatars/01.png';

const Header = () => {
  return (
    <header className="top-header">
      <nav className="navbar navbar-expand align-items-center gap-4">
        <div className="btn-toggle">
          <a href="#">
            <i className="material-icons-outlined">menu</i>
          </a>
        </div>

        <div className="search-bar flex-grow-1">
          <div className="position-relative">
            <input
              className="form-control rounded-5 px-5 search-control d-lg-block d-none"
              type="text"
              placeholder="Buscar"
            />
            <span className="material-icons-outlined position-absolute d-lg-block d-none ms-3 translate-middle-y start-0 top-50">
              search
            </span>
            <span className="material-icons-outlined position-absolute me-3 translate-middle-y end-0 top-50 search-close">
              close
            </span>
          </div>
        </div>
        <ul className="navbar-nav gap-1 nav-right-links align-items-center">
          <li className="nav-item d-lg-none mobile-search-btn">
            <a className="nav-link" href="#">
              <i className="material-icons-outlined">search</i>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              href="#"
              className="dropdown-toggle dropdown-toggle-nocaret"
              data-bs-toggle="dropdown">
              <img src={avatar01} className="rounded-circle p-1 border" width="45" height="45" />
            </a>
            <div className="dropdown-menu dropdown-user dropdown-menu-end shadow">
              <a className="dropdown-item  gap-2 py-2" href="#">
                <div className="text-center">
                  <img
                    src={avatar01}
                    className="rounded-circle p-1 shadow mb-3"
                    width="90"
                    height="90"
                    alt=""
                  />
                  <h5 className="user-name mb-0 fw-bold">Hello, Jhon</h5>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <i className="material-icons-outlined">person_outline</i>Profile
              </a>
              <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <i className="material-icons-outlined">local_bar</i>Setting
              </a>
              <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <i className="material-icons-outlined">dashboard</i>Dashboard
              </a>
              <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <i className="material-icons-outlined">account_balance</i>Earning
              </a>
              <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <i className="material-icons-outlined">cloud_download</i>Downloads
              </a>
              <hr className="dropdown-divider" />
              <a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <i className="material-icons-outlined">power_settings_new</i>Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
