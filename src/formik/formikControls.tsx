import FormError from "@/components/custom/formError";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password";
import { ErrorMessage } from "formik";
import { FC } from "react";

interface IFormikControlProps {
  control: "input" | "select" | "area" | "password" | "textarea";
  [key: string]: any;
}

const FormikController: FC<IFormikControlProps> = (props) => {
  const { control, name, value, label, type, ...rest } = props;
  switch (control) {
    case "input":
      return (
        <div className="py-1">
          <Input
            label={label}
            {...rest}
            name={name}
            type={type ? type : "text"}
            value={value}
          />
          <ErrorMessage name={name}>
            {(msg) => <div>{<FormError error={msg} />}</div>}
          </ErrorMessage>
        </div>
      );

    case "password":
      return (
        <div className="py-2">
          <PasswordInput label={label} {...rest} name={name} value={value} />
          <ErrorMessage name={name}>
            {(msg) => <div>{<FormError error={msg} />}</div>}
          </ErrorMessage>
        </div>
      );

    default:
      return null;
  }
};

export default FormikController;
