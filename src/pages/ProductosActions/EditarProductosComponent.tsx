import React, { FC } from 'react';
import { HandleProductoProps } from '../ProductosPage.tsx';

const EditarProductosComponent: FC<HandleProductoProps> = ({ producto, onUpdateProducto }) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    onUpdateProducto({ [id]: value });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          value={producto.nombre}
          onChange={handleValueChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="codigo" className="form-label">
          Código
        </label>
        <input
          type="text"
          className="form-control"
          id="codigo"
          value={producto.codigo}
          onChange={handleValueChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="precio" className="form-label">
          Precio
        </label>
        <input
          type="text"
          className="form-control"
          id="precio"
          value={producto.precio}
          onChange={handleValueChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="disponible" className="form-label">
          Disponible
        </label>
        <input
          type="text"
          className="form-control"
          id="disponible"
          value={producto.disponible}
          onChange={handleValueChange}
        />
      </div>
    </form>
  );
};

export default EditarProductosComponent;
