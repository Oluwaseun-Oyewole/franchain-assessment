import { Navigate, RouteObject } from "react-router-dom";
import { FranchainGoals, FranchainInformation } from "./lazy";
import { Routes } from "./routes";

export const franchainRoutes = () => {
  return [
    {
      path: Routes.franchainGoals,
      element: <FranchainGoals />,
    },

    { path: Routes.franchainInfo, element: <FranchainInformation /> },

    {
      path: Routes.franchain,
      element: <Navigate to={Routes.franchainGoals} replace />,
    },
  ] as RouteObject[];
};
