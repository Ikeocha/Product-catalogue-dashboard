
import React, { useContext } from 'react';
import ApiContext from '../ApiContext';


const SupplierSelector = () => {
  const { setSupplier } = useContext(ApiContext);

  const handleSupplierChange = (event) => {
    setSupplier(event.target.value);
  };

  return (
    <div className="supplier-selector">
      <select onChange={handleSupplierChange}>
        <option value="FragranceX">FragranceX</option>
        <option value="FragranceNet">FragranceNet</option>
        <option value="Morris Costumes">Morris Costumes</option>
      </select>
    </div>
  );
};

export default SupplierSelector;
