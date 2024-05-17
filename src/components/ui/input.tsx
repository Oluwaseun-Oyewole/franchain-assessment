import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <>
        <div className="pb-1">
          <Label htmlFor={label} className="text-dark !font-light">
            {label}
          </Label>
        </div>
        <input
          id={label}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border-gray border-[1.4px] outline-none bg-background px-5 py-6 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-light placeholder:text-black placeholder:font-[300] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  focus:border-blue-400 transition-all ease-in-out duration-500 !font-light",
            className
          )}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
