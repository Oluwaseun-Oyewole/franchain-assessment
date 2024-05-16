import ErrorPage from "@/components/custom/error";
import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/auth";
import DashboardLayout from "../layouts/dashboard";
import { authenticationRoutes } from "./authenticationRoutes";
import { dashboardRoutes } from "./dashboardRoutes";
import RouteProtection from "./routeProtection";
import { Routes } from "./routes";

const routes = createBrowserRouter([
  {
    path: Routes.base,
    element: <Navigate to={Routes.auth} replace />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: (
      <RouteProtection redirect={Routes.dashboard} validations={[]}>
        <AuthLayout />
      </RouteProtection>
    ),
    children: [...authenticationRoutes()],
  },
  {
    path: "/dashboard",
    element: (
      <RouteProtection redirect={Routes.login} validations={[]}>
        <DashboardLayout />
      </RouteProtection>
    ),
    children: [...dashboardRoutes()],
  },
]);

export default routes;
