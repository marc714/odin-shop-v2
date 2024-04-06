import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import React from "react";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import ShoppingPage, { productLoader } from "./pages/ShoppingPage";
import ShoppingCart from "./components/ShoppingCart";
import ProductPage from "./pages/ProductPage";

const Router = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App />,
  //     errorElement: <ErrorPage />,
  //   },
  // ]);

  // App shows homepage
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={ <MainLayout /> }>
  //       {/* Below goes into MainLayout's Outlet */}
  //       {/* App shows HomePage */}
  //       <Route index element={ <App /> } />
  //       <Route path="*" element={ <ErrorPage />} />
  //       <Route path="shop" element={ <ShoppingPage /> } loader={productLoader} />
  //       <Route path="cart" element={ <ShoppingCart /> } />
  //       <Route path="shop/:productid" element={ <ProductPage /> } />
  //     </Route>
  //   )
  // )

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<App />} />

        <Route element={<MainLayout />}>
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="shop"
            element={<ShoppingPage />}
            loader={productLoader}
          />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="shop/:productid" element={<ProductPage />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
