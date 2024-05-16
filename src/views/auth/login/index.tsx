import Typography from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import FormikController from "@/formik/formikControls";
import { LoginFormValues, loginValidationSchema } from "@/lib/schema/login";
import { Routes } from "@/routes/routes";
import { Form, Formik } from "formik";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { ZodError } from "zod";

const Login = () => {
  const validateForm = (values: LoginFormValues) => {
    try {
      loginValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  const handleSubmit = async (values: LoginFormValues, { resetForm }: any) => {
    try {
      console.log("Trying to submit", values);
      resetForm();
    } catch (error) {
      return;
    }
  };

  return (
    <div className="w-full">
      <Typography type="h1" children="Login to Franchan" />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className={`flex flex-col w-full`}>
                <FormikController
                  id="Email"
                  control="input"
                  type="email"
                  placeholder="email address"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <FormikController
                  id="Password"
                  control="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="password"
                />
              </div>

              <div className="w-full pb-5 font-[300] flex gap-1">
                <p> Forgot your password?</p>
                <Link to={Routes.passwordReset}>click here to reset</Link>
              </div>

              <Button
                type="submit"
                disabled={!formik.isValid}
                className="pt-5 !disabled:cursor-not-allowed w-full py-6 transition-all ease-in-out duration-500 flex items-center gap-2"
              >
                {formik.isSubmitting && <Loader />}
                login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
