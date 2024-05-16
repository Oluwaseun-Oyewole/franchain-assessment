import Typography from "@/components/custom/typography";
import { Routes } from "@/routes/routes";
import { Link } from "react-router-dom";

const ConfirmPassword = () => {
  return (
    <div>
      <Typography type="h1" children="Check your email" />
      <Typography type="p">
        Thanks! If "email" matches an email address we have on file, then we've
        sent you an email containing further instructions for resetting your
        password.
      </Typography>

      <Typography type="p">
        If you haven't received an email in 5 minutes, check your spam resend or
        <Link to={Routes.passwordReset}> try a different email address</Link>.
      </Typography>
    </div>
  );
};

export default ConfirmPassword;
