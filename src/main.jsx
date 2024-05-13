import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Error from "./pages/Error.jsx";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import FAQ from "./pages/FAQ.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "testimonial",
        element: <Testimonial />,
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
        path: "FAQ",
        element: <FAQ />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
