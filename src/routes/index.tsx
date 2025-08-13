import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import PrivateRoute from "../ProtectedRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <div>Login page</div>,
  },
]);
