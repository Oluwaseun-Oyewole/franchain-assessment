import LeftComponent from "@/components/custom/left";
import React from "react";
import { Outlet } from "react-router-dom";
// import Navigation from "../../components/nav";

const AuthLayout = () => {
  return (
    <React.Fragment>
      <main className="">
        {/* <header className="">
          <Navigation />
        </header> */}
        <div className="max-w-[1300px] mx-auto">
          <div className="flex justify-between">
            <LeftComponent />
            <Outlet />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default AuthLayout;
