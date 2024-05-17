import { Button } from "@/components/ui/button";
import { AuthLinks, AuthTitle } from "@/helper/constants";
import { useLocation, useNavigate } from "react-router-dom";
import Arrow from "../../../assets/arrow.svg";
import Logo from "../../../assets/logo.svg";

type INav = {
  showBg?: boolean;
};
const Navigation = ({ showBg = true }: INav) => {
  const location = useLocation();
  const getTitle = location.pathname.split("/");
  const getTitleEnum = getTitle[getTitle.length - 1];
  const navigate = useNavigate();

  const clickNavigation = () => {
    if (AuthTitle[getTitleEnum] === "Go back") {
      navigate(-1);
    } else {
      navigate(`${AuthLinks[getTitleEnum]}`);
    }
  };

  return (
    <nav className="flex justify-between h-[100%]">
      <div
        className={`bg-light ${
          showBg && "lg:bg-primary"
        } w-full flex justify-start items-center`}
      >
        <img src={Logo} alt="logo image" className="w-[20px] lg:w-[28px]" />
      </div>
      <div className="w-full bg-light flex justify-end items-center">
        <Button
          className="flex items-center justify-end gap-6 bg-transparent hover:bg-transparent !text-dark !px-0 !py-0 !h-0"
          onClick={clickNavigation}
        >
          {AuthTitle[getTitleEnum]} <img src={Arrow} alt="arrow" />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
