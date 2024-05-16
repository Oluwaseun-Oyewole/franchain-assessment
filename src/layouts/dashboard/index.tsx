import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <main className="max-w-[1300px] mx-auto">
      <Outlet />
    </main>
  );
};

export default DashboardLayout;
