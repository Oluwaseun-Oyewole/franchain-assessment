import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, ...props }, ref) => {
    return (
      <>
        <Label htmlFor={id}>{id}</Label>
        <input
          id={id}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border-gray border-[1.7px] outline-none bg-background px-5 py-5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-light placeholder:text-black placeholder:font-[300] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  focus:border-blue-400 transition-all ease-in-out duration-500 !font-light",
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