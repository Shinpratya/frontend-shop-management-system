import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./stores/store.ts";
import { Provider } from "react-redux";

import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import BaseLayout from "./layouts/BaseLayout.tsx";
import ProtectedRoute from "./configs/protectedRoute.tsx";
import PointofSale from "./pages/PointofSale.tsx";
import ProductManagement from "./pages/ProductManagement.tsx";
import UserManagement from "./pages/UserManagement.tsx";

export const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "pos",
        element: (
          <ProtectedRoute>
            <PointofSale />
          </ProtectedRoute>
        ),
      },
      {
        path: "pm",
        element: (
          <ProtectedRoute>
            <ProductManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "um",
        element: (
          <ProtectedRoute>
            <UserManagement />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
