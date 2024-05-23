import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import FAQs from "./pages/FAQs.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./pages/pages.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "faqs",
        element: <FAQs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
