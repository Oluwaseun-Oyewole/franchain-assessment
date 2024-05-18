import { Loader } from "@/components/custom/loader";
import Typography from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import FormikController from "@/formik/formikControls";
import {
  AccountVerificationFormValues,
  accountVerificationSchema,
} from "@/lib/schema/account.verfification";
import { Routes } from "@/routes/routes";
import { Toastify } from "@/utils/toasts";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ZodError } from "zod";

const AccountVerification = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const validateForm = (values: AccountVerificationFormValues) => {
    try {
      accountVerificationSchema.parse(values);
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

  const handleSubmit = async ({ resetForm }: any) => {
    try {
      Toastify.success("Account activated successfully");
      resetForm();
      navigate(Routes.login);
    } catch (error) {
      return;
    }
  };

  const handlePasswordResend = (email: string) => {
    Toastify.success(`An OTP code has been sent to ${email}`);
  };

  return (
    <div className="mt-6 md:mt-0 md:mb-32 bg-light h-full w-full lg:max-w-[85%] mx-auto flex flex-col items-start md:justify-center">
      <div>
        <Typography
          type="h1"
          children="Check your email for a code"
          weight="medium"
          variant="displayXs"
        />

        <div className="w-full mt-5">
          <Formik
            initialValues={{
              otp: "",
            }}
            validate={validateForm}
            onSubmit={handleSubmit}
            validateOnChange
            validateOnMount
          >
            {(formik) => {
              return (
                <Form>
                  <div
                    className={`flex flex-col ${
                      formik.isValid ? "gap-4" : "gap-2"
                    } w-full`}
                  >
                    <div className="relative">
                      <FormikController
                        control="input"
                        type="text"
                        name="otp"
                        label="Enter code"
                        value={formik.values.otp}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={!formik.isValid}
                    className="mt-3"
                  >
                    {formik.isSubmitting && <Loader />}
                    Continue
                  </Button>
                </Form>
              );
            }}
          </Formik>

          <div className="mt-7 flex items-center gap-2">
            <Typography
              type="p"
              children="Didn't receive a code? Check you spam folder"
              className="text-dark"
            />
            <Button
              className="bg-transparent hover:bg-transparent !text-primary100 !px-1 !py-0 !h-0"
              onClick={() => handlePasswordResend(email)}
            >
              <Typography
                type="span"
                children="click to resend"
                className="underline text-dark"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountVerification;
