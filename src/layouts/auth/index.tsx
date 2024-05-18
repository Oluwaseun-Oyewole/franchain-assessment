import GetStarted from "@/components/custom/getStarted";
import Navigation from "@/components/custom/nav";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="h-screen flex bg-gradient-to-r lg:from-primary lg:to-light from-light to-light">
      <div className="w-full">
        <header className="h-[15vh] w-full max-w-[90%] xl:max-w-[1300px] mx-auto">
          <Navigation />
        </header>
        <div className="w-full flex items-center justify-center h-[85vh] max-w-[90%] md:max-w-[70%] xl:max-w-[1300px] mx-auto">
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
