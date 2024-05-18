import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { Loader } from "./components/custom/loader";
import { PaymentProvider } from "./context";
import "./index.css";
import routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <PaymentProvider>
        <Toaster position="top-center" />
        <RouterProvider router={routes} fallbackElement={<Loader />} />
      </PaymentProvider>
    </Suspense>
  </React.StrictMode>
);
