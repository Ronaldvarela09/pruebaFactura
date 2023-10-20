import React from "react";
import { Route, Routes } from "react-router-dom";
import LoadInvoice from "../Pages/Invoice/LoadInvoice/LoadInvoice";

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<LoadInvoice />} />
    </Routes>
  );
}
