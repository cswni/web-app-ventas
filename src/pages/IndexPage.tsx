import PageTitle from '../layout/PageTitle.tsx';

const IndexPage = () => {
  return (
    <>
      <PageTitle title={'Panel de control'} subtitle={'Resumen general'} icon={'bx-home-alt'} />
      <div className="row">
        <div className="col-12 d-flex">
          <div className="card rounded-4 w-100">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-around flex-wrap gap-4 p-4">
                <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                  <a
                    href="#"
                    className="mb-2 wh-48 bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center">
                    <i className="material-icons-outlined">shopping_cart</i>
                  </a>
                  <h3 className="mb-0">85,246</h3>
                  <p className="mb-0">Productos</p>
                </div>

                <div className="vr"></div>
                <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                  <a
                    href="#"
                    className="mb-2 wh-48 bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center">
                    <i className="material-icons-outlined">print</i>
                  </a>
                  <h3 className="mb-0">$96,147</h3>
                  <p className="mb-0">Ingresos</p>
                </div>

                <div className="vr"></div>
                <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                  <a
                    href="#"
                    className="mb-2 wh-48 bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center">
                    <i className="material-icons-outlined">person</i>
                  </a>
                  <h3 className="mb-0">846</h3>
                  <p className="mb-0">Clientes</p>
                </div>
                <div className="vr"></div>

                <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                  <a
                    href="#"
                    className="mb-2 wh-48 bg-info bg-opacity-10 text-info rounded-circle d-flex align-items-center justify-content-center">
                    <i className="material-icons-outlined">payment</i>
                  </a>
                  <h3 className="mb-0">$84,472</h3>
                  <p className="mb-0">Gastos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
