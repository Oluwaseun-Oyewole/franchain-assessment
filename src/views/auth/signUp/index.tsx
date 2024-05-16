import { Loader } from "@/components/custom/loader";
import Typography from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import FormikController from "@/formik/formikControls";
import {
  RegisterFormValues,
  registerValidationSchema,
} from "@/lib/schema/signup";
import { Form, Formik } from "formik";
import { ZodError } from "zod";

const SignUp = () => {
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
      console.log("values -- ", values);
      resetForm();
    } catch (error) {
      return;
    }
  };

  return (
    <div className="w-full">
      <Typography children="Get started with Franchain" type="h1" />
      <Typography children="Create an account in 5 minutes" type="p" />

      <div className="w-full">
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
                <div>
                  <FormikController
                    control="input"
                    type="text"
                    id="First name"
                    placeholder="first name"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <FormikController
                    control="input"
                    type="text"
                    id="Last name"
                    placeholder="last name"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <FormikController
                    control="input"
                    type="text"
                    id="Business name and HQ location"
                    placeholder="business name"
                    name="businessName"
                    value={formik.values.businessName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <FormikController
                    control="input"
                    id="Work email"
                    type="email"
                    placeholder="work email address"
                    name="workEmail"
                    value={formik.values.workEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <FormikController
                    control="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="password"
                  />
                </div>

                <Button disabled={!formik.isValid}>
                  {formik.isSubmitting && <Loader />}
                  Sign up
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
