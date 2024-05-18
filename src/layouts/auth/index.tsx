import GetStarted from "@/components/custom/getStarted";
import Navigation from "@/components/custom/nav";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="h-screen flex bg-gradient-to-r lg:from-primary lg:to-light from-light to-light">
      <div className="w-full max-w-[90%] xl:max-w-[1300px] mx-auto">
        <header className="h-[15vh]">
          <Navigation />
        </header>
        <div className="w-full flex items-center justify-center h-[85vh]">
          <div className="w-full bg-primary h-full hidden lg:block">
            <GetStarted />
          </div>
          <div className="w-full h-full bg-light">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
