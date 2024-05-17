import DashboardImage from "../../../assets/sign-up.svg";
import Typography from "../typography";
const GetStarted = () => {
  return (
    <div className="flex items-center justify-center flex-col text text-center h-[100%] gap-5">
      <img
        src={DashboardImage}
        alt="dashboard image"
        className="w-[250px] xl:w-[300px]"
      />
      <div className="flex flex-col gap-3">
        <div>
          <Typography
            type="h1"
            variant="displayXs"
            weight="medium"
            children="Royalty collections,"
            className="!text-dark tracking-wide"
          />
          <Typography
            type="h1"
            variant="displayXs"
            weight="medium"
            children="Simplified. It's next level!"
            className="!text-dark tracking-wide"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <Typography
            type="p"
            children="Revenue based invoice collection to make royalty collection as easy as..."
            variant="textMd"
            weight="regular"
            className="w-[75%] xl:w-[55%] text-dark"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
