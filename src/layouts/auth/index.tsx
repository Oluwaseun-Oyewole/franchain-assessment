import GetStarted from "@/components/custom/getStarted";
import Navigation from "@/components/custom/nav";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <React.Fragment>
      <main className="grid grid-flow-col grid-cols-[0%_100%_0%] lg:grid-cols-[10%_80%_10%] h-screen bg-light lg:bg-primary">
        <div className="bg-primary w-full"></div>
        <div>
          <header className="h-[15vh]">
            <Navigation />
          </header>
          <div className="w-full flex h-[85vh]">
            <div className="w-full bg-primary h-full hidden lg:block">
              <GetStarted />
            </div>
            <div className="w-full h-[100%] bg-light">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="w-full bg-light"></div>
      </main>
    </React.Fragment>
  );
};

export default AuthLayout;
