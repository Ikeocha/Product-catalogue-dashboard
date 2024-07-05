import React from 'react';
import { ApiProvider } from './ApiContext';
import Header from './components/Header';
import SupplierSelector from './components/SupplierSelector';
import DataTable from './components/DataTable';
import './App.css';

const App = () => (
  <ApiProvider>
    <Header />
    <SupplierSelector />
    <div className="container">
      <h1>Department List</h1>
      <DataTable />
    </div>
  </ApiProvider>
);

export default App;
