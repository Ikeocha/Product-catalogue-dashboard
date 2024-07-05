import React, { useContext } from 'react';
import ApiContext from '../ApiContext';


const DataTable = () => {
  const { products, loading, error } = useContext(ApiContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Image</th>
          <th>SKU</th>
          <th>Name</th>
          <th>Title</th>
          <th>Description</th>
          <th>Brand</th>
          <th>Cost Price</th>
          <th>Retail Price</th>
          <th>Quantity</th>
          <th>Size</th>
          <th>Gender</th>
          <th>UPC</th>
          <th>Catalog Time</th>
          <th>Supplier</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.SKU}>
            <td>{index + 1}</td>
            <td><img src={product.Image_1} alt={product.Name} /></td>
            <td>{product.SKU}</td>
            <td>{product.Name}</td>
            <td>{product.Title}</td>
            <td>{product.Description}</td>
            <td>{product.Brand}</td>
            <td>{product['Cost Price']}</td>
            <td>{product.RETAIL}</td>
            <td>{product.Quantity}</td>
            <td>{product.size}</td>
            <td>{product.Gender}</td>
            <td>{product.UPC}</td>
            <td>{product.catalog_time}</td>
            <td>{product.supplier}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
