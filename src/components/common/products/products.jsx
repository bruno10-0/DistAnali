import { useState, useEffect } from "react";
import { getProducts } from "../../../api/auth.js";
import {Link} from "react-router-dom"
export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table bg-base-200">
          <thead>
            <tr>
              <th></th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Nombre Bodega</th>
              <th>Descripción Corta</th>
              <th>Descripción detallada</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Tipo</th>
              <th>Fecha de Creación</th>
              <th>Fecha de Actualización</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </td>
                <td>
                  <img
                    src={product.imagen}
                    alt={product.nombre}
                    className="w-12 h-12"
                  />
                </td>
                <td>{product.nombre}</td>
                <td>{product.nombreBodega}</td>
                <td>{product.descripcion_corta}</td>
                <td>{product.descripcion_detallada}</td>
                <td>{product.precio}</td>
                <td>{product.stock}</td>
                <td>{product.tipo}</td>
                <td>{product.createdAt}</td>
                <td>{product.updatedAt}</td>
                <td className="text-primary link"><Link to={`/admin/editar/vino/${product.id}`}>Detalles</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
