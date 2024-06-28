import { RouteObject } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Register from "../page/auth/Register";
import Login from "../page/auth/Login";
import IndexLayout from "../layout/buyerLayout";
import Home from "../page/Home";
import DetailProduct from "../page/DetailProduct/DetailProduct";
import Profile from "../page/profile";
import Cart from "../page/cart";
import TransactionForm from "../page/transactionForm";
import SellerLayout from "../layout/SellerLayout";
import SellerDashboard from "../page/sellerDashboard";
import ProductForm from "../page/productForm";
import RootLayout from "../layout/rootLayout";

const router: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/home",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "detailProduct/:id",
        element: <DetailProduct />,
      },
    ],
  },
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "detailProduct/:id",
        element: <DetailProduct />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "transaction/:id",
        element: <TransactionForm />,
      },
    ],
  },
  {
    path: "/seller",
    element: <SellerLayout />,
    children: [
      {
        index: true,
        element: <SellerDashboard />,
      },
      {
        path: "productform",
        element: <ProductForm />,
      },
    ],
  },
];

export default router;
