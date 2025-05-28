import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Landmain from "./components/landing/mainland";
import Tour from "./components/tour/tour";
import About from "./components/about/about";
import Cardpage from "./components/cardpage/cardpage";
import SearchPage from "./components/searchPage.jsx/searchPage";
import "./App.css";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landmain /> },
      { path: "about", element: <About /> },
      { path: "tour", element: <Tour /> },
      { path: "tour/:tourid", element: <Cardpage /> },
      { path: "search", element: <SearchPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
