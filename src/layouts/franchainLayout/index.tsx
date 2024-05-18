import Bottom from "@/components/custom/bottom";
import Navigation from "@/components/custom/nav";
import { Button } from "@/components/ui/button";
import { usePaymentContext } from "@/context";
import { Routes } from "@/routes/routes";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const FranchainLayout = () => {
  const location = useLocation();
  const getTitle = location.pathname.split("/");
  const getTitleEnum = getTitle[getTitle.length - 1];
  const navigate = useNavigate();
  const { payments } = usePaymentContext();
  const isPaymentChecked = payments?.some((payment) => payment.checked);

  const handleClick = () => {
    localStorage.setItem("allPayments", JSON.stringify(payments));
    navigate(Routes.franchainInfo);
  };

  return (
    <React.Fragment>
      <main className="h-screen bg-light overflow-y-scroll">
        <div className="max-w-[90%] xl:max-w-[1300px] mx-auto">
          <header className="sticky top-0 left-0 bg-light z-10 h-[15vh]">
            <Navigation showBg={false} />
          </header>
          <div className="w-full flex  overflow-y-scroll">
            <div className="w-full h-[100%] bg-light">
              <Outlet />
            </div>
          </div>
        </div>
        <Bottom />

        {getTitleEnum === "goals" && (
          <div className="md:hidden flex justify-center items-center pb-5 bg-[#EEEEF5]">
            <Button
              disabled={!isPaymentChecked}
              type="submit"
              className="!mt-10 !h-16 text-lg !w-[90%]"
              onClick={handleClick}
            >
              Continue
            </Button>
          </div>
        )}
      </main>
    </React.Fragment>
  );
};

export default FranchainLayout;
