"use client";
import { Loader } from "@/components/custom/loader";
import Typography from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import FormikController from "@/formik/formikControls";
import {
  PasswordResetFormValues,
  passwordResetValidationSchema,
} from "@/lib/schema/password.reset";
import { Form, Formik } from "formik";
import { ZodError } from "zod";

const PasswordReset = () => {
  const validateForm = (values: PasswordResetFormValues) => {
    try {
      passwordResetValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  const handleSubmit = async (
    values: PasswordResetFormValues,
    { resetForm }: any
  ) => {
    try {
      console.log("values --- ", values);
      resetForm();
    } catch (error) {
      return;
    }
  };

  return (
    <div className="w-full">
      <Typography type="h1" children="Reset Password " />
      <Typography
        type="p"
        children="Enter your email address to get instructions for resetting your password."
      />
      <div>
        <Formik
          initialValues={{
            email: "",
          }}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            return (
              <Form>
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

                <Button disabled={!formik.isValid}>
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
