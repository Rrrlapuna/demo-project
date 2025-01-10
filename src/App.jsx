import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Admin from './components/admin/Admin';
import Dashboard from './components/common/Dashboard';
import ClientDetails from './components/common/ClientDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        
           <Route path="/admin" element={<Admin />}>
          {/* Nested routes for /admin */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="client-details" element={<ClientDetails />} />
          {/* <Route path="category-details" element={<CategoryDetails />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
