import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Loader from "../components/common/Loader";
import MainLayout from "../layout/MainLayout/MainLayout";

// Lazy Load Pages
const HomePage = lazy(() => import("../pages/HomePage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));
const AllProducts = lazy(() => import("../pages/AllProducts"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
