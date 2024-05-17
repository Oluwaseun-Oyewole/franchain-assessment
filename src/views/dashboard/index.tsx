import Typography from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import { Routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Typography
        type="h1"
        children="Welcome to Franchain"
        weight="medium"
        variant="displayXs"
      />

      <Button className="mt-3" onClick={() => navigate(Routes.login)}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
