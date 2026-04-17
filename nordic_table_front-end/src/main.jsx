import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    />
  </React.StrictMode>,
);

// path "*/" is a catch-all route that renders the App component for any path, allowing the App component to handle routing internally with nested routes.
// element - the component to render when the route is matched, in this case, the App component which serves as the main entry point for the application and contains the routing logic for the different pages and components within the app.
