import { z } from "zod";

export const passwordResetValidationSchema = z.object({
  email: z.string().email("Email is required"),
});

export type PasswordResetFormValues = z.infer<
  typeof passwordResetValidationSchema
>;
