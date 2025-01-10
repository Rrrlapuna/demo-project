import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
import Admin from "./components/admin/Admin";
import Dashboard from "./components/common/Dashboard";
import ClientDetails from "./components/common/ClientDetails";
import CategoryDetails from "./components/common/CategoryDetails";
import BusinessClaims from "./components/common/BusinessClaims";
import AllQueries from "./components/common/AllQueries";
import DeleteBusiness from "./components/common/DeleteBusiness";
import PendingBusiness from "./components/common/PendingBusiness";
import Congratulations from "./components/common/Congratulations";
import Logout from "./components/common/Logout";
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
