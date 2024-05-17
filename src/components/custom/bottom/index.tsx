import { Routes } from "@/routes/routes";
import { Link } from "react-router-dom";
import Typography from "../typography";

const Bottom = () => {
  return (
    <div className="border-t-[1px] border-gray-50 text-dark">
      <div className="pt-8 md:pt-20 flex justify-between flex-col">
        <Typography
          type="p"
          className="w-[90%]"
          children="Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not limited to JP Morgan, Barclays and Credit Suisse."
        />

        <div className="pt-8 md:pt-0 text-sm md:text-base font-bold md:flex gap-3 lg:gap-10">
          <div className="flex gap-3 lg:gap-10 items-center">
            <a
              href="https://mercury.com/legal/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
            <a
              href="https://mercury.com/legal/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy policy
            </a>
            <a href="#">Need help?</a>
          </div>

          <div className="py-8 flex items-center gap-3 lg:gap-10">
            <Link to={Routes.login}>Sign out and continue later</Link>
            <Link to={Routes.dashboard}>Back to dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
