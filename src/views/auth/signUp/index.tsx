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
import { useNavigate } from "react-router-dom";
import { ZodError } from "zod";

const SignUp = () => {
  const navigate = useNavigate();
  const validateForm = (values: RegisterFormValues) => {
    try {
      registerValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  const handleSubmit = async (
    values: RegisterFormValues,
    { resetForm }: any
  ) => {
    try {
      Toastify.success("Form registration Successful");
      resetForm();
      navigate(Routes.accountVerification);
    } catch (error) {
      return;
    }
  };

  return (
    <div className="mb-32 bg-light h-full w-full max-w-[85%] mx-auto overflow-y-scroll scroll-smooth ">
      <div className="sticky top-0 left-0 bg-light">
        <Typography
          children="Get started with Franchain"
          type="h1"
          weight="medium"
          variant="displayXs"
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
                  disabled={!formik.isValid}
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
            By clicking "Start Application", I agree to Mercury's{" "}
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
