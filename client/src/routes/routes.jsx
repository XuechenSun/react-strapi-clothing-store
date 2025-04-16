import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sale from "../pages/Sale";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <ErrorBoundary
        fallback={<p>Oops! Network errror. Please try again later!</p>}
      >
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};
export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:categoryid",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/sale",
        element: <Sale />,
      },
      {
        path: "/accessories",
        element: <Sale />,
      },
      {
        path: "/shoes",
        element: <Sale />,
      },
      {
        path: "/newseason",
        element: <Sale />,
      },
    ],
  },
];
