import { FC } from "react";
import Typography from "../typography";

type IFormErrorProps = {
  error?: string;
};

const FormError: FC<IFormErrorProps> = ({ error = "" }) => {
  return (
    <div className="text-error mt-[5px] flex items-center text-xs">
      <Typography
        type="p"
        weight="medium"
        className="text-error inline-block mr-1 text-base leading-4"
      />
      {error}
    </div>
  );
};

export default FormError;
