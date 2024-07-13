import PageTitle from '../layout/PageTitle.tsx';
import { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';
import ModalComponent from '../components/ModalComponent.tsx';
import EditarProductosComponent from './ProductosActions/EditarProductosComponent.tsx';

export type Producto = {
  id: number;
  nombre: string;
  codigo: string;
  precio: string;
  disponible: string;
};

export interface HandleProductoProps {
  producto: Producto;
  onUpdateProducto: (updatedFields: Partial<Producto>) => void;
}

const ProductosPage = () => {
  const [data, setData] = useState<Producto[]>(() => []);
  const [producto, setProducto] = useState<Producto>({
    codigo: '',
    disponible: '',
    id: 0,
    nombre: '',
    precio: ''
  });

  const updateProducto = (updatedFields: Partial<Producto>) => {
    setProducto((prevProducto) => ({ ...prevProducto, ...updatedFields }));
  };

  // Fetch data from API
  useEffect(() => {
    fetch('http://api.santarosadev.xyz/productos')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // Edit customer
  const editarCustomer = (producto: Producto) => () => {
    handleShowModal();
    setProducto(producto);
  };

  // Delete customer
  const eliminarCustomer = (id: number) => () => {
    console.log('Eliminar producto', id);
  };

  // Save changes
  const guardarCambios = () => {
    // Send data to API to save changes
    fetch('http://api.santarosadev.xyz/productos/' + producto.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    }).then((res) => {
      console.log('Producto actualizado', res);
      // Close modal and update data in table destructuring the previous state in data and updating the product
      handleCloseModal();
      setData((prevData: Producto[]) => {
        const index = prevData.findIndex((p) => p.id === producto.id);
        prevData[index] = producto;
        return [...prevData];
      });
    });
  };

  //Handle open  / close modal
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const columns = [
    {
      name: 'ID',
      selector: (row: Producto) => row.id
    },
    {
      name: 'Nombre',
      selector: (row: Producto) => row.nombre
    },
    {
      name: 'Disponible',
      selector: (row: Producto) => row.disponible
    },
    {
      name: 'Precio',
      selector: (row: Producto) => row.precio
    },
    {
      name: 'Código',
      selector: (row: Producto) => row.codigo
    },
    {
      name: 'Acciones',
      cell: (row: Producto) => (
        <>
          <div className={'d-flex gap-2'}>
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={editarCustomer(row)}
              className="btn btn-sm btn-warning">
              <i className="material-icons-outlined">edit</i>
            </button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={eliminarCustomer(row.id)}
              className="btn btn-sm btn-danger">
              <i className="material-icons-outlined">delete_forever</i>
            </button>
          </div>
        </>
      )
    }
  ];
  return (
    <>
      <PageTitle
        title={'Administración de productos'}
        subtitle={'Resumen general'}
        icon={'bx-package'}
      />

      <div className="container my-5">
        <DataTable columns={columns} data={data} fixedHeader pagination />
      </div>
      <ModalComponent
        show={showModal}
        title={'Editar detalles del producto'}
        onClose={handleCloseModal}
        onConfirm={guardarCambios}>
        <EditarProductosComponent producto={producto} onUpdateProducto={updateProducto} />
      </ModalComponent>
    </>
  );
};

export default ProductosPage;
