import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { store } from "./store";
import MainLayout from "./layout/MainLayout/MainLayout";
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import AllProducts from "./pages/AllProducts";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="all-products"  element={<AllProducts/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
