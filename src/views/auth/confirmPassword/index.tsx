import Typography from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import { Routes } from "@/routes/routes";
import { Toastify } from "@/utils/toasts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ConfirmPassword = () => {
  const [email, setEmail] = useState("");

  const handlePasswordResend = (email: string) => {
    Toastify.success(`A reset link has been sent to ${email}`);
  };

  useEffect(() => {
    if (window && typeof window !== "undefined") {
      const email = JSON.parse(localStorage.getItem("email")!);
      setEmail(email);
    }
  }, []);

  return (
    <div className="mt-6 xl:mt-0 xl:mb-32 lg:max-w-[85%] mx-auto bg-light h-full w-full flex flex-col items-start md:justify-center">
      <Typography
        type="h1"
        children="Check your email"
        weight="medium"
        variant="displayXs"
      />
      <Typography
        type="p"
        className="py-3 text-dark w-[88%] xl:w-[72%]"
        weight="regular"
      >
        Thanks! If {email ?? ""} matches an email address we have on file, then
        we've sent you an email containing further instructions for resetting
        your password.
      </Typography>

      <div className="py-3 text-dark xl:w-[80%]">
        If you haven't received an email in 5 minutes, check your spam,
        <Button
          onClick={() => handlePasswordResend(email)}
          className="bg-transparent hover:bg-transparent !text-primary100 !px-1 !py-0 !h-0"
        >
          resend
        </Button>
        or
        <Link to={Routes.passwordReset} className="text-primary100 pl-1">
          try a different email address
        </Link>
        .
      </div>
    </div>
  );
};

export default ConfirmPassword;
