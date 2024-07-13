import { FC } from 'react';

export interface PageTitleProps {
  title: string;
  subtitle: string;
  icon: string;
}

const PageTitle: FC<PageTitleProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
      <div className="breadcrumb-title pe-3">{title}</div>
      <div className="ps-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 p-0">
            <li className="breadcrumb-item">
              <a href="#">
                <i className={`bx ${icon}`}></i>
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {subtitle}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageTitle;
