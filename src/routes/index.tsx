import ErrorPage from "@/components/custom/error";
import FranchainLayout from "@/layouts/franchainLayout";
import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/auth";
import DashboardLayout from "../layouts/dashboard";
import { authenticationRoutes } from "./authenticationRoutes";
import { dashboardRoutes } from "./dashboardRoutes";
import { franchainRoutes } from "./franchainRoutes";
import RouteProtection from "./routeProtection";
import { Routes } from "./routes";

const routes = createBrowserRouter([
  {
    path: Routes.base,
    element: <Navigate to={Routes.auth} replace />,
    errorElement: <ErrorPage />,
  },

  {
    path: Routes.franchain,
    element: <FranchainLayout />,
    children: [...franchainRoutes()],
  },

  {
    path: Routes.auth,
    element: (
      <RouteProtection redirect={Routes.dashboard} validations={[]}>
        <AuthLayout />
      </RouteProtection>
    ),
    children: [...authenticationRoutes()],
  },
  {
    path: Routes.dashboard,
    element: (
      <RouteProtection redirect={Routes.login} validations={[]}>
        <DashboardLayout />
      </RouteProtection>
    ),
    children: [...dashboardRoutes()],
  },
]);

export default routes;
