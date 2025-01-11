import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
import Admin from "./components/admin/Admin";
import Dashboard from "./components/pages/Dashboard";
import ClientDetails from "./components/pages/ClientDetails";
import CategoryDetails from "./components/pages/CategoryDetails";
import BusinessClaims from "./components/pages/BusinessClaims";
import AllQueries from "./components/pages/AllQueries";
import DeleteBusiness from "./components/pages/DeleteBusiness";
import PendingBusiness from "./components/pages/PendingBusiness";
import Congratulations from "./components/pages/Congratulations";
import Logout from "./components/pages/Logout";
import { Navigate } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route: Redirect "/" to "/admin/dashboard" */}
        <Route path="/" element={<Navigate to="/admin/dashboard" />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />}>
          {/* Nested routes for /admin */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="client-details" element={<ClientDetails />} />
          <Route path="category-details" element={<CategoryDetails />} />
          <Route path="business-claims" element={<BusinessClaims />} />
          <Route path="all-queries" element={<AllQueries />} />
          <Route path="delete-business" element={<DeleteBusiness />} />
          <Route path="pending-business" element={<PendingBusiness />} />
          <Route path="congratulations" element={<Congratulations />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
