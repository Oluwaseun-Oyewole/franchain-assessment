import Typography from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import FormikController from "@/formik/formikControls";
import { LoginFormValues, loginValidationSchema } from "@/lib/schema/login";
import { Routes } from "@/routes/routes";
import { Form, Formik } from "formik";
import { Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ZodError } from "zod";

const Login = () => {
  const navigate = useNavigate();
  const validateForm = (values: LoginFormValues) => {
    try {
      loginValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  const handleSubmit = async ({ resetForm }: any) => {
    try {
      resetForm();
      navigate(Routes.dashboard);
    } catch (error) {
      return;
    }
  };

  return (
    <div className="mt-6 md:mt-0 md:mb-32 bg-light h-full w-full lg:max-w-[85%] mx-auto flex flex-col items-start md:justify-center">
      <Typography
        children="Login to Franchain"
        type="h1"
        weight="medium"
        variant="displayXs"
      />
      <div className="w-full py-4">
        <Formik
          initialValues={{
            email: "",
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
                <div className={`flex flex-col w-full`}>
                  <FormikController
                    label="Email"
                    control="input"
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <FormikController
                    label="Password"
                    control="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div className="w-full pb-3 font-[300] flex gap-1 text-sm">
                  <p> Forgot your password?</p>
                  <Link to={Routes.passwordReset} className="underline">
                    click here to reset
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={!formik.isValid}
                  className="mt-3"
                >
                  {formik.isSubmitting && <Loader />}
                  Log in
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
