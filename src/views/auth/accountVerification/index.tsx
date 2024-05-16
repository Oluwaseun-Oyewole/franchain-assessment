import { Loader } from "@/components/custom/loader";
import Typography from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import FormikController from "@/formik/formikControls";
import {
  AccountVerificationFormValues,
  accountVerificationSchema,
} from "@/lib/schema/account.verfification";
import { Form, Formik } from "formik";

import { ZodError } from "zod";

const AccountVerification = () => {
  const validateForm = (values: AccountVerificationFormValues) => {
    try {
      accountVerificationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  const handleSubmit = async (
    values: AccountVerificationFormValues,
    { resetForm }: any
  ) => {
    try {
      console.log("handle submit -- ");
    } catch (error) {
      return;
    }
  };

  return (
    <div className="w-full">
      <div className="">
        <Typography type="h1" children="Enter the otp code sent to your mail" />

        <div className="w-full mt-5">
          <Formik
            initialValues={{
              otp: "",
            }}
            validate={validateForm}
            onSubmit={handleSubmit}
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

                  <Button disabled={!formik.isValid}>
                    {formik.isSubmitting && <Loader />}
                    Continue
                  </Button>
                </Form>
              );
            }}
          </Formik>

          <div className="flex items-center gap-2">
            <Typography
              type="p"
              children="Didn't receive a code?Check you spam folder"
            />
            <Typography
              type="span"
              children="click to resend"
              className="underline"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountVerification;
