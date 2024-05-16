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
          <Outlet />
        </div>
      </main>
    </React.Fragment>
  );
};

export default AuthLayout;
