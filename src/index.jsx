import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Register from './routes/Register.jsx';
import Agenda from './routes/cgenda.jsx';
import Home from './routes/Home.jsx';
import ErrorPage from './error-page.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Agenda",
    element: <Agenda />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
