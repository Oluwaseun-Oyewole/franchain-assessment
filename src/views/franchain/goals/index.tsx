import { CheckBoxInput } from "@/components/custom/checkbox";
import Typography from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import { Routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import GlassImage from "../../../assets/glass.svg";

const FranchainGoals = () => {
  const navigate = useNavigate();
  const skeleton = new Array(8).fill("_");
  return (
    <div className="mb-14 md:mb-32">
      <div className="sticky top-0 left-0 bg-light text-center py-8">
        <Typography
          children="What's your goal with Franchain?"
          type="h1"
          weight="medium"
          variant="displayXs"
        />
        <Typography
          children="No wrong answers here. And it doesn't matter if you change your mind later"
          type="p"
          className="py-3 text-dark"
          weight="regular"
        />
      </div>

      <div className="md:mt-10 hidden md:grid grid-flows-col gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center">
        {skeleton?.map((_, index) => {
          return (
            <div
              className="bg-white flex justify-center gap-4 items-center h-[150px] rounded-lg border-[1px] border-gray"
              key={index}
            >
              <img src={GlassImage} alt="glass image" className="w-[50px]" />
              <div className="flex items-center" key={index}>
                <Typography
                  type="p"
                  children="Reduced failed payments"
                  className="w-[70%]"
                />
                <CheckBoxInput
                  name="experience"
                  id={""}
                  value={""}
                  checked={false}
                  job={""}
                  onChange={() => {}}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="block md:hidden w-full">
        {skeleton?.map((_, index) => {
          return (
            <div className="py-6 border-b-[1px] border-gray-50" key={index}>
              <div
                className="flex justify-between items-center w-full"
                key={index}
              >
                <Typography
                  type="p"
                  children="Reduced failed payments"
                  className=""
                />
                <CheckBoxInput
                  name="experience"
                  id={""}
                  value={""}
                  checked={false}
                  job={""}
                  onChange={() => {}}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden md:flex justify-center items-center">
        <Button
          type="submit"
          className="!mt-10"
          onClick={() => navigate(Routes.franchainInfo)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default FranchainGoals;
