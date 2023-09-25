import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Donate from "../Pages/Donate/Donate";
import Statistics from "../Pages/Statistics/Statistics";
import CardDescription from "../Components/CardDescription/CardDescription";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/charity.json"),
      },
      {
        path: "/donation",
        element: <Donate></Donate>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/cardDescription/:id",
        element: <CardDescription></CardDescription>,
        loader: () => fetch("/public/charity.json"),
      },
    ],
  },
]);

export default Router;
