import { Loader } from "@/components/custom/loader";
import Typography from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import FormikController from "@/formik/formikControls";
import {
  RegisterFormValues,
  registerValidationSchema,
} from "@/lib/schema/signup";
import { Routes } from "@/routes/routes";
import { Toastify } from "@/utils/toasts";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ZodError } from "zod";

const SignUp = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const validateForm = (values: RegisterFormValues) => {
    try {
      registerValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  const handleSubmit = async (_: RegisterFormValues, { resetForm }: any) => {
    try {
      Toastify.success("An Otp code has been sent to your mail");
      resetForm();
      navigate(Routes.accountVerification);
    } catch (error) {
      return;
    }
  };

  return (
    <div className="mt-6 md:mt-0 md:mb-32 h-full w-full lg:max-w-[85%] mx-auto flex flex-col items-start md:justify-center overflow-y-scroll scroll-smooth">
      <div>
        <Typography
          children="Get started with Franchain"
          type="h1"
          weight="medium"
          variant="displayXs"
          className="md:mt-[180px] lg:mt-[200px] xl:mt-[100px]"
        />
        <Typography
          children="Create an account in 5 minutes"
          type="p"
          className="py-3 text-dark"
          weight="regular"
        />
      </div>

      <div className="w-full py-4">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            businessName: "",
            workEmail: "",
            password: "",
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
                  control="input"
                  type="text"
                  label="First name"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <FormikController
                  control="input"
                  type="text"
                  label="Last name"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <FormikController
                  control="input"
                  type="text"
                  label="Business name and HQ location"
                  name="businessName"
                  value={formik.values.businessName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <FormikController
                  control="input"
                  label="Work email"
                  type="email"
                  name="workEmail"
                  value={formik.values.workEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <FormikController
                  control="password"
                  label="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <Button
                  disabled={!formik.isValid || !check}
                  className="mt-5"
                  type="submit"
                >
                  {formik.isSubmitting && <Loader />}
                  Sign up
                </Button>
              </Form>
            );
          }}
        </Formik>

        <div>
          <p className="text-xs leading-5 lg:text-sm py-8 text-dark">
            By clicking
            <Button
              className={`!h-0 !py-0 !px-0 ${
                check ? "!text-primary100" : "!text-dark"
              } !pl-1 !text-sm`}
              onClick={() => setCheck(!check)}
            >
              "Start Application"
            </Button>
            , I agree to Mercury's
            <a
              className="underline"
              href="https://mercury.com/legal/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use Privacy Policy
            </a>
            and to receive electronic communication about my accounts and
            services per{" "}
            <a
              className="underline"
              href="https://mercury.com/legal/esign"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mercury's Electronic Communications Agreement
            </a>
            and acknowledge receipts of{" "}
            <a
              href="https://mercury.com/legal/patriot-act"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Mercury's USA patriotic act disclosure
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
