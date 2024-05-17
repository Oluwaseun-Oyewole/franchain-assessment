import { ChangeEvent } from "react";

export const CheckBoxInput = ({
  name,
  id,
  value,
  checked,
  job,
  onChange,
}: {
  name: string;
  id: string;
  value: string;
  checked: boolean;
  job: any;
  onChange: (job: any, e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      value={value}
      checked={checked}
      onChange={(e) => onChange(job, e)}
      className="h-[20px] w-[25px] focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
    />
  );
};
