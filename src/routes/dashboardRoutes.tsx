import React, { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Routes } from "./routes";

const Dashboard = lazy(() => import("../views/dashboard"));

// all dashboard related routes
export const dashboardRoutes = () => {
  return [
    {
      path: Routes.dashboard,
      element: <Dashboard />,
    },

    { path: "/dashboard", element: <Navigate to={Routes.dashboard} replace /> },
  ] as RouteObject[];
};
