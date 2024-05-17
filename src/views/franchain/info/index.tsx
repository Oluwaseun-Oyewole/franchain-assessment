import Miller from "@/assets/miller.svg";
import Typography from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import { Routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const navigate = useNavigate();
  return (
    <div className="pb-32 mt-6 md:my-10 lg:max-w-[90%] flex flex-col justify-center lg:flex-row items-center lg:justify-between gap-10 lg:gap-0">
      <div>
        <div className="flex items-center justify-center lg:justify-start">
          <Typography
            children="Franchain has helped us collect royalties locally and internationally in a way we never thought was possible"
            type="h1"
            weight="medium"
            className="w-[80%] lg:w-[60%] text-sm text-center lg:text-left md:text-xl lg:!text-2xl text-dark"
          />
        </div>
        <Button
          type="submit"
          className="!mt-8 hidden lg:block"
          onClick={() => {
            navigate(Routes.dashboard);
          }}
        >
          Continue
        </Button>
      </div>
      <img
        src={Miller}
        alt="miller"
        className="w-[200px] md:w-[300px] lg:w-[400px]"
      />
      <Button
        type="submit"
        className="block lg:hidden"
        onClick={() => {
          navigate(Routes.dashboard);
        }}
      >
        Continue
      </Button>
    </div>
  );
};

export default Information;
