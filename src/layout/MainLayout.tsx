import { FC } from 'react';

import Header from './Header.tsx';
import Aside from './Aside.tsx';

export interface MainLayoutProps {
  children?: JSX.Element;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Aside />
      <main className="main-wrapper">
        <div className="main-content">{children}</div>
      </main>

      <div className="overlay btn-toggle"></div>

      <footer className="page-footer">
        <p className="mb-0">Copyright © 2024. Carlos Andres Perez Ubeda.</p>
      </footer>
    </>
  );
};

export default MainLayout;
