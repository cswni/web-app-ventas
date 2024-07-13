import React, { FC, PropsWithChildren } from 'react';

interface ModalComponentProps {
  show: boolean;
  title: string | React.ReactElement;
  onClose?: () => void;
  onConfirm?: () => void;
}

const ModalComponent: FC<PropsWithChildren<ModalComponentProps>> = ({
  show,
  title,
  children,
  onClose,
  onConfirm
}) => {
  return (
    <div
      className={`modal fade ${show ? 'show' : ''}`}
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary "
              data-bs-dismiss="modal"
              onClick={onClose}>
              Cerrar
            </button>
            {onConfirm ? (
              <button
                data-bs-dismiss="modal"
                onClick={onConfirm}
                type="button"
                className="btn btn-primary">
                Guardar
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
