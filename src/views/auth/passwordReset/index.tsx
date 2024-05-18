"use client";
import { Loader } from "@/components/custom/loader";
import Typography from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import FormikController from "@/formik/formikControls";
import {
  PasswordResetFormValues,
  passwordResetValidationSchema,
} from "@/lib/schema/password.reset";
import { Routes } from "@/routes/routes";
import { Toastify } from "@/utils/toasts";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ZodError } from "zod";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const validateForm = (values: PasswordResetFormValues) => {
    try {
      passwordResetValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  useEffect(() => {
    if (window && typeof window !== "undefined") {
      const email = JSON.parse(localStorage.getItem("email")!);
      setEmail(email);
    }
  }, []);

  const handleSubmit = async (
    values: PasswordResetFormValues,
    { resetForm }: any
  ) => {
    try {
      Toastify.success(`A reset link has been sent to ${email}`);
      navigate(Routes.confirmPassword);
      localStorage.setItem("email", JSON.stringify(values.email));
      resetForm();
    } catch (error) {
      return;
    }
  };

  return (
    <div className="mt-6 md:mt-0 md:mb-32 lg:max-w-[85%] mx-auto bg-light h-full w-full flex flex-col items-start md:justify-center">
      <Typography
        children="Reset Password"
        type="h1"
        weight="medium"
        variant="displayXs"
      />
      <div className="w-full">
        <Typography
          type="p"
          children="Enter your email address to get instructions for resetting your password."
          className="py-3 text-dark w-[85%] md:w-[80%]  xl:w-[70%]"
          weight="regular"
        />
      </div>
      <div className="w-full py-4">
        <Formik
          initialValues={{
            email: "",
          }}
          validate={validateForm}
          onSubmit={handleSubmit}
          validateOnChange
          validateOnMount
        >
          {(formik) => {
            return (
              <Form>
                <FormikController
                  label="Email"
                  control="input"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <Button
                  disabled={!formik.isValid}
                  className="mt-3"
                  type="submit"
                >
                  {formik.isSubmitting && <Loader />}
                  Reset Password
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default PasswordReset;
